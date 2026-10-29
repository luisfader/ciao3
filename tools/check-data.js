// Verifica la coerenza dei dati delle unità: node tools/check-data.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = path.join(__dirname, "..", "js", "data");
const ctx = { window: {} };
vm.createContext(ctx);
fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort().forEach((f) => {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
});

const norm = (s) => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:«»"“”()…—–\-\/]/g, " ").replace(/'\s+/g, "'").replace(/\s+/g, " ").trim();
const alts = (a) => (Array.isArray(a) ? a : [a]);
const TYPES = ["read", "mc", "tf", "fill", "type", "order", "listen", "match"];
const SPEAKERS = ["Roberto", "Natalia", "Luis", "Natascia", "Carlotta", "Lorenzo", "Alessio", "Laura", "Maria", "Franco", "Chiara", "Alice", "Marco", "Cameriere", "Intervistatore", "Robert", "McGregor", "La donna in rosa", "Impiegato"];

let errors = 0, count = 0;
const err = (where, msg) => { errors++; console.log("✗ " + where + ": " + msg); };

const units = ctx.window.CIAO_UNITS || [];
if (units.length !== 10) err("units", "attese 10 unità, trovate " + units.length);
units.forEach((u) => {
  ["n", "title", "topics", "color", "color2", "shadow", "notes", "lessons", "frase"].forEach((k) => { if (!u[k]) err("U" + u.n, "manca " + k); });
  u.lessons.forEach((l, li) => {
    if (!l.ex || !l.ex.length) err(`U${u.n}L${li}`, "nessun esercizio");
    l.ex.forEach((e, ei) => {
      count++;
      const w = `U${u.n} «${l.title}» #${ei + 1} (${e.t})`;
      if (!TYPES.includes(e.t)) return err(w, "tipo sconosciuto");
      if (e.t === "read") {
        if (!e.title || !e.text) err(w, "titolo o testo mancante");
        // un nome che ricorre più volte all'inizio di riga è quasi certamente un personaggio
        const seen = {};
        e.text.split("\n").forEach((line) => {
          const m = line.trim().match(/^([A-ZÀ-Ú][A-Za-zÀ-ú' ]{1,26}):\s+/);
          if (m && !SPEAKERS.includes(m[1])) seen[m[1]] = (seen[m[1]] || 0) + 1;
        });
        Object.keys(seen).forEach((k) => { if (seen[k] > 1) err(w, "personaggio non riconosciuto: " + k); });
      }
      if (e.t === "mc") {
        if (!Array.isArray(e.o) || e.o.length < 2) err(w, "opzioni insufficienti");
        else if (!(e.a >= 0 && e.a < e.o.length)) err(w, "indice risposta fuori range");
        if (new Set(e.o).size !== e.o.length) err(w, "opzioni duplicate");
        if (e.s && e.s.split("___").length > 2) err(w, "più di uno spazio in una scelta multipla");
      }
      if (e.t === "tf" && typeof e.a !== "boolean") err(w, "risposta non booleana");
      if (e.t === "fill") {
        const blanks = e.s.split("___").length - 1;
        if (!Array.isArray(e.a)) err(w, "a deve essere un array");
        else if (blanks !== e.a.length) err(w, `spazi ${blanks} ≠ risposte ${e.a.length}`);
        if (e.bank) {
          e.a.forEach((a, i) => {
            if (!alts(a).some((x) => e.bank.map(norm).includes(norm(x)))) err(w, `risposta ${i + 1} (${alts(a)[0]}) non è nella banca`);
          });
          const need = {};
          e.a.forEach((a) => { const k = norm(alts(a)[0]); need[k] = (need[k] || 0) + 1; });
          Object.keys(need).forEach((k) => {
            const have = e.bank.filter((b) => norm(b) === k).length;
            if (have < need[k] && !e.a.some((a) => alts(a).length > 1)) err(w, `la banca ha ${have}× «${k}», servono ${need[k]}`);
          });
        }
      }
      if (e.t === "type" && (!e.a || !alts(e.a).length)) err(w, "nessuna risposta");
      if (e.t === "order" || e.t === "listen") {
        if (!e.a || e.a.split(/\s+/).length < 2) err(w, "frase troppo corta");
        (e.d || []).forEach((d) => { if (e.a.split(/\s+/).map(norm).includes(norm(d))) err(w, "distrattore uguale a una parola della frase: " + d); });
      }
      if (e.t === "match") {
        const L = e.pairs.map((p) => p[0]), R = e.pairs.map((p) => p[1]);
        if (new Set(L).size !== L.length || new Set(R).size !== R.length) err(w, "elementi duplicati negli abbinamenti");
        if (e.pairs.length < 2 || e.pairs.length > 6) err(w, "numero di coppie fuori range (2–6)");
      }
    });
  });
});
console.log(`\n${units.length} unità · ${units.reduce((s, u) => s + u.lessons.length, 0)} lezioni · ${count} esercizi · ${errors} errori`);
process.exit(errors ? 1 : 0);
