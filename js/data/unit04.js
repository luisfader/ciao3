/* Unità 4 — In giro per il mondo · Pronomi e periodo ipotetico */
(window.CIAO_UNITS = window.CIAO_UNITS || []).push({
  n: 4,
  title: "In giro per il mondo",
  topics: "Preparare un viaggio · Pronomi diretti, indiretti e combinati · Il periodo ipotetico",
  color: "#2d4f8a", color2: "#3f6db3", shadow: "#1d3460",
  frase: { t: "Se potessi partire domani, dove andresti?", c: "Natalia, Unità 4" },
  notes: `
<h3>1. Pronomi diretti, indiretti e combinati</h3>
<div class="tbl-wrap"><table>
<tr><th></th><th>diretti</th><th>indiretti</th><th>combinati (+ lo / la / li / le / ne)</th></tr>
<tr><td>io</td><td>mi</td><td>mi</td><td>me lo, me la, me li, me le, me ne</td></tr>
<tr><td>tu</td><td>ti</td><td>ti</td><td>te lo, te la, te li, te le, te ne</td></tr>
<tr><td>lui / lei</td><td>lo / la</td><td>gli / le</td><td>glielo, gliela, glieli, gliele, gliene</td></tr>
<tr><td>noi</td><td>ci</td><td>ci</td><td>ce lo, ce la, ce li, ce le, ce ne</td></tr>
<tr><td>voi</td><td>vi</td><td>vi</td><td>ve lo, ve la, ve li, ve le, ve ne</td></tr>
<tr><td>loro</td><td>li / le</td><td>gli</td><td>glielo, gliela, glieli, gliele, gliene</td></tr>
</table></div>
<div class="ex">Hai comprato i biglietti? Sì, <b>li</b> ho comprati. · Hai scritto a Natalia? Sì, <b>le</b> ho mandato un messaggio. · Dai la mappa a Roberto? Sì, <b>gliela</b> do.</div>
<div class="warn">Con il passato prossimo il participio <b>concorda</b> con lo, la, li, le: <i>la guida → l’ho presa; le valigie → le ho preparate; i biglietti → glieli ho dati</i>.</div>
<p>Con l’imperativo (tu) e l’infinito i pronomi si attaccano al verbo: <i>Prestamela! · Mandaglielo! · Puoi prestarmela?</i></p>
<h3>2. Le frasi condizionali (periodo ipotetico)</h3>
<h4>Realtà (condizione possibile)</h4>
<p><b>Se + presente → presente / futuro / imperativo</b></p>
<div class="ex">Se fa freddo, mi copro. · Se domani piove, resteremo a casa. · Se mi ami, dillo!</div>
<h4>Possibilità (ipotesi)</h4>
<p><b>Se + congiuntivo imperfetto → condizionale presente</b></p>
<div class="ex">Se avessi più tempo, viaggerei di più. · Se fossi ricco, comprerei una casa a Venezia.</div>
<p>Forme utili: essere → fossi, fossi, fosse, fossimo, foste, fossero · avere → avessi, avessi, avesse, avessimo, aveste, avessero · potere → potessi…</p>
<h4>Irrealtà nel passato</h4>
<p><b>Se + congiuntivo trapassato → condizionale passato</b></p>
<div class="ex">Se avessi studiato, avrei superato l’esame.</div>
<div class="warn">Dopo <b>se</b> non si usa il condizionale! ✓ Se avessi soldi, viaggerei. ✗ Se avrei soldi…</div>
<h3>3. Vocabolario importante</h3>
<div class="vocab">
<div><b>il biglietto</b></div><div><b>lo zaino</b></div><div><b>la guida turistica</b></div><div><b>prenotare</b></div>
<div><b>la conferma</b></div><div><b>la valigia</b></div><div><b>il binario</b></div><div><b>la coincidenza</b></div>
<div><b>il ritardo</b></div><div><b>il tabellone</b></div><div><b>l’impiegato</b></div><div><b>il Frecciarossa</b></div>
</div>`,
  lessons: [
    {
      title: "A. In giro per il mondo", icon: "chat",
      ex: [
        { t: "read", title: "Roberto e Luis preparano il viaggio", text:
`Roberto: Luis, hai già preparato tutto per il viaggio?
Luis: Quasi. Ho comprato i biglietti stamattina.
Roberto: Dove li hai messi?
Luis: Li ho messi nello zaino, insieme ai documenti.
Roberto: E la macchina fotografica? La porti tu?
Luis: Sì, la porto io. Voglio fare molte foto durante il viaggio.
Roberto: Perfetto. Mi passi quella mappa?
Luis: Certo, te la do subito. Vuoi anche la guida turistica?
Roberto: Sì, grazie. Me la puoi prestare per un momento?
Luis: Certo. Poi però me la restituisci, perché voglio controllare gli orari dei musei.
Roberto: Hai detto a Natalia a che ora partiamo?
Luis: Sì, le ho mandato un messaggio questa mattina.
Roberto: E Carlotta? Le hai scritto?
Luis: Non ancora. Puoi scriverle tu?
Roberto: Certo, le scrivo subito. Le mando anche l’indirizzo dell’albergo?
Luis: Sì, mandaglielo. Così sa dove trovarci.
Roberto: Hai prenotato le camere?
Luis: Sì, le ho prenotate ieri. Ho ricevuto anche la conferma.
Roberto: Me la fai vedere?
Luis: Certo, te la mostro sul telefono.
Roberto: Bene. Allora abbiamo quasi tutto.
Luis: Quasi? Che cosa manca?
Roberto: Le valigie.
Luis: Ah... quelle non le ho ancora preparate!
Roberto: Lo sapevo. Dai, le prepariamo adesso!` },
        { t: "tf", s: "Luis ha già comprato i biglietti per il viaggio.", a: true },
        { t: "tf", s: "Roberto porterà la macchina fotografica.", a: false, why: "«La porto io», dice Luis." },
        { t: "tf", s: "Luis ha prenotato le camere il giorno stesso.", a: false, why: "Le ha prenotate ieri." },
        { t: "tf", s: "Alla fine scoprono che le valigie non sono ancora pronte.", a: true },
        { t: "mc", q: "Pronome diretto", s: "Hai comprato i biglietti? Sì, ___ ho comprati ieri.", o: ["li", "le", "gli", "lo"], a: 0 },
        { t: "mc", q: "Pronome diretto", s: "Dove hai messo la macchina fotografica? ___ ho messa nello zaino.", o: ["L’", "Le", "Gli", "Lo"], a: 0 },
        { t: "mc", q: "Pronome diretto", s: "Hai preparato le valigie? No, non ___ ho ancora preparate.", o: ["le", "li", "la", "gli"], a: 0 },
        { t: "mc", q: "Pronome indiretto", s: "Hai scritto a Natalia? Sì, ___ ho mandato un messaggio.", o: ["le", "la", "gli", "lo"], a: 0 },
        { t: "mc", q: "Pronome indiretto", s: "Telefoni a Roberto? Sì, ___ telefono questa sera.", o: ["gli", "lo", "le", "la"], a: 0 },
        { t: "mc", q: "Pronome indiretto", s: "Puoi spiegare il programma a Luis? Certo, ___ spiego tutto.", o: ["gli", "lo", "le", "li"], a: 0 },
        { t: "mc", q: "Scegli la forma corretta.", s: "La guida a Roberto? ___ presto io.", o: ["Gliela", "Glielo", "Glieli"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "I biglietti a Luis? ___ do subito.", o: ["Glieli", "Gliela", "Te li"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "La conferma dell’albergo? ___ mostro sul telefono.", o: ["Te la", "Ti la", "Te lo"], a: 0, fixed: true },
        { t: "type", q: "Rispondi con un pronome combinato.", s: "Mostri le fotografie a Natalia? Sì, …", a: ["Sì, gliele mostro.", "Gliele mostro."] },
        { t: "type", q: "Rispondi con un pronome combinato.", s: "Mandate l’indirizzo a Carlotta? Sì, …", a: ["Sì, glielo mandiamo.", "Glielo mandiamo."] },
        { t: "listen", a: "Te la mostro sul telefono." }
      ]
    },
    {
      title: "B. Me lo dai?", icon: "chat",
      ex: [
        { t: "read", title: "Roberto ha dimenticato tutto", text:
`Luis: Roberto, hai preso la guida di Firenze?
Roberto: No, credo di averla lasciata sul tavolo. Me la puoi prendere?
Luis: Va bene. E i biglietti del museo?
Roberto: Li ha Natalia. Glieli ho dati ieri.
Luis: Perfetto. Hai anche la prenotazione dell’albergo?
Roberto: Sì, ce l’ho sul telefono. Se vuoi, te la mostro.
Luis: No, non serve. Ma dammi l’indirizzo dell’albergo.
Roberto: Certo, te lo mando subito.
Luis: Carlotta ci ha chiesto il programma del viaggio.
Roberto: Ah, è vero! Glielo possiamo mandare adesso.
Luis: E queste fotografie? Sono per Natalia?
Roberto: Sì. Le ho stampate ieri. Gliele voglio regalare quando arriviamo.
Luis: Bella idea. E la mappa?
Roberto: È nello zaino. Me la passi?
Luis: Eccola. Ma dimmi una cosa: hai preparato almeno la valigia?
Roberto: Certo! Però... non ricordo dove ho messo le chiavi.
Luis: Roberto...` },
        { t: "mc", q: "A chi ha dato Roberto i biglietti del museo?", o: ["A Natalia", "A Luis", "A Carlotta", "All’impiegato"], a: 0 },
        { t: "mc", q: "Che cosa non riesce a trovare Roberto?", o: ["Le chiavi", "La valigia", "I biglietti", "Il telefono"], a: 0 },
        { t: "fill", q: "Completa con il pronome combinato.", s: "La guida per me? ___ puoi prendere tu?", a: [["Me la"]], bank: ["Me la", "Me lo", "Te la", "Gliela"] },
        { t: "fill", q: "Completa con il pronome combinato.", s: "I biglietti a Natalia? ___ ho dati ieri.", a: ["Glieli"], bank: ["Glieli", "Gliele", "Glielo", "Te li"] },
        { t: "fill", q: "Completa con il pronome combinato.", s: "L’indirizzo a Luis? ___ mando subito.", a: ["Glielo"], bank: ["Glielo", "Gliela", "Me lo", "Glieli"] },
        { t: "fill", q: "Completa con il pronome combinato.", s: "Le fotografie a Natalia? ___ regalo quando arriviamo.", a: ["Gliele"], bank: ["Gliele", "Glieli", "Gliela", "Te le"] },
        { t: "type", q: "Trasforma con un pronome combinato.", s: "Mostro la prenotazione a Luis.", a: ["Gliela mostro."] },
        { t: "type", q: "Trasforma con un pronome combinato.", s: "Mandiamo le fotografie a Carlotta.", a: ["Gliele mandiamo."] },
        { t: "type", q: "Trasforma con un pronome combinato.", s: "Prestami la mappa.", a: ["Prestamela.", "Prestamela!"] },
        { t: "read", title: "Dov’è la valigia?", text:
`Quando il treno arrivò a Firenze, Natalia, Luis e Roberto scesero rapidamente. Alla stazione c’era molta gente e tutti avevano fretta. Dopo alcuni minuti Natalia guardò Roberto.
Natalia: Roberto, dov’è la tua valigia?
Roberto: La mia valigia? Pensavo che me l’avessi portata tu!
Natalia: Io? No! Te l’ho lasciata vicino al tuo posto.
Luis: Aspettate. Forse è ancora sul treno.
Roberto: Dentro ci sono tutti i miei vestiti!
Natalia: E i documenti?
Roberto: Quelli no. Me li sono messi nello zaino.
Luis andò subito a parlare con un impiegato della stazione.
Luis: Gli ho spiegato il problema e gli ho dato il numero del treno. Se trovano la valigia, ce la portano qui.
Dopo circa venti minuti arrivò un impiegato con una valigia nera.
Impiegato: È questa?
Roberto: Sì! È la mia!
Luis: Roberto, la prossima volta legala al polso.
Roberto: Molto divertente...` },
        { t: "tf", s: "Natalia ha preso la valigia di Roberto.", a: false },
        { t: "tf", s: "Roberto ha i documenti nello zaino.", a: true },
        { t: "tf", s: "La valigia non viene ritrovata.", a: false },
        { t: "mc", s: "Il problema all’impiegato? Luis ___ ha spiegato.", o: ["gliel’", "l’", "gli", "ce l’"], a: 0 },
        { t: "mc", s: "La valigia a noi? L’impiegato ___ porta.", o: ["ce la", "ce lo", "ci la", "gliela"], a: 0 },
        { t: "order", a: "Se trovano la valigia ce la portano qui." }
      ]
    },
    {
      title: "C. Se avesse molti soldi…", icon: "book",
      ex: [
        { t: "read", title: "Una lettera a Natascia", text:
`Cara Natascia,
come stai? È da tanto tempo che voglio scriverti. Qui a Venezia va tutto bene, anche se in questi giorni ho avuto moltissime cose da fare.
Sai, penso spesso al nostro prossimo incontro. Se vieni a Venezia questa estate, ti porto a vedere i miei posti preferiti. Possiamo passeggiare vicino al Canal Grande e, se abbiamo tempo, prendiamo anche una gondola.
Mi piacerebbe molto visitare anche la Serbia. Se trovo qualche giorno libero, verrò a Belgrado. E naturalmente, se vengo, devi mostrarmi la città!
A volte immagino una vacanza più lunga. Se avessi più tempo, viaggerei per tutta la Serbia. Vorrei vedere Novi Sad, visitare qualche monastero e conoscere meglio la vostra cultura. Se potessi scegliere, resterei almeno un mese.
Sai che amo viaggiare, ma non sempre è facile organizzarsi. Se fossi più organizzata, preparerei tutto con mesi di anticipo! Invece faccio sempre tutto all’ultimo momento.
E tu? Se potessi partire domani, dove andresti? E se avessi un mese di vacanza, che cosa faresti?
Scrivimi presto. Se mi mandi qualche fotografia di Belgrado, sarò felicissima.
Un abbraccio grande, Natalia` },
        { t: "fill", s: "Se Natascia ___ a Venezia, Natalia la porterà a vedere i suoi posti preferiti. (venire)", a: ["viene"] },
        { t: "fill", s: "Se Natalia ___ qualche giorno libero, andrà a Belgrado. (trovare)", a: ["trova"] },
        { t: "fill", s: "Se Natalia ___ più tempo, viaggerebbe per tutta la Serbia. (avere)", a: ["avesse"] },
        { t: "fill", s: "Se ___ scegliere, resterebbe in Serbia almeno un mese. (potere)", a: ["potesse"] },
        { t: "fill", s: "Se Natalia ___ più organizzata, preparerebbe tutto con mesi di anticipo. (essere)", a: ["fosse"] },
        { t: "fill", s: "Se Natascia ___ alcune fotografie di Belgrado, Natalia sarà felicissima. (mandare)", a: ["manda"] },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se domani ___, resteremo a casa.", o: ["piove", "piovesse"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se avessi più tempo, ___ di più.", o: ["viaggio", "viaggerei"], a: 1, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se mi ami, ___!", o: ["dillo", "lo diresti"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se fossi ricco, ___ una casa a Venezia.", o: ["comprerei", "comprerò"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se vedo Natalia, ___.", o: ["la saluto", "la saluterei"], a: 0, fixed: true },
        { t: "fill", s: "Se Roberto ___ più tempo, viaggerebbe di più. (avere)", a: ["avesse"] },
        { t: "fill", s: "Se ___ bel tempo, andrebbero al mare. (fare)", a: ["facesse"] },
        { t: "fill", s: "Se Roberto ___ di più, parlerebbe meglio l’italiano. (studiare)", a: ["studiasse"] },
        { t: "fill", s: "Se loro ___ un albergo economico, organizzerebbero il viaggio. (trovare)", a: ["trovassero"] },
        { t: "order", a: "Se avessi più tempo viaggerei di più." },
        { t: "order", a: "Se facesse bel tempo andremmo al mare.", d: ["andiamo"] },
        { t: "order", a: "Se studiassi di più parleresti meglio italiano." }
      ]
    },
    {
      title: "D. Grammatica", icon: "pen",
      ex: [
        { t: "read", title: "Le frasi condizionali", text:
`Le frasi condizionali esprimono una condizione e una conseguenza.
1. Condizione reale o possibile: SE + PRESENTE → PRESENTE / FUTURO / IMPERATIVO. Se fa freddo, mi copro. Se domani piove, resteremo a casa. Se hai fame, mangia qualcosa!
2. Condizione ipotetica: SE + CONGIUNTIVO IMPERFETTO → CONDIZIONALE PRESENTE. Se avessi più tempo, viaggerei di più. Se potessimo partire, andremmo in Toscana.
3. Condizione impossibile nel passato: SE + CONGIUNTIVO TRAPASSATO → CONDIZIONALE PASSATO. Se avessi studiato, avrei superato l’esame.
Attenzione: dopo se non si usa il condizionale. Sì: Se avessi soldi, viaggerei. No: Se avrei soldi.` },
        { t: "mc", q: "Che tipo di condizione è?", s: "Se domani piove, resteremo a casa.", o: ["Reale / possibile", "Ipotetica", "Impossibile nel passato"], a: 0, fixed: true },
        { t: "mc", q: "Che tipo di condizione è?", s: "Se fossi ricco, comprerei una casa a Venezia.", o: ["Reale / possibile", "Ipotetica", "Impossibile nel passato"], a: 1, fixed: true },
        { t: "mc", q: "Che tipo di condizione è?", s: "Se avessimo avuto più tempo, saremmo rimasti a Venezia.", o: ["Reale / possibile", "Ipotetica", "Impossibile nel passato"], a: 2, fixed: true },
        { t: "mc", q: "Quale frase è corretta?", o: ["Se avessi soldi, viaggerei per il mondo.", "Se avrei soldi, viaggerei per il mondo.", "Se avrei soldi, viaggiassi per il mondo.", "Se ho soldi, viaggerei per il mondo."], a: 0 },
        { t: "match", q: "Abbina il soggetto al congiuntivo imperfetto di «essere».", pairs: [["io", "fossi"], ["lui / lei", "fosse"], ["noi", "fossimo"], ["voi", "foste"], ["loro", "fossero"]] },
        { t: "match", q: "Completa le frasi.", pairs: [["Se fa freddo,", "mi copro."], ["Se hai fame,", "mangia qualcosa!"], ["Se potessimo partire,", "andremmo in Toscana."], ["Se avessi studiato,", "avrei superato l’esame."]] },
        { t: "fill", s: "Se Luca ___ libero, verrebbe con Roberto. (essere)", a: ["fosse"] },
        { t: "fill", s: "Se Luca si ___ ogni giorno, migliorerebbe presto. (esercitare)", a: ["esercitasse"] },
        { t: "fill", s: "Se ___ insieme, sarebbe perfetto. (noi – partire)", a: ["partissimo"] },
        { t: "listen", a: "Viaggerei per il mondo se avessi più soldi." }
      ]
    },
    {
      title: "E. Viaggiare in treno", icon: "column",
      ex: [
        { t: "read", title: "Viaggiare in treno in Italia", sub: "Cultura italiana", text:
`Viaggiare in treno è uno dei modi più comodi per conoscere l’Italia. La rete ferroviaria collega molte città grandi e piccole e permette di attraversare il paese senza usare la macchina.
Per viaggiare tra le città principali esistono treni ad alta velocità, come il Frecciarossa. Collegano città come Torino, Milano, Bologna, Firenze, Roma e Napoli. Se compri il biglietto con anticipo, puoi spesso trovare prezzi più convenienti.
Per le distanze più brevi si usano soprattutto i treni regionali. Sono molto utili per visitare città vicine o piccoli centri. Se, per esempio, sei a Firenze, puoi raggiungere facilmente altre località della Toscana.
Nelle stazioni italiane bisogna controllare il numero del binario e l’orario di partenza. Se il treno cambia binario, l’informazione appare sui tabelloni della stazione. È importante anche conservare il biglietto durante tutto il viaggio.
Molti turisti scelgono il treno perché le stazioni si trovano spesso vicino al centro delle città. Se arrivi in treno a Venezia, Firenze o Roma, puoi cominciare subito a visitare la città senza cercare un parcheggio.
Naturalmente possono esserci ritardi o cambiamenti. Se perdi una coincidenza, è meglio chiedere informazioni al personale della stazione.` },
        { t: "mc", q: "Come si chiama un famoso treno ad alta velocità?", o: ["Il Frecciarossa", "Il Regionale", "Il Vaporetto", "L’Intercity notte"], a: 0 },
        { t: "mc", q: "Come si possono trovare prezzi più convenienti?", o: ["Comprando il biglietto con anticipo", "Comprandolo sul treno", "Viaggiando la domenica", "Non comprandolo"], a: 0 },
        { t: "tf", s: "Per le distanze brevi si usano soprattutto i treni regionali.", a: true },
        { t: "tf", s: "Se il treno cambia binario, l’informazione appare sui tabelloni.", a: true },
        { t: "tf", s: "Le stazioni italiane si trovano quasi sempre lontano dal centro.", a: false },
        { t: "mc", q: "Che cosa conviene fare se perdi una coincidenza?", o: ["Chiedere informazioni al personale della stazione", "Tornare a casa", "Prendere un aereo", "Aspettare il giorno dopo"], a: 0 },
        { t: "match", q: "Abbina le parole del viaggio.", pairs: [["il binario", "dove arriva e parte il treno"], ["la coincidenza", "il treno successivo da prendere"], ["il ritardo", "quando il treno arriva tardi"], ["il tabellone", "dove si leggono orari e binari"]] },
        { t: "order", a: "Se compri il biglietto con anticipo risparmi." }
      ]
    }
  ]
});
