/* =========================================================
   Ciao, amore! 3 — motore degli esercizi
   ========================================================= */
(function () {
  "use strict";

  var UNITS = (window.CIAO_UNITS || []).slice().sort(function (a, b) { return a.n - b.n; });
  var STORE_KEY = "ciaoamore3-progress-v1";
  var DAILY_GOAL = 50;
  var LESSON_HEARTS = 5;
  var TEST_HEARTS = 3;
  var TEST_SIZE = 14;
  var app = document.getElementById("app");

  /* ---------------- Icone ---------------- */
  var I = {
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.4 2.4h1.6c.8-1.3 2.3-2.4 4.4-2.4 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>',
    heartOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.4 2.4h1.6c.8-1.3 2.3-2.4 4.4-2.4 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="#f0a23b"><path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-4-1-6 1-9.5z"/><path d="M12 14c.6 1.5 2 2 2 3.6a2 2 0 0 1-4 0c0-1.2.9-1.8 2-3.6z" fill="#fff3c4"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="#e8c35a"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2l-5.9 3.2 1.3-6.5L2.5 9.3l6.6-.8z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-4 4v-4H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"/><path d="M21 9h.5A1.5 1.5 0 0 1 23 10.5V16a2 2 0 0 1-2 2v3l-3-3h-5a2 2 0 0 1-2-2h5a4 4 0 0 0 4-4z" opacity=".6"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5C3 4.1 4.1 3 5.5 3H11v17H5.5A2.5 2.5 0 0 1 3 17.5z"/><path d="M13 3h5.5C19.9 3 21 4.1 21 5.5v12a2.5 2.5 0 0 1-2.5 2.5H13z" opacity=".7"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.2 3.6a2 2 0 0 1 2.8 0l2.4 2.4a2 2 0 0 1 0 2.8L9 20.2l-5.6 1 1-5.6z"/><path d="M13.8 5l5.2 5.2" stroke="#fff" stroke-opacity=".5" stroke-width="1.5"/></svg>',
    column: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 8l10-5 10 5v1H2z"/><rect x="3" y="20" width="18" height="2" rx="1"/><rect x="4.5" y="10.5" width="3" height="8.5" rx=".8"/><rect x="10.5" y="10.5" width="3" height="8.5" rx=".8"/><rect x="16.5" y="10.5" width="3" height="8.5" rx=".8"/></svg>',
    mask: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 7c3-2 6.5-2 10 0 3.5-2 7-2 10 0 0 6-3 10-6.5 10-1.8 0-2.8-1.2-3.5-2.6-.7 1.4-1.7 2.6-3.5 2.6C5 17 2 13 2 7zm5 3.3c-1.2 0-2 .6-2.4 1.3 1.6.6 3.3.6 4.8 0-.4-.7-1.2-1.3-2.4-1.3zm10 0c-1.2 0-2 .6-2.4 1.3 1.5.6 3.2.6 4.8 0-.4-.7-1.2-1.3-2.4-1.3z"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 11H5z"/><rect x="5" y="19" width="14" height="2.2" rx="1"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h.5A1.5 1.5 0 0 1 19 11.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-8A1.5 1.5 0 0 1 6.5 10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5 10-11"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9.5h4l5-4.5v14l-5-4.5H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.3 2h3.4l.5 2.6 1.8.8 2.2-1.5 2.4 2.4-1.5 2.2.8 1.8 2.6.5v3.4l-2.6.5-.8 1.8 1.5 2.2-2.4 2.4-2.2-1.5-1.8.8-.5 2.6h-3.4l-.5-2.6-1.8-.8-2.2 1.5-2.4-2.4 1.5-2.2-.8-1.8L2 13.7v-3.4l2.6-.5.8-1.8-1.5-2.2 2.4-2.4 2.2 1.5 1.8-.8zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 7v1.8h8V10zm0 4v1.8h8V14zm0-8v1.8h5V6z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2h3v2.5a4.5 4.5 0 0 1-4.2 4.5A5 5 0 0 1 13 14.8V17h3v3H8v-3h3v-2.2A5 5 0 0 1 8.2 12 4.5 4.5 0 0 1 4 7.5V5h3zm0 4H6v.5a2.5 2.5 0 0 0 1.4 2.2A6 6 0 0 1 7 8zm10 0v1a6 6 0 0 1-.4 1.7A2.5 2.5 0 0 0 18 7.5V7z"/></svg>',
    sad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 16.5c2-2 5-2 7 0"/><path d="M9 9.5h.01M15 9.5h.01" stroke-width="3"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".25"/><circle cx="12" cy="12" r="6" opacity=".55"/><circle cx="12" cy="12" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  var ORNAMENT = '<svg viewBox="0 0 108 36" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M54 4c6 6 6 22 0 28-6-6-6-22 0-28z" fill="currentColor" fill-opacity=".15"/><path d="M46 18c-8-9-20-9-28 0 8 9 20 9 28 0zM62 18c8-9 20-9 28 0-8 9-20 9-28 0z"/><circle cx="10" cy="18" r="2.5" fill="currentColor"/><circle cx="98" cy="18" r="2.5" fill="currentColor"/></svg>';
  var LOGO = '<svg class="brand-logo" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#5c1520" stroke="#c9a34e" stroke-width="2.5"/><path d="M32 47 C18 37 15 30 15 25 a8.5 8.5 0 0 1 17-2 a8.5 8.5 0 0 1 17 2 c0 5-3 12-17 22z" fill="#f6efe2"/><path d="M32 41 C23 34 21 30 21 27 a5 5 0 0 1 11-1.5 a5 5 0 0 1 11 1.5 c0 3-2 7-11 14z" fill="#c9a34e"/></svg>';
  var SKYLINE = '<svg class="hero-skyline" viewBox="0 0 600 70" preserveAspectRatio="none" fill="#e8d39a"><path d="M0 70V52h30V40h8v-8h4v8h8v12h20V30l6-10 6 10v22h14V44h10v-6h3v6h10v8h18V24h3V12h2v12h3v28h22V42c0-6 10-6 10 0v10h16V36l12-8 12 8v16h18V46h6V20l3-6 3 6v26h6v6h20V40h4v-6h10v6h4v12h22V30h4l4-8 4 8h4v22h16V44c0-8 14-8 14 0v8h24V38h10V28h2v10h10v14h18V42h6v-4h6v4h6v10h24V34l10-12 10 12v18h20V44h12v8h18v18z"/><path d="M60 64c20-6 40-6 60 0M220 66c25-6 50-6 75 0M420 64c22-5 44-5 66 0" stroke="#e8d39a" stroke-width="2" fill="none"/></svg>';
  var UNIT_PATTERN = '<svg class="unit-pattern" viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2"><path d="M50 5c12 15 12 35 0 50-12-15-12-35 0-50zM50 55c12 15 12 30 0 40-12-10-12-25 0-40zM5 50c15-12 35-12 50 0-15 12-35 12-50 0zM55 50c15-12 30-12 40 0-10 12-25 12-40 0z"/><circle cx="50" cy="50" r="6"/></svg>';
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function unitImage(unit, key) { return "assets/img/u" + pad2(unit.n) + "-" + key + ".jpg"; }
  function lessonImage(unit, idx) { return idx === "test" ? unitImage(unit, "test") : unitImage(unit, "abcde".charAt(idx) || "a"); }
  var ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  var LESSON_ICONS = { chat: I.chat, book: I.book, pen: I.pen, column: I.column, mask: I.mask, star: I.star };

  /* ---------------- Stato ---------------- */
  var state = loadState();
  function defaultState() {
    return { xp: 0, lessons: {}, units: {}, daily: {}, streak: { count: 0, last: null }, sound: true, teacher: false };
  }
  function loadState() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        var d = defaultState();
        for (var k in d) if (!(k in s)) s[k] = d[k];
        return s;
      }
    } catch (e) { /* storage non disponibile */ }
    return defaultState();
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function yesterday() {
    var d = new Date(); d.setDate(d.getDate() - 1);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function currentStreak() {
    var s = state.streak;
    if (!s.last) return 0;
    if (s.last === today() || s.last === yesterday()) return s.count;
    return 0;
  }
  function addXP(n) {
    state.xp += n;
    var t = today();
    state.daily[t] = (state.daily[t] || 0) + n;
    if (state.streak.last !== t) {
      state.streak.count = state.streak.last === yesterday() ? state.streak.count + 1 : 1;
      state.streak.last = t;
    }
    saveState();
  }

  (function readTeacherParam() {
    var q = location.search;
    if (/[?&]docente=1/.test(q)) { state.teacher = true; saveState(); }
    if (/[?&]docente=0/.test(q)) { state.teacher = false; saveState(); }
  })();

  function lessonKey(u, i) { return u + "-" + i; }
  function unitPassed(n) { return !!(state.units[n] && state.units[n].passed); }
  function unitUnlocked(n) { return state.teacher || n === UNITS[0].n || unitPassed(n - 1); }
  function lessonDone(u, i) { return !!(state.lessons[lessonKey(u, i)] && state.lessons[lessonKey(u, i)].done); }
  function lessonUnlocked(unit, i) {
    if (!unitUnlocked(unit.n)) return false;
    if (state.teacher) return true;
    return i === 0 || lessonDone(unit.n, i - 1);
  }
  function testUnlocked(unit) {
    if (!unitUnlocked(unit.n)) return false;
    if (state.teacher) return true;
    for (var i = 0; i < unit.lessons.length; i++) if (!lessonDone(unit.n, i)) return false;
    return true;
  }
  function getUnit(n) { for (var i = 0; i < UNITS.length; i++) if (UNITS[i].n === n) return UNITS[i]; return null; }
  function currentUnit() {
    for (var i = 0; i < UNITS.length; i++) if (!unitPassed(UNITS[i].n)) return UNITS[i];
    return UNITS[UNITS.length - 1];
  }

  /* ---------------- Utilità ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[.,!?;:«»"“”()…—–\-\/]/g, " ")
      .replace(/'\s+/g, "'")
      .replace(/\s+/g, " ").trim();
  }
  function bare(s) { return norm(s).normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function alts(a) { return Array.isArray(a) ? a : [a]; }
  // 2 = esatto, 1 = giusto ma senza accenti corretti, 0 = sbagliato
  function compare(input, answers) {
    var n = norm(input), b = bare(input), best = 0;
    alts(answers).forEach(function (a) {
      if (norm(a) === n) best = 2;
      else if (best < 1 && bare(a) === b) best = 1;
    });
    return best;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function setUnitColors(el, unit) {
    el.style.setProperty("--unit", unit.color);
    el.style.setProperty("--unit-2", unit.color2);
    el.style.setProperty("--unit-ombra", unit.shadow);
  }
  function toast(msg) {
    var old = $(".toast"); if (old) old.remove();
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }

  /* ---------------- Voce italiana ----------------
     Sceglie la voce italiana migliore disponibile (Google italiano in Chrome,
     voci «Natural» di Edge, voci Premium di Apple), usa una voce maschile e una
     femminile nei dialoghi e legge frase per frase: così Chrome non si blocca
     sui testi lunghi (bug dei 15 secondi) e l’intonazione è più naturale. */
  var synth = window.speechSynthesis || null;
  // Voci italiane note, per sistema: Windows/Edge, macOS/iOS, Android/ChromeOS, Google
  var MALE_NAMES = /\b(cosimo|diego|giuseppe|benigno|calogero|gianni|lisandro|rinaldo|luca|eddy|reed|rocko|grandpa|nonno|giorgio|marcello|paolo|alessandro|roberto|carlo|fabio|federico|male|uomo|maschile)\b|it-it-x-it[cd]|itc-|itd-|#male/i;
  var FEMALE_NAMES = /\b(elsa|isabella|alice|federica|paola|emma|chiara|kiara|giovanna|fiamma|imelda|irma|palmira|pierina|flo|sandy|shelley|grandma|nonna|silvia|francesca|female|donna|femminile)\b|google italiano|it-it-x-it[ab]|ita-|itb-|#female/i;
  var MALE_CHARS = /^(Roberto|Robert|Luis|Lorenzo|Alessio|Franco|Marco|Cameriere|Intervistatore|McGregor|Impiegato|Giuseppe|Antonio|Leonardo|Aldo|Paolo|Gianni|Giovanni)$/;
  var voices = { female: null, male: null, all: [], realMale: false };
  function voiceGender(v) {
    var n = v.name + " " + (v.voiceURI || "");
    if (MALE_NAMES.test(n) && !FEMALE_NAMES.test(v.name)) return "m";
    if (FEMALE_NAMES.test(n)) return "f";
    return "?";
  }
  function voiceScore(v) {
    var n = v.name, sc = 0;
    if (/^it[-_]IT/i.test(v.lang)) sc += 20; else if (/^it/i.test(v.lang)) sc += 10;
    if (/google/i.test(n)) sc += 60;
    if (/natural|neural|online/i.test(n)) sc += 70;
    if (/premium|enhanced|siri/i.test(n)) sc += 55;
    if (/compact|espeak|grandpa|grandma|rocko|reed|eddy|flo|sandy|shelley/i.test(n)) sc -= 40;
    return sc;
  }
  function pickVoice() {
    if (!synth) return;
    var vs = (synth.getVoices() || []).filter(function (v) { return /^it/i.test(v.lang); });
    vs.sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
    voices.all = vs;
    var byName = function (n) { return vs.filter(function (v) { return v.name === n; })[0] || null; };
    var males = vs.filter(function (v) { return voiceGender(v) === "m"; });
    var females = vs.filter(function (v) { return voiceGender(v) !== "m"; });
    voices.male = byName(state.voiceM) || males[0] || null;
    voices.female = byName(state.voiceF) || females[0] || null;
    voices.realMale = !!voices.male;
    if (!voices.male) {
      // Nessuna voce maschile installata: si usa una voce femminile molto più grave.
      // Le voci locali rispettano meglio il tono di quelle online di Google.
      voices.male = vs.filter(function (v) { return v.localService && v !== voices.female; })[0] ||
                    vs.filter(function (v) { return v.localService; })[0] || voices.female;
    }
  }
  if (synth) { pickVoice(); if ("onvoiceschanged" in synth) synth.addEventListener("voiceschanged", pickVoice); }
  function canSpeak() { return !!synth; }

  // divide il testo in frasi brevi
  function chunks(text) {
    var out = [];
    String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?…»])\s+(?=[«"A-ZÀ-Ú0-9—–-])/).forEach(function (seg) {
      while (seg.length > 190) {
        var cut = seg.lastIndexOf(", ", 190); if (cut < 60) cut = seg.lastIndexOf(" ", 190); if (cut < 1) cut = 190;
        out.push(seg.slice(0, cut + 1)); seg = seg.slice(cut + 1).trim();
      }
      if (seg) out.push(seg);
    });
    return out;
  }
  var speechQueue = [], speechToken = 0, keepAlive = null, liveUtter = null, speechDone = null;
  function makeUtter(item) {
    var u = new SpeechSynthesisUtterance(item.text.replace(/[«»“”"]/g, "").replace(/\s—\s/g, ", "));
    u.lang = "it-IT";
    var male = item.male;
    var v = male ? voices.male : voices.female;
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = item.rate || 0.94;
    if (male && !voices.realMale) { u.pitch = 0.45; u.rate = (item.rate || 0.94) * 0.95; }
    else if (!male && voices.female && voiceGender(voices.female) === "m") u.pitch = 1.35;
    return u;
  }
  function playQueue(token) {
    if (token !== speechToken) return;
    var item = speechQueue.shift();
    if (!item) { stopKeepAlive(); markSpeaking(null); var cb = speechDone; speechDone = null; if (cb) cb(); return; }
    markSpeaking(item.el || null);
    var u = makeUtter(item); liveUtter = u;
    var next = function () { if (u._done) return; u._done = true; setTimeout(function () { playQueue(token); }, item.pause || 120); };
    u.onend = next; u.onerror = next;
    synth.speak(u);
  }
  function startKeepAlive() {
    stopKeepAlive();
    // Chrome interrompe le voci online dopo ~15 s: pausa/ripresa le tiene vive
    keepAlive = setInterval(function () { if (synth.speaking && !synth.paused) { synth.pause(); synth.resume(); } }, 9000);
  }
  function stopKeepAlive() { if (keepAlive) clearInterval(keepAlive); keepAlive = null; }
  function markSpeaking(el) {
    $all(".speaking").forEach(function (x) { x.classList.remove("speaking"); });
    $all(".reading.has-speech").forEach(function (x) { if (!el || !x.contains(el)) x.classList.remove("has-speech"); });
    if (el && el.closest) { var rd = el.closest(".reading"); if (rd) rd.classList.add("has-speech"); }
    if (el) { el.classList.add("speaking"); if (el.scrollIntoView && el.getBoundingClientRect().bottom > window.innerHeight - 110) el.scrollIntoView({ behavior: "smooth", block: "center" }); }
  }
  function speakItems(items, done) {
    if (!synth) return;
    if (!voices.all.length) pickVoice();
    stopSpeech();
    var token = ++speechToken;
    speechQueue = items; speechDone = done || null;
    startKeepAlive();
    setTimeout(function () { playQueue(token); }, 60); // Chrome: speak() subito dopo cancel() a volte viene ignorato
  }
  function speak(text, rate, male) {
    speakItems(chunks(text).map(function (c) { return { text: c, rate: rate, male: male }; }));
  }
  function speaking() { return !!synth && (synth.speaking || speechQueue.length > 0); }
  function speakerLine(line) {
    var m = line.match(/^([A-ZÀ-Ú][A-Za-zÀ-ú' ]{1,26}):\s+(.*)$/);
    if (!m) return null;
    if (CHAR_COLORS[m[1]]) return m;
    var first = m[1].split(" ")[0];
    return CHAR_COLORS[first] && first !== "La" ? [m[0], first, m[2]] : null;
  }
  function stripSpeakers(text) {
    return text.split("\n").map(function (l) { var m = speakerLine(l.trim()); return m ? m[2] : l; }).join(" ");
  }

  /* ---------------- Suoni ---------------- */
  var audioCtx = null;
  function tone(freqs, dur, type, vol) {
    if (!state.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = audioCtx.currentTime;
      freqs.forEach(function (f, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = type || "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + i * dur);
        g.gain.exponentialRampToValueAtTime(vol || 0.18, t0 + i * dur + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + (i + 1) * dur);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(t0 + i * dur); o.stop(t0 + (i + 1) * dur + 0.02);
      });
    } catch (e) { /* audio non disponibile */ }
  }
  function sndOk() { tone([660, 880], 0.11, "sine", 0.16); }
  function sndKo() { tone([220, 160], 0.14, "triangle", 0.16); }
  function sndWin() { tone([523, 659, 784, 1046], 0.13, "sine", 0.15); }

  /* ---------------- Coriandoli tricolore ---------------- */
  function confetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var c = document.createElement("canvas"); c.id = "confetti";
    document.body.appendChild(c);
    var ctx = c.getContext("2d"), W, H;
    function size() { W = c.width = innerWidth; H = c.height = innerHeight; }
    size();
    var cols = ["#2f8a4c", "#ffffff", "#c23b3b", "#c9a34e", "#e8d39a"];
    var P = [];
    for (var i = 0; i < 150; i++) P.push({ x: Math.random() * W, y: -20 - Math.random() * H * .5, r: 4 + Math.random() * 6, c: cols[i % cols.length], vy: 2 + Math.random() * 3, vx: -1.5 + Math.random() * 3, a: Math.random() * 6, va: -.2 + Math.random() * .4 });
    var start = performance.now();
    (function frame(t) {
      ctx.clearRect(0, 0, W, H);
      P.forEach(function (p) {
        p.y += p.vy; p.x += p.vx; p.a += p.va;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
        ctx.fillStyle = p.c; ctx.strokeStyle = "rgba(0,0,0,.08)";
        ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.strokeRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
        ctx.restore();
      });
      if (t - start < 2800) requestAnimationFrame(frame); else c.remove();
    })(start);
  }

  /* =========================================================
     MAPPA
     ========================================================= */
  function renderTopbar() {
    var dailyXP = state.daily[today()] || 0;
    return '<header class="topbar"><div class="topbar-inner">' +
      '<a class="brand" href="#/">' + LOGO +
      '<div class="brand-text"><div class="brand-title">Ciao, <span>amore!</span> 3</div><div class="brand-sub">Italiano B1 · Roberto Fader</div></div></a>' +
      '<div class="stats">' +
      '<div class="stat" title="Giorni di fila">' + I.flame + '<span>' + currentStreak() + '</span></div>' +
      '<div class="stat" title="Punti esperienza (XP)">' + I.star + '<span>' + state.xp + '</span></div>' +
      '<button class="icon-btn" id="btn-settings" aria-label="Impostazioni">' + I.gear + '</button>' +
      '</div></div></header>' + (dailyXP ? "" : "");
  }

  function renderMap() {
    stopSpeech();
    var cur = currentUnit();
    var html = renderTopbar() + '<div class="page"><main class="main-col">';
    html += '<section class="hero">' + SKYLINE +
      '<div class="hero-art" aria-hidden="true"><img src="assets/img/u02-cover.jpg" alt=""><img src="assets/img/u08-cover.jpg" alt=""><img src="assets/img/u10-cover.jpg" alt=""></div>' +
      '<div class="hero-kicker">Corso di italiano per stranieri · Livello B1</div>' +
      '<h1>Ciao, <span>amore!</span> 3</h1>' +
      '<p>Dieci unità, dieci storie: Venezia, Firenze, gli Etruschi, i romanzi di Roberto Fader e un po’ di gelosia. Completa le lezioni e supera la prova finale per aprire l’unità successiva.</p>' +
      '</section>';

    UNITS.forEach(function (unit) {
      var unlocked = unitUnlocked(unit.n);
      html += '<section class="unit' + (unlocked ? "" : " locked") + '" id="unit-' + unit.n + '" data-unit="' + unit.n + '">';
      html += '<div class="unit-banner"><div class="unit-cover" style="background-image:url(' + unitImage(unit, "cover") + ')"></div>' + UNIT_PATTERN +
        '<div class="unit-medal">' + ROMAN[unit.n] + '</div>' +
        '<div class="unit-kicker">Unità ' + unit.n + (unitPassed(unit.n) ? " · completata" : "") + '</div>' +
        '<div class="unit-title">' + esc(unit.title) + '</div>' +
        '<div class="unit-topics">' + esc(unit.topics) + '</div>' +
        '<div class="unit-actions"><button class="chip-btn" data-notes="' + unit.n + '">' + I.notes + ' Note di grammatica</button></div>' +
        (unlocked ? "" : '<div class="unit-lockmsg">' + I.lock + ' Supera la prova finale dell’Unità ' + (unit.n - 1) + ' per sbloccarla</div>') +
        '</div>';
      html += '<div class="path">' +
        '<figure class="polaroid p1"><img src="' + unitImage(unit, "a") + '" alt="" loading="lazy" decoding="async"></figure>' +
        '<figure class="polaroid p2"><img src="' + unitImage(unit, "c") + '" alt="" loading="lazy" decoding="async"></figure>' +
        '<figure class="polaroid p3"><img src="' + unitImage(unit, "e") + '" alt="" loading="lazy" decoding="async"></figure>';
      var offsets = [0, 52, 78, 52, 0, -52, -78, -52];
      var foundCurrent = false;
      unit.lessons.forEach(function (les, i) {
        var done = lessonDone(unit.n, i), open = lessonUnlocked(unit, i);
        var isCur = open && !done && unit === cur && !foundCurrent;
        if (isCur) foundCurrent = true;
        var cls = "node" + (done ? " done" : "") + (!open ? " locked" : "") + (isCur ? " current" : "");
        var icon = !open ? I.lock : done ? I.check : (LESSON_ICONS[les.icon] || I.star);
        html += '<div class="node-wrap" style="transform:translateX(' + offsets[i % offsets.length] + 'px)">' +
          (isCur ? '<div class="node-tip">Inizia</div>' : "") +
          '<button class="' + cls + '" data-lesson="' + unit.n + ':' + i + '" aria-label="' + esc(les.title) + (open ? "" : " (bloccata)") + '">' + icon + '</button>' +
          '<div class="node-label">' + esc(les.title) + '</div></div>';
      });
      var tOpen = testUnlocked(unit), tDone = unitPassed(unit.n);
      var tCur = tOpen && !tDone && unit === cur && !foundCurrent;
      html += '<div class="node-wrap" style="transform:translateX(' + offsets[unit.lessons.length % offsets.length] + 'px)">' +
        (tCur ? '<div class="node-tip">Prova finale</div>' : "") +
        '<button class="node test' + (tDone ? " done" : "") + (!tOpen ? " locked" : "") + (tCur ? " current" : "") + '" data-test="' + unit.n + '" aria-label="Prova finale dell’unità ' + unit.n + '">' + (tOpen ? I.crown : I.lock) + '</button>' +
        '<div class="node-label">Prova finale</div></div>';
      html += '</div></section>';
    });
    html += '<p class="footer-note">«Ciao, amore! 3» — corso di italiano per stranieri di Roberto Fader.</p>';
    html += '</main>';

    // Colonna laterale
    var dailyXP = state.daily[today()] || 0;
    var pct = Math.min(1, dailyXP / DAILY_GOAL);
    var circ = 2 * Math.PI * 30;
    var passed = UNITS.filter(function (u) { return unitPassed(u.n); }).length;
    html += '<aside class="side-col">';
    html += '<div class="card"><div class="goal-ring"><svg viewBox="0 0 70 70"><circle cx="35" cy="35" r="30" fill="none" stroke="#e6d7bb" stroke-width="8"/><circle cx="35" cy="35" r="30" fill="none" stroke="#c9a34e" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + (circ * pct) + ' ' + circ + '" transform="rotate(-90 35 35)"/><text x="35" y="40" text-anchor="middle" font-family="Nunito" font-weight="900" font-size="15" fill="#7d1f2c">' + Math.round(pct * 100) + '%</text></svg>' +
      '<div><strong>Obiettivo del giorno</strong><div class="muted">' + dailyXP + ' / ' + DAILY_GOAL + ' XP oggi · ' + passed + ' / ' + UNITS.length + ' unità completate</div></div></div></div>';
    if (cur && cur.frase) {
      html += '<div class="card frase-cuore side-hide-mobile"><h3>Frase del cuore</h3><blockquote>«' + esc(cur.frase.t) + '»</blockquote><cite>— ' + esc(cur.frase.c) + '</cite></div>';
    }
    html += '<div class="card side-hide-mobile"><h3>Come funziona</h3><div class="legend">' +
      '<div><i style="background:var(--rosso)"></i> Lezione disponibile</div>' +
      '<div><i style="background:var(--oro)"></i> Lezione completata</div>' +
      '<div><i style="background:#d8cfc1"></i> Bloccata</div>' +
      '<div class="muted">Hai 5 cuori per lezione: ogni errore ne costa uno e la domanda torna alla fine. La prova finale (3 cuori) apre l’unità successiva.</div>' +
      '</div></div>';
    html += '</aside></div>';
    app.innerHTML = html;

    $all("[data-lesson]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = b.getAttribute("data-lesson").split(":"), unit = getUnit(+p[0]), i = +p[1];
        if (!lessonUnlocked(unit, i)) {
          toast(unitUnlocked(unit.n) ? "Completa prima la lezione precedente." : "Unità bloccata: supera la prova finale dell’Unità " + (unit.n - 1) + ".");
          return;
        }
        location.hash = "#/u/" + unit.n + "/l/" + i;
      });
    });
    $all("[data-test]").forEach(function (b) {
      b.addEventListener("click", function () {
        var unit = getUnit(+b.getAttribute("data-test"));
        if (!testUnlocked(unit)) { toast("Completa tutte le lezioni dell’unità per aprire la prova finale."); return; }
        location.hash = "#/u/" + unit.n + "/test";
      });
    });
    $all("[data-notes]").forEach(function (b) {
      b.addEventListener("click", function () { openNotes(getUnit(+b.getAttribute("data-notes"))); });
    });
    $all(".unit").forEach(function (sec) { setUnitColors(sec, getUnit(+sec.getAttribute("data-unit"))); });
    $("#btn-settings").addEventListener("click", openSettings);
  }

  function scrollToCurrent(unitN, onlyIfHidden) {
    var target = unitN ? $("#unit-" + unitN) : $(".node.current");
    if (!target) return;
    if (onlyIfHidden && target.getBoundingClientRect().bottom < window.innerHeight - 40) return;
    target.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function openModal(unit, title, bodyHTML) {
    var back = document.createElement("div");
    back.className = "modal-back";
    back.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(title) + '"><div class="modal-head"><h2>' + esc(title) + '</h2><button class="close-btn" aria-label="Chiudi">' + I.close + '</button></div><div class="modal-body">' + bodyHTML + '</div></div>';
    if (unit) setUnitColors(back, unit);
    document.body.appendChild(back);
    function close() { back.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(e) { if (e.key === "Escape") close(); }
    back.addEventListener("click", function (e) { if (e.target === back) close(); });
    $(".close-btn", back).addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return { el: back, close: close };
  }

  function openNotes(unit) {
    openModal(unit, "Unità " + unit.n + " · Note importanti", '<div class="notes">' + unit.notes + '</div>');
  }

  function voiceSelect(id, label, list, cur) {
    return '<p><label>' + label + '<br><select id="' + id + '" class="voice-select">' +
      (cur ? "" : '<option value="" selected>— nessuna voce adatta —</option>') +
      list.map(function (v) {
        var g = voiceGender(v);
        return '<option value="' + esc(v.name) + '"' + (cur === v ? " selected" : "") + '>' + esc(v.name.replace(/^Microsoft |^Google /, "")) +
          (g === "m" ? " · uomo" : g === "f" ? " · donna" : "") + (v.localService ? "" : " · online") + '</option>';
      }).join("") + '</select></label></p>';
  }
  function openSettings() {
    var m = openModal(null, "Impostazioni",
      '<div class="notes">' +
      '<h3>Audio</h3><p><label><input type="checkbox" id="opt-sound"' + (state.sound ? " checked" : "") + '> Effetti sonori</label></p>' +
      (canSpeak() && voices.all.length ? voiceSelect("opt-voice-f", "Voce delle donne", voices.all, voices.female) +
        voiceSelect("opt-voice-m", "Voce degli uomini", voices.all, voices.realMale ? voices.male : null) +
        '<p><button class="speak-btn" id="opt-voice-try" type="button">' + I.speaker + 'Prova le due voci</button></p>' +
        (voices.realMale ? "" : '<p class="warn">Questo browser non ha una voce italiana maschile: per gli uomini si usa una voce femminile resa più grave. ' +
          'Per una vera voce maschile: in <b>Microsoft Edge</b> ci sono «Diego» e «Giuseppe»; su <b>Windows</b> si installa la voce italiana «Cosimo» (Impostazioni → Ora e lingua → Voce); su <b>Mac/iPhone</b> la voce «Luca» (Impostazioni → Accessibilità → Contenuti letti). Poi riapri questa pagina.</p>') : "") +
      '<p class="muted">' + (canSpeak() ? (voices.all.length ? "La pronuncia usa le voci italiane installate nel tuo dispositivo." : "Installa una voce italiana nel sistema per sentire la pronuncia.") : "La sintesi vocale non è disponibile su questo dispositivo.") + '</p>' +
      '<h3>Progressi</h3><p>XP totali: <b>' + state.xp + '</b> · Unità completate: <b>' + UNITS.filter(function (u) { return unitPassed(u.n); }).length + '</b></p>' +
      (state.teacher ? '<p class="warn">Modalità docente attiva: tutte le unità sono aperte. <button class="link-btn" id="opt-teacher-off">Disattiva</button></p>' : "") +
      '<p><button class="btn red" id="opt-reset">Azzera i progressi</button></p>' +
      '</div>');
    $("#opt-sound", m.el).addEventListener("change", function (e) { state.sound = e.target.checked; saveState(); });
    [["#opt-voice-f", "voiceF"], ["#opt-voice-m", "voiceM"]].forEach(function (o) {
      var el = $(o[0], m.el); if (!el) return;
      el.addEventListener("change", function () { state[o[1]] = el.value; saveState(); pickVoice(); });
    });
    var tryB = $("#opt-voice-try", m.el);
    if (tryB) tryB.addEventListener("click", function () {
      speakItems([{ text: "Ciao! Io sono Natalia. Benvenuti al corso di italiano." }, { text: "E io sono Roberto. Cominciamo?", male: true, pause: 300 }]);
    });
    var off = $("#opt-teacher-off", m.el);
    if (off) off.addEventListener("click", function () { state.teacher = false; saveState(); m.close(); route(); });
    $("#opt-reset", m.el).addEventListener("click", function () {
      if (confirm("Vuoi davvero cancellare tutti i progressi?")) {
        var snd = state.sound; state = defaultState(); state.sound = snd; saveState(); m.close(); route();
      }
    });
  }

  /* =========================================================
     LEZIONE
     ========================================================= */
  var S = null; // sessione corrente
  var pendingUnlock = null;
  function stopSpeech() {
    if (!synth) return;
    speechToken++; speechQueue = []; speechDone = null; stopKeepAlive();
    synth.cancel(); markSpeaking(null);
    $all(".is-playing").forEach(function (b) { b.classList.remove("is-playing"); });
  }

  function startLesson(unit, idx) {
    var les = unit.lessons[idx];
    S = {
      unit: unit, idx: idx, mode: "lesson", title: les.title,
      queue: les.ex.map(function (e) { return { ex: e }; }),
      total: les.ex.length, done: 0, hearts: LESSON_HEARTS, maxHearts: LESSON_HEARTS,
      firstTry: 0, graded: 0, start: Date.now()
    };
    renderLessonShell();
    next();
  }

  function startTest(unit) {
    var pool = [];
    unit.lessons.forEach(function (l) { l.ex.forEach(function (e) { if (e.t !== "read" && !e.noTest) pool.push(e); }); });
    // prova equilibrata: qualche esercizio da ogni lezione
    var picked = shuffle(pool).slice(0, TEST_SIZE);
    S = {
      unit: unit, idx: "test", mode: "test", title: "Prova finale",
      queue: picked.map(function (e) { return { ex: e }; }),
      total: picked.length, done: 0, hearts: TEST_HEARTS, maxHearts: TEST_HEARTS,
      firstTry: 0, graded: 0, start: Date.now()
    };
    renderLessonShell();
    next();
  }

  function renderLessonShell() {
    app.innerHTML =
      '<div class="lesson">' +
      '<div class="lesson-top"><button class="close-btn" id="quit" aria-label="Esci dalla lezione">' + I.close + '</button>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill"></div></div>' +
      '<div class="hearts" aria-label="Cuori">' + I.heart + '<span id="hearts-n"></span></div></div>' +
      '<div class="lesson-body" id="body"></div>' +
      '<div class="footer-bar" id="footer"><div class="footer-inner">' +
      '<div class="feedback" id="feedback"></div>' +
      '<button class="btn" id="main-btn" disabled>Verifica</button></div></div>' +
      '</div>';
    setUnitColors(app.firstChild, S.unit);
    $("#quit").addEventListener("click", function () {
      if (S && S.done > 0 && !S.finished && !confirm("Vuoi uscire? Perderai i progressi di questa lezione.")) return;
      location.hash = "#/";
    });
    $("#main-btn").addEventListener("click", onMain);
    updateTop();
  }

  function updateTop() {
    var pct = S.total ? Math.round((S.done / S.total) * 100) : 0;
    $(".progress-fill").style.width = pct + "%";
    $(".progress").setAttribute("aria-valuenow", pct);
    $("#hearts-n").textContent = S.hearts;
  }

  var cur = null;      // esercizio corrente {ready(), check(), ...}
  var phase = "answer"; // answer | feedback

  function next() {
    stopSpeech();
    if (!S.queue.length || S.hearts <= 0) { finish(); return; }
    var item = S.queue[0];
    phase = "answer";
    var footer = $("#footer"); footer.className = "footer-bar";
    $("#feedback").innerHTML = "";
    var btn = $("#main-btn");
    btn.className = "btn"; btn.textContent = "Verifica"; btn.disabled = true;
    var body = $("#body");
    body.innerHTML = "";
    body.scrollTop = 0; window.scrollTo(0, 0);
    cur = RENDER[item.ex.t](item.ex, body, item);
    if (item.ex.t === "read") { btn.textContent = "Continua"; btn.disabled = false; btn.className = "btn green"; }
    refreshReady();
    var focusEl = $("input, textarea", body);
    if (focusEl && window.innerWidth > 700) focusEl.focus();
  }

  function refreshReady() {
    if (phase !== "answer" || !cur) return;
    var item = S.queue[0];
    if (item.ex.t === "read") return;
    $("#main-btn").disabled = !cur.ready();
  }

  function onMain() {
    if (phase === "feedback") { next(); return; }
    var item = S.queue[0];
    if (!item) return;
    if (phase === "answer") {
      if (item.ex.t === "read") { S.queue.shift(); S.done++; updateTop(); next(); return; }
      if (!cur.ready()) return;
      var r = cur.check();
      showFeedback(r, item);
    } else {
      next();
    }
  }

  var PRAISE = ["Perfetto!", "Bravissimo!", "Ottimo!", "Esatto!", "Benissimo!", "Splendido!", "Magnifico!"];
  function showFeedback(r, item) {
    phase = "feedback";
    var footer = $("#footer"), fb = $("#feedback"), btn = $("#main-btn");
    var ex = item.ex;
    if (!item.retried) S.graded++;
    if (r.ok) {
      if (!item.retried) S.firstTry++;
      S.done++;
      S.queue.shift();
      sndOk();
      footer.className = "footer-bar ok";
      fb.innerHTML = '<div class="feedback-icon">' + I.check + '</div><div><h4>' + PRAISE[Math.floor(Math.random() * PRAISE.length)] + '</h4>' +
        (r.note ? '<div class="sol">' + esc(r.note) + '</div>' : "") +
        (ex.why ? '<div class="why">' + esc(ex.why) + '</div>' : "") + '</div>';
      btn.className = "btn green";
    } else {
      sndKo();
      S.hearts--;
      var h = $(".hearts"); h.classList.remove("shake"); void h.offsetWidth; h.classList.add("shake");
      S.queue.shift();
      if (S.mode === "lesson") S.queue.push({ ex: ex, retried: true });
      else S.done++;
      footer.className = "footer-bar ko";
      fb.innerHTML = '<div class="feedback-icon">' + I.x + '</div><div><h4>Risposta corretta:</h4>' +
        '<div class="sol">' + esc(r.solution || "") + '</div>' +
        (ex.why ? '<div class="why">' + esc(ex.why) + '</div>' : "") + '</div>';
      btn.className = "btn red";
    }
    btn.textContent = "Continua"; btn.disabled = false;
    updateTop();
    btn.focus({ preventScroll: true });
  }

  function finish() {
    stopSpeech();
    S.finished = true;
    var unit = S.unit, ok = S.hearts > 0;
    var secs = Math.round((Date.now() - S.start) / 1000);
    var time = Math.floor(secs / 60) + ":" + pad(secs % 60);
    var acc = S.graded ? Math.round((S.firstTry / S.graded) * 100) : 100;
    var xp = 0, unlockedNext = null;
    if (ok) {
      sndWin();
      if (S.mode === "lesson") {
        var k = lessonKey(unit.n, S.idx), first = !lessonDone(unit.n, S.idx);
        xp = 10 + S.hearts + (first ? 5 : 0);
        state.lessons[k] = { done: true, best: Math.max(acc, (state.lessons[k] && state.lessons[k].best) || 0) };
      } else {
        var firstPass = !unitPassed(unit.n);
        xp = 25 + S.hearts * 5;
        state.units[unit.n] = { passed: true, best: Math.max(acc, (state.units[unit.n] && state.units[unit.n].best) || 0) };
        if (firstPass) unlockedNext = getUnit(unit.n + 1);
      }
      addXP(xp);
      confetti();
    }
    var footer = $("#footer"); footer.className = "footer-bar";
    $("#feedback").innerHTML = "";
    var body = $("#body");
    $(".progress-fill").style.width = ok ? "100%" : $(".progress-fill").style.width;
    var title, sub;
    if (ok && S.mode === "test") { title = "Unità " + unit.n + " superata!"; sub = unlockedNext ? "Si apre l’Unità " + unlockedNext.n + ": «" + unlockedNext.title + "»." : (getUnit(unit.n + 1) ? "Hai già completato questa unità: ottimo ripasso!" : "Hai completato tutto il corso B1. Complimenti!"); }
    else if (ok) { title = "Lezione completata!"; sub = S.title; }
    else { title = "Peccato…"; sub = S.mode === "test" ? "Hai esaurito i cuori. Ripassa le lezioni e riprova la prova finale." : "Hai esaurito i cuori. Riprova: ogni errore insegna qualcosa!"; }
    var rpic = lessonImage(unit, S.idx);
    body.innerHTML = '<div class="result">' +
      (ok ? '<figure class="result-pic"><img src="' + rpic + '" alt=""></figure>' : "") +
      '<div class="medal' + (ok ? "" : " sad") + '">' + (ok ? (S.mode === "test" ? I.crown : I.trophy) : I.sad) + '</div>' +
      '<h1>' + esc(title) + '</h1><div class="muted">' + esc(sub) + '</div>' +
      '<div class="result-stats">' +
      (ok ? '<div class="rstat"><div class="lbl">XP</div><div class="val">' + I.star + '+' + xp + '</div></div>' : "") +
      '<div class="rstat lag"><div class="lbl">Precisione</div><div class="val">' + I.target + acc + '%</div></div>' +
      '<div class="rstat ros"><div class="lbl">Tempo</div><div class="val">' + I.clock + time + '</div></div>' +
      '</div>' +
      (ok && unit.frase ? '<div class="card frase-cuore"><h3>Frase del cuore</h3><blockquote>«' + esc(unit.frase.t) + '»</blockquote><cite>— ' + esc(unit.frase.c) + '</cite></div>' : "") +
      '</div>';
    var btn = $("#main-btn");
    btn.disabled = false;
    if (ok) {
      btn.className = "btn gold"; btn.textContent = "Continua";
      btn.onclick = function () {
        if (unlockedNext) pendingUnlock = { done: unit, next: unlockedNext };
        location.hash = "#/";
      };
    } else {
      btn.className = "btn"; btn.textContent = "Riprova";
      btn.onclick = function () { S.mode === "test" ? startTest(unit) : startLesson(unit, S.idx); };
      var back = document.createElement("button");
      back.className = "btn ghost"; back.textContent = "Mappa";
      back.onclick = function () { location.hash = "#/"; };
      $("#feedback").appendChild(back);
    }
    btn.removeEventListener("click", onMain);
  }

  function celebrateUnlock(done, nextU) {
    var el = document.createElement("div");
    el.className = "celebrate";
    el.innerHTML = '<div class="card"><div class="ornament">' + ORNAMENT + '</div><h2>Complimenti!</h2>' +
      '<p>Hai completato l’<b>Unità ' + done.n + '</b>.<br>Adesso si apre l’<b>Unità ' + nextU.n + '</b>:</p>' +
      '<p style="font-family:var(--serif);font-size:1.6rem;font-weight:700;color:var(--rosso);margin:4px 0 14px">«' + esc(nextU.title) + '»</p>' +
      '<button class="btn gold">Andiamo!</button></div>';
    document.body.appendChild(el);
    confetti();
    $("button", el).addEventListener("click", function () { el.remove(); scrollToCurrent(); });
  }

  /* =========================================================
     TIPI DI ESERCIZIO
     ========================================================= */
  function kicker(ex, def) {
    return '<div class="ex-kicker">' + (S.mode === "test" ? '<span class="badge">Prova</span>' : "") + esc(ex.k || def) + '</div>';
  }
  function title(text) { return '<h2 class="ex-title">' + esc(text) + '</h2>'; }
  function sentenceHTML(s, blankFn) {
    // separa l'eventuale suggerimento finale tra parentesi
    var hint = "", m = s.match(/\s*(\([^()]*\))\s*$/);
    if (m && blankFn) { hint = m[1]; s = s.slice(0, m.index); }
    var parts = s.split("___"), out = "";
    parts.forEach(function (p, i) {
      out += esc(p);
      if (i < parts.length - 1) out += blankFn ? blankFn(i) : '<span class="blank">&nbsp;</span>';
    });
    if (hint) out += ' <span class="hint">' + esc(hint) + '</span>';
    return out;
  }
  function speakBtn(text, label, dialog) {
    if (!canSpeak()) return "";
    return '<button class="speak-btn" data-say="' + esc(text) + '"' + (dialog ? ' data-dialog="1"' : "") + '>' + I.speaker + '<span class="lbl-play">' + (label || "Ascolta") + '</span><span class="lbl-stop">Ferma</span><span class="eq"><i></i><i></i><i></i></span></button>';
  }
  function bindSpeak(root) {
    $all("[data-say]", root).forEach(function (b) {
      var slow = false;
      b.addEventListener("click", function () {
        if (b.classList.contains("is-playing")) { stopSpeech(); return; }
        var dlg = b.getAttribute("data-dialog") && $all("[data-line]", root);
        var items;
        if (dlg && dlg.length) {
          if (!voices.realMale && !window.__maleWarned && dlg.some(function (el) { return el.getAttribute("data-male") === "1"; })) {
            window.__maleWarned = true; toast("Manca una voce maschile italiana: vedi ⚙️ Impostazioni");
          }
          items = dlg.map(function (el) {
            return chunks(el.getAttribute("data-line")).map(function (c) {
              return { text: c, el: el, male: el.getAttribute("data-male") === "1", pause: 320 };
            });
          }).reduce(function (a, x) { return a.concat(x); }, []);
        } else {
          // al secondo ascolto la frase va più lenta, come su Duolingo
          var rate = b.classList.contains("speak-big") && slow ? 0.72 : 0.94;
          slow = !slow;
          items = chunks(b.getAttribute("data-say")).map(function (c) { return { text: c, rate: rate }; });
        }
        stopSpeech();
        b.classList.add("is-playing");
        speakItems(items, function () { b.classList.remove("is-playing"); });
      });
    });
  }
  function optionKeys(root, handler) {
    keyHandler = function (e) {
      if (phase !== "answer") return;
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      var n = parseInt(e.key, 10);
      if (n >= 1) handler(n - 1);
    };
  }
  var keyHandler = null;

  var CHAR_COLORS = {
    "Roberto": "#7d1f2c", "Natalia": "#1f6b6f", "Luis": "#8f6d24", "Natascia": "#5b6f2e", "Carlotta": "#9b3f6b",
    "Lorenzo": "#2d4f8a", "Alessio": "#a2471f", "Laura": "#6a3d8f", "Maria": "#b0465c", "Franco": "#3c5a6e",
    "Chiara": "#c46a1a", "Alice": "#2e7d5b", "Marco": "#4b4b6e", "Cameriere": "#6b5a4a", "Intervistatore": "#555",
    "Robert": "#7d1f2c", "McGregor": "#3b4a3b", "La donna in rosa": "#c2557a", "Impiegato": "#6b5a4a"
  };
  function charColor(name) {
    if (CHAR_COLORS[name]) return CHAR_COLORS[name];
    var h = 0; for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
    return "hsl(" + h + ",45%,38%)";
  }

  var RENDER = {
    /* --- Lettura / dialogo --- */
    read: function (ex, body) {
      var lines = ex.text.split("\n"), html = "", speakers = [];
      lines.forEach(function (line) {
        line = line.trim(); if (!line) return;
        var m = speakerLine(line);
        if (m) {
          var who = m[1];
          if (speakers.indexOf(who) < 0) speakers.push(who);
          var right = speakers.indexOf(who) % 2 === 1;
          html += '<div class="bubble' + (right ? " right" : "") + '" data-line="' + esc(m[2]) + '" data-male="' + (MALE_CHARS.test(who) ? 1 : 0) + '"><div class="who" style="background:' + charColor(who) + '">' + esc(who.charAt(0)) + '</div>' +
            '<div class="say"><b style="color:' + charColor(who) + '">' + esc(who) + '</b>' + esc(m[2]) + '</div></div>';
        } else {
          html += '<p data-line="' + esc(line) + '" data-male="0">' + esc(line) + '</p>';
        }
      });
      var pic = lessonImage(S.unit, S.idx);
      body.innerHTML = kicker(ex, "Leggi") +
        '<article class="reading">' +
        (pic && !S.picShown ? '<figure class="reading-pic"><img src="' + pic + '" alt="" decoding="async"></figure>' : "") +
        '<h2>' + esc(ex.title) + '</h2>' +
        (ex.sub ? '<div class="reading-sub">' + esc(ex.sub) + '</div>' : "") +
        speakBtn(stripSpeakers(ex.text), "Ascolta il testo", true) + html + '</article>';
      S.picShown = true;
      bindSpeak(body);
      return { ready: function () { return true; }, check: function () { return { ok: true }; } };
    },

    /* --- Scelta multipla --- */
    mc: function (ex, body) {
      var opts = ex.fixed ? ex.o.slice() : shuffle(ex.o);
      var correct = ex.o[ex.a];
      var sel = -1;
      body.innerHTML = kicker(ex, "Scegli la risposta corretta") + title(ex.q || "Scegli la forma corretta.") +
        (ex.s ? '<div class="ex-sentence">' + sentenceHTML(ex.s) + '</div>' : "") +
        '<div class="options' + (opts.length === 2 || (opts.length === 4 && opts.every(function (o) { return o.length < 18; })) ? " two" : "") + '">' +
        opts.map(function (o, i) { return '<button class="opt" data-i="' + i + '"><span class="key">' + (i + 1) + '</span><span>' + esc(o) + '</span></button>'; }).join("") +
        '</div>';
      var btns = $all(".opt", body);
      function pick(i) {
        if (phase !== "answer" || i >= btns.length) return;
        sel = i; btns.forEach(function (b, j) { b.classList.toggle("selected", j === i); });
        if (ex.s && canSpeak() && opts[i].length < 40) { /* nessuna lettura automatica */ }
        refreshReady();
      }
      btns.forEach(function (b, i) { b.addEventListener("click", function () { pick(i); }); });
      optionKeys(body, pick);
      return {
        ready: function () { return sel >= 0; },
        check: function () {
          var ok = opts[sel] === correct;
          btns.forEach(function (b, j) {
            b.disabled = true;
            if (opts[j] === correct) b.classList.add("ok");
            else if (j === sel) b.classList.add("ko");
          });
          return { ok: ok, solution: ex.s ? ex.s.replace("___", correct) : correct };
        }
      };
    },

    /* --- Vero o falso --- */
    tf: function (ex, body) {
      var sel = null;
      body.innerHTML = kicker(ex, "Vero o falso?") + title(ex.q || "Vero o falso?") +
        '<div class="ex-sentence">' + esc(ex.s) + '</div>' +
        '<div class="options two">' +
        '<button class="opt tf" data-v="1"><span class="key">1</span>Vero</button>' +
        '<button class="opt tf" data-v="0"><span class="key">2</span>Falso</button></div>';
      var btns = $all(".opt", body);
      function pick(i) {
        if (phase !== "answer" || i > 1) return;
        sel = i === 0; btns.forEach(function (b, j) { b.classList.toggle("selected", j === i); });
        refreshReady();
      }
      btns.forEach(function (b, i) { b.addEventListener("click", function () { pick(i); }); });
      optionKeys(body, pick);
      return {
        ready: function () { return sel !== null; },
        check: function () {
          var ok = sel === ex.a;
          btns.forEach(function (b, j) {
            b.disabled = true;
            var v = j === 0;
            if (v === ex.a) b.classList.add("ok"); else if (v === sel) b.classList.add("ko");
          });
          return { ok: ok, solution: ex.a ? "Vero" : "Falso" };
        }
      };
    },

    /* --- Completa (con banca di parole o scrivendo) --- */
    fill: function (ex, body) {
      var answers = ex.a.map(alts);
      var n = answers.length;
      if (ex.bank) {
        var filled = new Array(n).fill(null);
        var bank = shuffle(ex.bank.map(function (w, i) { return { w: w, id: i }; }));
        body.innerHTML = kicker(ex, "Completa") + title(ex.q || "Completa la frase.") +
          '<div class="ex-sentence">' + sentenceHTML(ex.s, function (i) { return '<span class="blank" data-b="' + i + '">&nbsp;</span>'; }) + '</div>' +
          '<div class="bank">' + bank.map(function (t) { return '<button class="tile" data-t="' + t.id + '">' + esc(t.w) + '</button>'; }).join("") + '</div>';
        var blanks = $all(".blank", body), tiles = $all(".tile", body);
        function paint() {
          blanks.forEach(function (b, i) {
            b.innerHTML = filled[i] ? esc(filled[i].w) : "&nbsp;";
            b.classList.toggle("filled", !!filled[i]);
          });
          tiles.forEach(function (t) {
            var id = +t.getAttribute("data-t");
            t.classList.toggle("used", filled.some(function (f) { return f && f.id === id; }));
          });
          refreshReady();
        }
        tiles.forEach(function (t) {
          t.addEventListener("click", function () {
            if (phase !== "answer") return;
            var id = +t.getAttribute("data-t"), slot = filled.indexOf(null);
            if (slot < 0) return;
            filled[slot] = { w: ex.bank[id], id: id }; paint();
          });
        });
        blanks.forEach(function (b, i) {
          b.addEventListener("click", function () { if (phase === "answer") { filled[i] = null; paint(); } });
        });
        return {
          ready: function () { return filled.every(Boolean); },
          check: function () {
            var all = true;
            blanks.forEach(function (b, i) {
              var ok = compare(filled[i].w, answers[i]) > 0;
              b.classList.add(ok ? "ok" : "ko"); all = all && ok;
            });
            tiles.forEach(function (t) { t.disabled = true; });
            return { ok: all, solution: fillSolution(ex.s, answers) };
          }
        };
      }
      body.innerHTML = kicker(ex, "Scrivi") + title(ex.q || "Completa la frase.") +
        '<div class="ex-sentence">' + sentenceHTML(ex.s, function (i) {
          var w = Math.max(5, answers[i][0].length + 2);
          return '<input class="inline-input" data-b="' + i + '" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:' + w + 'ch" aria-label="Spazio ' + (i + 1) + '">';
        }) + '</div>' + accentBar();
      var inputs = $all(".inline-input", body);
      inputs.forEach(function (inp, i) {
        inp.addEventListener("input", refreshReady);
        inp.addEventListener("focus", function () { lastInput = inp; });
        inp.addEventListener("keydown", function (e) {
          if (e.key === "Enter") { e.preventDefault(); if (i < inputs.length - 1 && !inputs[i + 1].value) inputs[i + 1].focus(); else onMain(); }
        });
      });
      lastInput = inputs[0];
      bindAccents(body);
      return {
        ready: function () { return inputs.every(function (x) { return x.value.trim(); }); },
        check: function () {
          var all = true, accent = false;
          inputs.forEach(function (inp, i) {
            var c = compare(inp.value, answers[i]);
            inp.classList.add(c ? "ok" : "ko"); inp.disabled = true;
            if (c === 1) accent = true;
            all = all && c > 0;
          });
          var sol = fillSolution(ex.s, answers);
          return { ok: all, solution: sol, note: accent ? "Attenzione agli accenti: " + sol : "" };
        }
      };
    },

    /* --- Scrivi la frase --- */
    type: function (ex, body) {
      body.innerHTML = kicker(ex, "Scrivi") + title(ex.q || "Scrivi la frase.") +
        (ex.s ? '<div class="ex-sentence">' + esc(ex.s) + '</div>' : "") +
        '<textarea class="textarea" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Scrivi in italiano…" aria-label="La tua risposta"></textarea>' + accentBar();
      var ta = $("textarea", body);
      ta.addEventListener("input", refreshReady);
      ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onMain(); } });
      lastInput = ta;
      bindAccents(body);
      return {
        ready: function () { return ta.value.trim().length > 0; },
        check: function () {
          var c = compare(ta.value, ex.a);
          ta.classList.add(c ? "ok" : "ko"); ta.disabled = true;
          var first = alts(ex.a)[0];
          return { ok: c > 0, solution: first, note: c === 1 ? "Attenzione agli accenti: " + first : (c === 2 && alts(ex.a).length > 1 ? "" : "") };
        }
      };
    },

    /* --- Riordina le parole --- */
    order: function (ex, body, item, listen) {
      var target = ex.a.replace(/\s*[.!?]+$/, "");
      var words = target.split(/\s+/);
      var pool = shuffle(words.concat(ex.d || []).map(function (w, i) { return { w: w, id: i }; }));
      var chosen = [];
      var head = listen
        ? kicker(ex, "Ascolta") + title(ex.q || "Ascolta e ricomponi la frase.") +
          (canSpeak() ? '<button class="speak-big" data-say="' + esc(ex.a) + '" aria-label="Ascolta la frase">' + I.speaker + '</button>' : '<div class="ex-sentence">' + esc(ex.a) + '</div>')
        : kicker(ex, "Riordina") + title(ex.q || "Metti le parole nell’ordine corretto.") + (ex.s ? '<div class="ex-sentence">' + esc(ex.s) + '</div>' : "");
      body.innerHTML = head + '<div class="answer-line" aria-label="La tua frase"></div><div class="bank"></div>';
      var line = $(".answer-line", body), bank = $(".bank", body);
      function paint() {
        line.innerHTML = chosen.map(function (t, i) { return '<button class="tile" data-c="' + i + '">' + esc(t.w) + '</button>'; }).join("");
        bank.innerHTML = pool.map(function (t) {
          var used = chosen.indexOf(t) >= 0;
          return '<button class="tile' + (used ? " used" : "") + '" data-p="' + t.id + '"' + (used ? ' tabindex="-1"' : "") + '>' + esc(t.w) + '</button>';
        }).join("");
        $all("[data-c]", line).forEach(function (b) {
          b.addEventListener("click", function () { if (phase === "answer") { chosen.splice(+b.getAttribute("data-c"), 1); paint(); } });
        });
        $all("[data-p]", bank).forEach(function (b) {
          b.addEventListener("click", function () {
            if (phase !== "answer") return;
            var t = pool.filter(function (x) { return x.id === +b.getAttribute("data-p"); })[0];
            if (chosen.indexOf(t) < 0) { chosen.push(t); paint(); }
          });
        });
        refreshReady();
      }
      paint();
      bindSpeak(body);
      if (listen && canSpeak()) setTimeout(function () { var bb = $(".speak-big", body); if (bb && document.body.contains(bb)) bb.click(); }, 350);
      return {
        ready: function () { return chosen.length > 0; },
        check: function () {
          var attempt = chosen.map(function (t) { return t.w; }).join(" ");
          var accepted = [ex.a].concat(ex.alt || []);
          var ok = compare(attempt, accepted) === 2;
          $all(".tile", body).forEach(function (t) { t.disabled = true; });
          line.style.borderColor = ok ? "var(--verde)" : "var(--errore)";
          return { ok: ok, solution: ex.a };
        }
      };
    },

    listen: function (ex, body, item) { return RENDER.order(ex, body, item, true); },

    /* --- Abbinamenti --- */
    match: function (ex, body) {
      var left = shuffle(ex.pairs.map(function (p, i) { return { t: p[0], id: i }; }));
      var right = shuffle(ex.pairs.map(function (p, i) { return { t: p[1], id: i }; }));
      var selL = null, selR = null, matched = 0, errors = 0;
      body.innerHTML = kicker(ex, "Abbina") + title(ex.q || "Abbina le coppie.") +
        '<div class="match"><div class="match-col">' +
        left.map(function (x) { return '<button class="opt" data-l="' + x.id + '">' + esc(x.t) + '</button>'; }).join("") +
        '</div><div class="match-col">' +
        right.map(function (x) { return '<button class="opt" data-r="' + x.id + '">' + esc(x.t) + '</button>'; }).join("") +
        '</div></div>';
      var done = false;
      function tryPair() {
        if (selL === null || selR === null) return;
        var bl = $('[data-l="' + selL + '"]', body), br = $('[data-r="' + selR + '"]', body);
        if (selL === selR) {
          bl.classList.remove("selected"); br.classList.remove("selected");
          bl.classList.add("ok"); br.classList.add("ok");
          sndOk();
          setTimeout(function () { bl.classList.add("gone"); br.classList.add("gone"); }, 250);
          matched++;
          if (matched === ex.pairs.length) { done = true; setTimeout(function () { onMain(); }, 350); }
        } else {
          errors++;
          bl.classList.add("ko"); br.classList.add("ko");
          sndKo();
          setTimeout(function () { bl.classList.remove("ko", "selected"); br.classList.remove("ko", "selected"); }, 450);
        }
        selL = selR = null;
      }
      $all("[data-l]", body).forEach(function (b) {
        b.addEventListener("click", function () {
          if (phase !== "answer") return;
          $all("[data-l]", body).forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected"); selL = +b.getAttribute("data-l"); tryPair();
        });
      });
      $all("[data-r]", body).forEach(function (b) {
        b.addEventListener("click", function () {
          if (phase !== "answer") return;
          $all("[data-r]", body).forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected"); selR = +b.getAttribute("data-r"); tryPair();
        });
      });
      return {
        ready: function () { return done; },
        check: function () {
          // gli abbinamenti si correggono man mano: è giusto se gli errori sono pochi
          var ok = errors <= Math.max(1, Math.floor(ex.pairs.length / 3));
          return { ok: ok, solution: ex.pairs.map(function (p) { return p[0] + " → " + p[1]; }).join(" · "), note: errors ? "Errori: " + errors : "" };
        }
      };
    }
  };

  function fillSolution(s, answers) {
    var out = s.replace(/\s*\([^()]*\)\s*$/, "");
    answers.forEach(function (a) { out = out.replace("___", a[0]); });
    return out;
  }

  var lastInput = null;
  function accentBar() {
    return '<div class="accent-bar" aria-label="Lettere accentate">' + ["à", "è", "é", "ì", "ò", "ù", "’"].map(function (c) { return '<button type="button" data-acc="' + c + '">' + c + '</button>'; }).join("") + '</div>';
  }
  function bindAccents(root) {
    $all("[data-acc]", root).forEach(function (b) {
      b.addEventListener("mousedown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () {
        var el = lastInput; if (!el || el.disabled) return;
        var c = b.getAttribute("data-acc") === "’" ? "'" : b.getAttribute("data-acc");
        var s = el.selectionStart, e = el.selectionEnd;
        el.value = el.value.slice(0, s) + c + el.value.slice(e);
        el.focus(); el.selectionStart = el.selectionEnd = s + 1;
        refreshReady();
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!S || S.finished || !$("#main-btn")) return;
    if ($(".modal-back")) return;
    if (e.key === "Enter" && !(e.target && e.target.tagName === "TEXTAREA") && !(e.target && e.target.tagName === "INPUT")) {
      if (e.target && e.target.tagName === "BUTTON" && e.target.id !== "main-btn") return;
      e.preventDefault();
      if (!$("#main-btn").disabled) onMain();
      return;
    }
    if (keyHandler) keyHandler(e);
  });

  /* =========================================================
     ROUTER
     ========================================================= */
  function route() {
    keyHandler = null;
    $all(".toast, .modal-back, .celebrate").forEach(function (el) { el.remove(); });
    var h = location.hash || "#/";
    var m;
    if ((m = h.match(/^#\/u\/(\d+)\/l\/(\d+)$/))) {
      var unit = getUnit(+m[1]), i = +m[2];
      if (unit && unit.lessons[i] && lessonUnlocked(unit, i)) { startLesson(unit, i); return; }
    } else if ((m = h.match(/^#\/u\/(\d+)\/test$/))) {
      var u2 = getUnit(+m[1]);
      if (u2 && testUnlocked(u2)) { startTest(u2); return; }
    }
    S = null;
    if (h !== "#/" && h !== "") { history.replaceState(null, "", "#/"); }
    renderMap();
    window.scrollTo(0, 0);
    var pu = pendingUnlock; pendingUnlock = null;
    setTimeout(function () {
      if (pu) { scrollToCurrent(pu.next.n); celebrateUnlock(pu.done, pu.next); }
      else scrollToCurrent(null, true);
    }, 80);
  }
  window.addEventListener("hashchange", route);

  if (!UNITS.length) {
    app.innerHTML = '<p style="padding:2rem">Nessuna unità trovata.</p>';
  } else {
    route();
  }

  // Esposto per i test automatici
  window.__ciao = { compare: compare, norm: norm, state: function () { return state; }, current: function () { return S && S.queue[0] ? S.queue[0].ex : null; } };
})();
