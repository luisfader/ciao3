/* Unità 9 — Ridere fa bene · Chi, chiunque, quello che · Periodo ipotetico dell'irrealtà · Fare/lasciare + infinito */
(window.CIAO_UNITS = window.CIAO_UNITS || []).push({
  n: 9,
  title: "Ridere fa bene",
  topics: "La risata e lo stand-up · Chi, chiunque, quello che · Se avessi saputo… · Fare e lasciare + infinito",
  color: "#c4581a", color2: "#e07a32", shadow: "#8a3c0f",
  frase: { t: "A volte non possiamo cambiare un problema, ma possiamo cambiare il modo in cui lo affrontiamo.", c: "Carlotta, Unità 9" },
  notes: `
<h3>1. Chi, chiunque, quello che, ciò che</h3>
<ul>
<li><b>CHI</b> = la persona che / le persone che (verbo al singolare): <i>Chi ride spesso si sente meglio.</i></li>
<li><b>CHIUNQUE</b> = qualsiasi persona: <i>Chiunque può commettere un errore. · Chiunque venga sarà il benvenuto.</i></li>
<li><b>QUELLO CHE</b> = la cosa che: <i>Quello che mi piace è il finale. · Non capisco quello che vuoi dire.</i></li>
<li><b>CIÒ CHE</b> = come «quello che», ma più formale: <i>Ciò che mi ha sorpreso è stato il finale.</i></li>
</ul>
<h3>2. Il periodo ipotetico dell’irrealtà nel passato</h3>
<p>Immaginiamo una situazione passata che <b>non</b> è successa e le sue conseguenze.</p>
<p><b>Se + congiuntivo trapassato → condizionale passato</b></p>
<div class="ex">Se avessi saputo che veniva tanta gente, non sarei salito sul palco. (Realtà: non lo sapevo → sono salito.)</div>
<div class="tbl-wrap"><table>
<tr><th>congiuntivo trapassato</th><th>condizionale passato</th></tr>
<tr><td>(se) avessi parlato / visto</td><td>avrei parlato / visto</td></tr>
<tr><td>(se) avessi … / avesse …</td><td>avresti … / avrebbe …</td></tr>
<tr><td>(se) fossi andato/a, fossi venuto/a</td><td>sarei andato/a</td></tr>
<tr><td>(se) avessimo saputo</td><td>saremmo venuti/e</td></tr>
<tr><td>(se) fossimo arrivati/e</td><td>avrebbero capito</td></tr>
</table></div>
<div class="ex">Se non avessi scritto alcune parole, avrei perso il filo. · Se tu non fossi venuta, sarei stato più nervoso.</div>
<h3>3. Fare + infinito / lasciare + infinito</h3>
<p><b>FARE + infinito</b>: qualcuno o qualcosa <b>provoca</b> un’azione o una reazione.</p>
<div class="ex">Quella battuta mi fa ridere. · Il film ci ha fatto piangere. · Franco fa pensare il pubblico.</div>
<p><b>LASCIARE + infinito</b>: <b>permettere</b> a qualcuno di fare qualcosa.</p>
<div class="ex">Franco ha lasciato parlare l’uomo. · Chiara lo lascia parlare.</div>
<p>Con i pronomi: Franco fa ridere Roberto → Franco <b>lo</b> fa ridere. · Quella storia fa riflettere Chiara → <b>la</b> fa riflettere.</p>
<h3>4. Vocabolario importante</h3>
<div class="vocab">
<div><b>la risata</b></div><div><b>ridere</b></div><div><b>la battuta</b> — frase per far ridere</div><div><b>il palco</b></div>
<div><b>il pubblico</b></div><div><b>applaudire</b></div><div><b>perdere il filo</b></div><div><b>pentirsi</b></div>
<div><b>l’umore</b></div><div><b>rilassarsi</b></div><div><b>la tensione</b></div><div><b>lo stand-up</b></div>
</div>`,
  lessons: [
    {
      title: "A. Ridere fa bene", icon: "chat",
      ex: [
        { t: "read", title: "Alice e Carlotta parlano della risata", text:
`Alice: Carlotta, ieri ho letto un articolo molto interessante sulla risata.
Carlotta: Davvero? Di che cosa parlava?
Alice: Parlava di quello che succede quando ridiamo. L’articolo spiegava che ridere può aiutarci a sentirci meglio e a rilassarci.
Carlotta: Sono d’accordo. Chi ride spesso sembra affrontare i problemi con un po’ più di leggerezza.
Alice: Esatto. E diceva anche che chiunque può beneficiare di una bella risata. Non importa l’età o il carattere.
Carlotta: È vero. A volte basta stare con qualcuno che ci fa ridere.
Alice: Quello che mi è piaciuto di più è che l’articolo non presentava la risata come una soluzione a tutti i problemi. Diceva semplicemente che può aiutarci nei momenti difficili.
Carlotta: Mi sembra un’idea molto sensata.
Alice: C’era anche una frase che mi è rimasta in mente: “Chi riesce a ridere anche di se stesso vive con meno tensione”.
Carlotta: Bella frase. Chiunque commette errori, quindi non possiamo prenderci sempre troppo sul serio.
Alice: E ciò che mi ha sorpreso è che anche una conversazione divertente può cambiare l’umore di una persona.
Carlotta: Sì. A volte non possiamo cambiare un problema, ma possiamo cambiare il modo in cui lo affrontiamo.
Carlotta: A proposito di cose che fanno ridere... il romanzo Amore in biblioteca mi fa ridere molto!
Alice: Davvero? Allora devo leggerlo.
Carlotta: Assolutamente. Chi ama le storie romantiche e un po’ assurde si divertirà molto!` },
        { t: "mc", q: "Che cosa spiegava l’articolo?", o: ["Che ridere può aiutarci a sentirci meglio e a rilassarci.", "Che ridere risolve tutti i problemi.", "Che ridere fa male alla salute.", "Che solo i bambini ridono."], a: 0 },
        { t: "mc", q: "Quale romanzo fa ridere Carlotta?", o: ["Amore in biblioteca", "La città triste", "Ladro di cuori", "Maschera di Venezia"], a: 0 },
        { t: "tf", s: "Secondo l’articolo, la risata è la soluzione a tutti i problemi.", a: false },
        { t: "fill", q: "Chi, chiunque, quello che o ciò che?", s: "___ ride spesso affronta la vita con più leggerezza.", a: ["Chi"], bank: ["Chi", "Chiunque", "Quello che", "Ciò che"] },
        { t: "fill", q: "Chi, chiunque, quello che o ciò che?", s: "Non ho capito ___ hai detto.", a: [["quello che", "ciò che"]], bank: ["quello che", "chi", "chiunque"] },
        { t: "fill", q: "Chi, chiunque, quello che o ciò che?", s: "___ può commettere un errore.", a: [["Chiunque"]], bank: ["Chiunque", "Quello che", "Ciò che"] },
        { t: "fill", q: "Chi, chiunque, quello che o ciò che?", s: "___ mi è piaciuto dell’articolo è il suo messaggio positivo.", a: [["Quello che", "Ciò che"]], bank: ["Quello che", "Chi", "Chiunque"] },
        { t: "type", q: "Unisci le due frasi con «chi».", s: "Una persona ama leggere. Questa persona trova sempre tempo per un libro.", a: ["Chi ama leggere trova sempre tempo per un libro."] },
        { t: "type", q: "Unisci le due frasi con «chi».", s: "Una persona sa ridere di sé. Questa persona affronta meglio le critiche.", a: ["Chi sa ridere di sé affronta meglio le critiche.", "Chi sa ridere di se stesso affronta meglio le critiche."] },
        { t: "fill", q: "Il potere della risata", s: "La ___ è una parte importante della nostra vita. Quando qualcosa ci fa ___, possiamo dimenticare le preoccupazioni e sentirci ___.", a: ["risata", "ridere", "meglio"], bank: ["risata", "ridere", "meglio", "tensione"] },
        { t: "fill", q: "Il potere della risata", s: "Ridere può aiutare il corpo a ___ e può ridurre la ___. Anche il nostro ___ può cambiare dopo una conversazione divertente.", a: ["rilassarsi", "tensione", "umore"], bank: ["rilassarsi", "tensione", "umore", "serio"] },
        { t: "fill", q: "Il potere della risata", s: "Non dobbiamo prendere tutto troppo sul ___: chiunque può sbagliare. Tutti possono ___ degli effetti positivi della risata.", a: ["serio", "beneficiare"], bank: ["serio", "beneficiare", "difficili", "leggerezza"] },
        { t: "listen", a: "Chi ride spesso si sente meglio." }
      ]
    },
    {
      title: "B. Se avessi saputo…", icon: "chat",
      ex: [
        { t: "read", title: "Franco e Chiara dopo lo spettacolo (1)", text:
`Chiara: Franco, sei stato bravissimo! Non pensavo che avresti fatto ridere così tante persone.
Franco: Nemmeno io. All’inizio ero terrorizzato. Se avessi saputo che sarebbe venuta così tanta gente, probabilmente non sarei salito sul palco!
Chiara: Non ci credo. Se non fossi salito sul palco, te ne saresti pentito.
Franco: Probabilmente sì. Però durante i primi minuti avevo paura di dimenticare tutte le battute.
Chiara: E invece non hai dimenticato niente.
Franco: Quasi niente! Se non avessi scritto alcune parole sul mio quaderno, avrei perso il filo almeno tre volte.
Chiara: Io non me ne sono accorta. Sembravi molto tranquillo.
Franco: Merito tuo. Se tu non fossi venuta, sarei stato molto più nervoso.
Chiara: Davvero?
Franco: Certo. Quando ti ho vista tra il pubblico, mi sono tranquillizzato.` },
        { t: "read", title: "Franco e Chiara dopo lo spettacolo (2)", text:
`Chiara: Allora meno male che sono venuta. Se fossi rimasta a casa, non avrei mai scoperto che sei così divertente.
Franco: E se non ci fossimo incontrati quel giorno sull’autobus, probabilmente non avrei mai pensato di fare uno spettacolo come questo.
Chiara: Forse. Però credo che prima o poi avresti trovato il coraggio.
Franco: Non ne sono sicuro. Se non ti avessi conosciuta, molte cose nella mia vita sarebbero andate diversamente.
Chiara: Adesso però non possiamo cambiare il passato.
Franco: No. Ma possiamo essere contenti di quello che è successo.
Chiara: Su questo sono completamente d’accordo.` },
        { t: "tf", s: "Franco era completamente tranquillo prima dello spettacolo.", a: false },
        { t: "tf", s: "Franco aveva scritto alcune parole su un quaderno.", a: true },
        { t: "tf", s: "Chiara pensa che Franco abbia dimenticato molte battute.", a: false },
        { t: "tf", s: "Franco dice che la presenza di Chiara lo ha aiutato.", a: true },
        { t: "tf", s: "Franco pensa che conoscere Chiara abbia cambiato la sua vita.", a: true },
        { t: "fill", s: "Se Franco ___ saputo che sarebbe venuta tanta gente, non ___ salito sul palco. (sapere / salire)", a: ["avesse", "sarebbe"] },
        { t: "fill", s: "Se Franco non ___ scritto alcune parole, ___ perso il filo. (scrivere / perdere)", a: ["avesse", "avrebbe"] },
        { t: "fill", s: "Se Chiara non ___ venuta allo spettacolo, Franco ___ stato più nervoso. (venire / essere)", a: ["fosse", "sarebbe"] },
        { t: "fill", s: "Se Chiara ___ rimasta a casa, non ___ visto Franco sul palco. (rimanere / vedere)", a: ["fosse", "avrebbe"] },
        { t: "mc", q: "Scegli la forma corretta.", s: "Se Franco e Chiara non si ___, molte cose sarebbero andate diversamente.", o: ["fossero incontrati", "avessero incontrato", "sarebbero incontrati", "erano incontrati"], a: 0 },
        { t: "match", q: "Abbina la parola alla definizione.", pairs: [["il palco", "dove si esibisce un artista"], ["il pubblico", "le persone che assistono allo spettacolo"], ["la battuta", "una frase divertente"], ["perdere il filo", "non ricordare più che cosa si stava dicendo"]] },
        { t: "match", q: "Abbina la parola alla definizione.", pairs: [["applaudire", "mostrare apprezzamento con le mani"], ["essere nervoso", "sentirsi agitato"], ["pentirsi", "provare dispiacere per ciò che si è fatto"], ["ridere", "reagire con allegria"]] },
        { t: "order", a: "Se avessi saputo non sarei salito sul palco." },
        { t: "listen", a: "Se tu non fossi venuta sarei stato più nervoso." }
      ]
    },
    {
      title: "C. Le parole fanno ridere", icon: "chat",
      ex: [
        { t: "read", title: "Franco e Roberto parlano dello stand-up", text:
`Roberto: Allora, Franco, com’è andato lo spettacolo?
Franco: Molto meglio di quanto pensassi. Alcune battute hanno fatto ridere tutto il pubblico.
Roberto: È una bella sensazione, no?
Franco: Sì, ma non voglio soltanto far ridere la gente. Mi piace anche farla pensare.
Roberto: Secondo me è proprio questo che rende interessante lo stand-up. Una battuta può far vedere una situazione da un punto di vista diverso.
Franco: Esatto. A volte una frase fa ridere, altre volte fa arrabbiare qualcuno.
Roberto: Ti è successo?
Franco: Certo. Ieri una battuta sul lavoro ha fatto protestare un uomo in prima fila.
Roberto: E tu che cosa hai fatto?
Franco: L’ho lasciato parlare. Non volevo interromperlo. Dopo gli ho risposto e alla fine siamo riusciti perfino a ridere insieme.
Roberto: Quindi hai lasciato che esprimesse la sua opinione.
Franco: Sì. Credo che un comico debba lasciare pensare il pubblico. Non deve spiegare tutto.
Roberto: E Chiara? Che cosa ha detto?
Franco: Mi ha detto che una delle mie battute l’ha fatta ridere così tanto che quasi non riusciva a respirare. Però un’altra battuta l’ha fatta riflettere.
Roberto: Allora hai ottenuto entrambe le cose.
Franco: Forse. In fondo, mi piace l’idea che le parole possano far ridere, far pensare e far discutere.` },
        { t: "mc", q: "Che cosa ha fatto Franco quando l’uomo in prima fila ha protestato?", o: ["L’ha lasciato parlare.", "L’ha fatto uscire.", "Ha smesso lo spettacolo.", "Si è arrabbiato."], a: 0 },
        { t: "fill", q: "Fare o lasciare?", s: "Questa battuta mi ___ ridere ogni volta.", a: ["fa"], bank: ["fa", "lascia"] },
        { t: "fill", q: "Fare o lasciare?", s: "Franco ha ___ parlare l’uomo del pubblico.", a: ["lasciato"], bank: ["lasciato", "fatto"] },
        { t: "fill", q: "Fare o lasciare?", s: "Alcune storie ci ___ pensare molto.", a: ["fanno"], bank: ["fanno", "lasciano"] },
        { t: "fill", q: "Fare o lasciare?", s: "Il presentatore non ___ entrare nessuno durante lo spettacolo.", a: ["lascia"], bank: ["lascia", "fa"] },
        { t: "fill", q: "Fare o lasciare?", s: "Quella frase ha ___ arrabbiare alcune persone.", a: ["fatto"], bank: ["fatto", "lasciato"] },
        { t: "type", q: "Sostituisci con un pronome.", s: "Franco fa ridere Roberto.", a: ["Franco lo fa ridere."] },
        { t: "type", q: "Sostituisci con un pronome.", s: "Il comico fa pensare gli spettatori.", a: ["Il comico li fa pensare."] },
        { t: "type", q: "Sostituisci con un pronome.", s: "Quella storia fa emozionare Natalia.", a: ["Quella storia la fa emozionare."] },
        { t: "read", title: "Le cose che fanno bene a Natalia", text:
`Natalia sa che per stare bene non servono sempre grandi cose. Una passeggiata tranquilla per Venezia la fa rilassare, soprattutto quando le strade sono meno affollate. Anche leggere un buon libro le fa dimenticare per qualche ora le preoccupazioni della giornata.
La musica la fa sentire serena e osservare l’acqua dei canali al tramonto la fa riflettere. Roberto, invece, la fa sorridere con i suoi piccoli gesti e con il suo modo di scherzare.
Natalia pensa che stare con le persone che ama, avere tempo per se stessa e continuare a scoprire cose nuove siano alcuni dei piccoli segreti che la fanno stare bene.` },
        { t: "match", q: "Che cosa provoca che cosa?", pairs: [["Una passeggiata per Venezia", "la fa rilassare."], ["La musica", "la fa sentire serena."], ["L’acqua dei canali al tramonto", "la fa riflettere."], ["Roberto", "la fa sorridere."]] },
        { t: "listen", a: "Le parole possono far ridere e far pensare." }
      ]
    },
    {
      title: "D. Grammatica", icon: "pen",
      ex: [
        { t: "read", title: "Chi, chiunque, quello che · Se avessi saputo", text:
`CHI significa “la persona che / le persone che”: Chi ride spesso si sente meglio.
CHIUNQUE significa “qualsiasi persona”: Chiunque può imparare a ridere di se stesso.
QUELLO CHE significa “la cosa che”: Quello che mi è piaciuto è il messaggio dell’articolo.
CIÒ CHE ha un significato simile, ma è più formale: Ciò che mi ha sorpreso è stato il finale.
Periodo ipotetico dell’irrealtà nel passato: SE + CONGIUNTIVO TRAPASSATO → CONDIZIONALE PASSATO. Se Chiara fosse rimasta a casa, non avrebbe visto lo spettacolo.` },
        { t: "mc", q: "Scegli l’opzione corretta.", s: "___ può imparare a ridere di sé.", o: ["Chiunque", "Chi"], a: 0, fixed: true },
        { t: "mc", q: "Scegli l’opzione corretta.", s: "Non capisco ___ vuoi dire.", o: ["quello che", "chi"], a: 0, fixed: true },
        { t: "mc", q: "Scegli l’opzione corretta.", s: "___ mi ha sorpreso è stato il finale.", o: ["Ciò che", "Chi"], a: 0, fixed: true },
        { t: "mc", q: "Scegli l’opzione corretta.", s: "___ studia ogni giorno migliora.", o: ["Chi", "Ciò che"], a: 0, fixed: true },
        { t: "fill", s: "___ venga a trovarci sarà il benvenuto.", a: ["Chiunque"], bank: ["Chiunque", "Chi", "Quello che"] },
        { t: "fill", s: "___ si arrende troppo presto non raggiunge i suoi obiettivi.", a: ["Chi"], bank: ["Chi", "Chiunque", "Ciò che"] },
        { t: "match", q: "Abbina: condizionale passato.", pairs: [["io (parlare)", "avrei parlato"], ["tu (vedere)", "avresti visto"], ["lei (andare)", "sarebbe andata"], ["noi (venire)", "saremmo venuti"], ["loro (capire)", "avrebbero capito"]] },
        { t: "mc", q: "Immagina il passato.", s: "Se fossi vissuto a Firenze nel Rinascimento, ___ Leonardo.", o: ["avrei conosciuto", "conoscerei", "conoscevo", "ho conosciuto"], a: 0 },
        { t: "mc", q: "Immagina il passato.", s: "Se fossi stato su una nave di Colombo nel 1492, ___ l’America.", o: ["avrei visto", "vedrei", "vedevo", "vedessi"], a: 0 },
        { t: "type", q: "Completa la frase.", s: "Se avessi studiato, … (superare l’esame)", a: ["Se avessi studiato, avrei superato l’esame.", "avrei superato l’esame"] },
        { t: "order", a: "Se Chiara fosse rimasta a casa non avrebbe visto lo spettacolo." }
      ]
    },
    {
      title: "E. Ridere all’italiana", icon: "column",
      ex: [
        { t: "read", title: "Ridere all’italiana", sub: "Cultura italiana", text:
`L’umorismo occupa da secoli un posto importante nella cultura italiana. Già tra il Cinquecento e il Seicento si diffuse la Commedia dell’Arte, una forma di teatro popolare in cui gli attori interpretavano personaggi riconoscibili e spesso improvvisavano parte dei dialoghi. Arlecchino, Pulcinella, Pantalone e Colombina sono alcuni dei personaggi più famosi.
Con il tempo, la comicità italiana è cambiata, ma ha continuato a osservare la vita quotidiana: la famiglia, il lavoro, le differenze tra le regioni, le abitudini degli italiani. Attori come Totò e Alberto Sordi sono diventati simboli della comicità italiana del Novecento.
Un altro elemento caratteristico è l’uso dei dialetti e degli accenti regionali: i comici hanno spesso trasformato queste differenze linguistiche in una fonte di umorismo.
Oggi esistono anche spettacoli di stand-up comedy, nei quali un comico parla direttamente al pubblico e racconta esperienze personali. Bastano un palco, un microfono e una persona con qualcosa da raccontare.
Naturalmente, far ridere non significa soltanto raccontare barzellette. Una buona battuta può anche far pensare o aiutarci a prendere con più leggerezza alcuni problemi.` },
        { t: "mc", q: "Che cos’è la Commedia dell’Arte?", o: ["Teatro popolare con personaggi riconoscibili e dialoghi spesso improvvisati", "Un tipo di opera lirica", "Un genere di romanzo giallo", "Un programma televisivo"], a: 0 },
        { t: "mc", q: "Quale di questi NON è un personaggio della Commedia dell’Arte?", o: ["Montalbano", "Arlecchino", "Pulcinella", "Colombina"], a: 0 },
        { t: "mc", q: "Quali attori del Novecento sono citati?", o: ["Totò e Alberto Sordi", "Fellini e Leone", "Verdi e Puccini", "Dante e Petrarca"], a: 0 },
        { t: "tf", s: "I comici italiani usano spesso i dialetti e gli accenti regionali.", a: true },
        { t: "tf", s: "Per uno spettacolo di stand-up servono scenografie molto elaborate.", a: false },
        { t: "order", a: "Una buona battuta può anche far pensare." }
      ]
    }
  ]
});
