/* Unità 1 — La vita in città · Condizionale presente */
(window.CIAO_UNITS = window.CIAO_UNITS || []).push({
  n: 1,
  title: "La vita in città",
  topics: "Città e campagna · Viaggi e culture · Il condizionale presente",
  color: "#7d1f2c", color2: "#a92b3d", shadow: "#561520",
  frase: { t: "La città è bella quando non diventa una prigione.", c: "Natascia, Unità 1" },
  notes: `
<h3>1. Il condizionale presente</h3>
<p>Si usa per esprimere un <b>desiderio</b>, fare una <b>richiesta gentile</b>, dare un <b>consiglio</b> o esprimere una <b>possibilità</b>.</p>
<div class="ex">Vorrei visitare Roma. · Potresti aiutarmi? · Dovresti riposare di più. · Sarebbe una buona idea.</div>
<h4>Formazione</h4>
<p>Desinenze: <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>. Nei verbi in <b>-are</b> la vocale <i>a</i> cambia in <i>e</i>.</p>
<div class="tbl-wrap"><table>
<tr><th></th><th>parlare</th><th>prendere</th><th>dormire</th></tr>
<tr><td>io</td><td>parlerei</td><td>prenderei</td><td>dormirei</td></tr>
<tr><td>tu</td><td>parleresti</td><td>prenderesti</td><td>dormiresti</td></tr>
<tr><td>lui / lei</td><td>parlerebbe</td><td>prenderebbe</td><td>dormirebbe</td></tr>
<tr><td>noi</td><td>parleremmo</td><td>prenderemmo</td><td>dormiremmo</td></tr>
<tr><td>voi</td><td>parlereste</td><td>prendereste</td><td>dormireste</td></tr>
<tr><td>loro</td><td>parlerebbero</td><td>prenderebbero</td><td>dormirebbero</td></tr>
</table></div>
<h4>Verbi irregolari principali</h4>
<p>essere → <b>sarei</b> · avere → <b>avrei</b> · andare → <b>andrei</b> · fare → <b>farei</b> · venire → <b>verrei</b> · volere → <b>vorrei</b> · potere → <b>potrei</b> · dovere → <b>dovrei</b> · sapere → <b>saprei</b></p>
<div class="warn">Verbi in <b>-care / -gare</b> prendono la <b>h</b>: cercare → cercherei, pagare → pagherei. Verbi in <b>-ciare / -giare</b> perdono la <b>i</b>: cominciare → comincerei, mangiare → mangerei.</div>
<h3>2. Gli usi del condizionale</h3>
<ul>
<li><b>Cortesia:</b> Vorrei un caffè, per favore. · Mi potrebbe dire dov’è la stazione?</li>
<li><b>Desiderio:</b> Mi piacerebbe visitare Firenze.</li>
<li><b>Consiglio:</b> Dovresti leggere un po’ ogni giorno. · Io al tuo posto ascolterei più dialoghi.</li>
<li><b>Situazioni immaginarie:</b> Se avessi più tempo, studierei italiano tutti i giorni.</li>
</ul>
<h3>3. Il periodo ipotetico (anticipazione)</h3>
<p><b>Se + congiuntivo imperfetto → condizionale presente</b></p>
<div class="ex">Se fossi ricco, comprerei una casa vicino al mare. · Se vivessi a Venezia, farei una passeggiata ogni sera.</div>
<h3>4. Vocabolario essenziale</h3>
<div class="vocab">
<div><b>il rumore</b> — suono forte e fastidioso</div>
<div><b>il traffico</b> — tante auto per strada</div>
<div><b>i servizi</b> — scuole, ospedali, mezzi pubblici</div>
<div><b>la campagna</b> — zona fuori città</div>
<div><b>l’equilibrio</b> — giusta misura</div>
<div><b>i vantaggi / gli svantaggi</b></div>
<div><b>sentirsi a disagio</b> — non sentirsi tranquilli</div>
<div><b>il malinteso</b> — errore di comprensione</div>
<div><b>la stretta di mano</b></div>
<div><b>secondo me · però · inoltre · invece · per questo</b></div>
</div>`,
  lessons: [
    {
      title: "A. Buongiorno!", icon: "chat",
      ex: [
        { t: "read", title: "La vita in città", sub: "Luis e Natascia parlano di città e campagna.", text:
`Luis: Mi piace vivere in città. Qui tutto è vicino: il lavoro, i negozi, i bar, i cinema, le librerie. Non ci si annoia mai.
Natascia: È vero, in città ci sono molte possibilità. Però a volte mi sembra che ci sia troppo rumore.
Luis: Sì, il rumore c’è. Ma pensa anche ai vantaggi: puoi uscire la sera, incontrare amici, visitare musei, seguire un corso, andare a un concerto…
Natascia: Da questo punto di vista hai ragione. La città offre tante occasioni. Però io ho bisogno anche di silenzio, di aria pulita, di alberi, di natura.
Luis: Quindi preferisci vivere in campagna?
Natascia: Non esattamente. Mi piace la città, ma non sempre. A volte ho bisogno di andare in campagna, camminare senza fretta, ascoltare gli uccelli, sentire il vento.
Luis: Capisco. Per me la città è energia. Mi dà idee, movimento, incontri.
Natascia: Per me, invece, la natura è equilibrio. Dopo qualche giorno in città, sento il bisogno di respirare.
Luis: Forse la soluzione ideale è vivere in città, ma scappare in campagna ogni tanto.
Natascia: Esatto. Una città con parchi, fiumi, giardini e treni per andare fuori nel fine settimana. Questa sarebbe perfetta.
Luis: Allora siamo d’accordo: la città va bene, ma non deve farci dimenticare la natura.
Natascia: Sì. La città è bella quando non diventa una prigione.` },
        { t: "mc", q: "Che cosa piace a Luis della città?", o: ["Tutto è vicino e non ci si annoia mai.", "Il silenzio e l’aria pulita.", "Gli alberi e gli uccelli.", "Il traffico del mattino."], a: 0 },
        { t: "mc", q: "Di che cosa ha bisogno Natascia?", o: ["Di silenzio, aria pulita e natura.", "Di più negozi e cinema.", "Di un’automobile nuova.", "Di lavorare di più."], a: 0 },
        { t: "tf", s: "Natascia preferisce vivere sempre in campagna.", a: false, why: "«Non esattamente»: le piace la città, ma a volte ha bisogno della campagna." },
        { t: "tf", s: "Per Luis la città è energia: gli dà idee, movimento, incontri.", a: true },
        { t: "tf", s: "Alla fine Luis e Natascia sono d’accordo: la città va bene, ma senza dimenticare la natura.", a: true },
        { t: "fill", q: "Completa il riassunto.", s: "Luis pensa che vivere in città abbia molti ___. Secondo lui, in città ci sono più ___: negozi, scuole, ospedali, mezzi pubblici.", a: ["vantaggi", "servizi"], bank: ["vantaggi", "servizi", "rumore", "natura"] },
        { t: "fill", q: "Completa il riassunto.", s: "Inoltre, la città offre molte ___ per studiare, lavorare e conoscere persone nuove.", a: ["possibilità"], bank: ["possibilità", "campagna", "equilibrio", "traffico"] },
        { t: "fill", q: "Completa il riassunto.", s: "Per Natascia a volte c’è troppo ___, troppo ___ e poca tranquillità.", a: [["traffico", "rumore"], ["rumore", "traffico"]], bank: ["traffico", "rumore", "natura", "vantaggi"] },
        { t: "fill", q: "Completa il riassunto.", s: "Ogni tanto preferisce andare in ___, camminare tra gli alberi e stare a contatto con la ___.", a: ["campagna", "natura"], bank: ["campagna", "natura", "città", "possibilità"] },
        { t: "fill", q: "Completa il riassunto.", s: "Secondo Natascia, l’ideale è trovare un ___ tra la vita urbana e il bisogno di silenzio.", a: ["equilibrio"], bank: ["equilibrio", "servizio", "traffico"] },
        { t: "match", q: "Abbina le parole alla definizione.", pairs: [["il rumore", "suono forte e fastidioso"], ["la campagna", "zona fuori città, con campi e alberi"], ["l’equilibrio", "la giusta misura tra due cose"], ["i servizi", "scuole, ospedali, mezzi pubblici"], ["il fine settimana", "sabato e domenica"]] },
        { t: "mc", q: "Scegli il connettivo giusto.", s: "Mi piace la città. ___, a volte ho bisogno di silenzio.", o: ["Però", "Inoltre", "Per questo", "Secondo me"], a: 0, why: "«Però» introduce un contrasto." },
        { t: "mc", q: "Scegli il connettivo giusto.", s: "In città ci sono negozi e cinema. ___, ci sono molti mezzi pubblici.", o: ["Inoltre", "Invece", "Nonostante ciò", "Però"], a: 0, why: "«Inoltre» aggiunge un’informazione." },
        { t: "order", a: "La città va bene ma non deve farci dimenticare la natura." },
        { t: "listen", a: "Forse la soluzione ideale è vivere in città.", d: ["campagna"] }
      ]
    },
    {
      title: "B. Problemi e soluzioni", icon: "book",
      ex: [
        { t: "read", title: "Luis in Grecia", text:
`Quando Luis è andato in Grecia per la prima volta, era molto contento. Voleva visitare Atene, vedere il mare, provare la cucina locale e parlare con la gente. Tuttavia, appena è arrivato, ha capito che non sarebbe stato così facile.
Non conosceva il greco e non riusciva a leggere quasi nulla: i cartelli, i nomi delle strade, il menù del ristorante. Anche quando le persone erano gentili, lui non capiva bene le spiegazioni.
Un giorno doveva prendere un autobus per andare al centro, ma ha sbagliato direzione. Dopo quaranta minuti si è trovato in una zona sconosciuta della città. All’inizio si è preoccupato, poi ha chiesto aiuto a una signora anziana. Lei non parlava inglese, ma con i gesti e con molta pazienza gli ha indicato la fermata giusta.
Da quel viaggio Luis ha imparato una cosa importante: quando si viaggia, non basta avere una mappa. Bisogna anche conoscere almeno alcune parole della lingua del posto.` },
        { t: "tf", s: "Luis conosceva bene il greco.", a: false },
        { t: "mc", q: "Perché Luis si è perso ad Atene?", o: ["Ha preso l’autobus nella direzione sbagliata.", "Ha perso la mappa in albergo.", "Il taxi lo ha lasciato lontano.", "Ha dimenticato il nome dell’albergo."], a: 0 },
        { t: "mc", q: "Chi ha aiutato Luis?", o: ["Una signora anziana, con i gesti e molta pazienza.", "Un poliziotto che parlava inglese.", "Un amico di Atene.", "L’autista dell’autobus."], a: 0 },
        { t: "fill", q: "Che cosa ha imparato Luis?", s: "Bisogna conoscere almeno alcune parole della ___ del posto.", a: ["lingua"] },
        { t: "read", title: "Roberto in Cechia", text:
`Roberto ha avuto un problema diverso durante un viaggio in Cechia. Era stato invitato a cena da alcuni amici di Praga. Voleva essere educato e fare una buona impressione.
Quando è arrivato, ha salutato tutti con entusiasmo. In Argentina e in molti paesi mediterranei è normale salutare con un bacio sulla guancia, soprattutto in un ambiente amichevole.
Per questo, quando ha visto una donna del gruppo, si è avvicinato e le ha dato un bacio sulla guancia. La donna è rimasta un po’ sorpresa. Non si è arrabbiata, però si è sentita a disagio.
Più tardi, un amico gli ha spiegato che in Cechia, in molte situazioni, è più comune salutare con una stretta di mano o semplicemente con un sorriso. Roberto si è scusato e tutti hanno riso dell’episodio. Da allora, prima di salutare qualcuno in un paese nuovo, osserva come si comportano gli altri.` },
        { t: "mc", q: "Come ha reagito la donna al bacio sulla guancia?", o: ["È rimasta sorpresa e si è sentita a disagio.", "Si è arrabbiata molto.", "Ha baciato Roberto a sua volta.", "È andata via dalla cena."], a: 0 },
        { t: "tf", s: "In Cechia, con chi non si conosce bene, è più comune salutare con una stretta di mano o con un sorriso.", a: true },
        { t: "read", title: "Laura in Giappone", text:
`Laura, invece, ha avuto un’esperienza interessante in Giappone. Prima di partire, aveva letto molte informazioni sul paese, ma non conosceva bene tutte le regole della comunicazione quotidiana.
Durante una riunione con alcune persone giapponesi, Laura voleva mostrarsi sicura e sincera. Per questo guardava spesso i suoi interlocutori direttamente negli occhi. Nel suo paese questo gesto significa attenzione e rispetto.
Dopo la riunione, però, una collega le ha spiegato con delicatezza che in Giappone guardare una persona troppo fissamente negli occhi può sembrare troppo diretto o poco naturale. Non è vietato, naturalmente, ma in alcune situazioni è meglio avere uno sguardo più discreto.
Laura si è sentita un po’ in imbarazzo, ma ha capito che ogni cultura ha i suoi codici. Viaggiare le ha insegnato che la comunicazione non dipende solo dalle parole: anche i gesti, la distanza, il tono di voce e lo sguardo possono cambiare molto da un paese all’altro.` },
        { t: "tf", s: "In Giappone è vietato guardare le persone negli occhi.", a: false, why: "Non è vietato: in alcune situazioni è meglio uno sguardo più discreto." },
        { t: "mc", k: "A chi si riferisce?", q: "«Si è perso perché non conosceva bene la lingua locale.»", o: ["Luis", "Roberto", "Laura"], a: 0, fixed: true },
        { t: "mc", k: "A chi si riferisce?", q: "«Non sapeva che quel saluto non era comune.»", o: ["Luis", "Roberto", "Laura"], a: 1, fixed: true },
        { t: "mc", k: "A chi si riferisce?", q: "«Era in Giappone per lavoro.»", o: ["Luis", "Roberto", "Laura"], a: 2, fixed: true },
        { t: "mc", k: "A chi si riferisce?", q: "«Si è scusato quando ha capito il malinteso.»", o: ["Luis", "Roberto", "Laura"], a: 1, fixed: true },
        { t: "mc", q: "Che cosa significa «sentirsi a disagio»?", o: ["Non sentirsi tranquilli, sentirsi un po’ in imbarazzo.", "Sentirsi molto felici.", "Essere stanchi dopo un viaggio.", "Arrabbiarsi con qualcuno."], a: 0 },
        { t: "order", a: "Ogni cultura ha i suoi codici." },
        { t: "listen", a: "Quando si viaggia non basta avere una mappa." }
      ]
    },
    {
      title: "C. Potresti aiutarmi?", icon: "chat",
      ex: [
        { t: "read", title: "Potresti aiutarmi? (1)", sub: "Roberto chiede aiuto a Natalia con il condizionale.", text:
`Roberto: Natalia, potresti aiutarmi con un dubbio di grammatica?
Natalia: Certo, Roberto. Che cosa non ti è chiaro?
Roberto: Sto studiando il condizionale, ma non capisco bene quando si usa. So dire “vorrei”, però poi mi confondo.
Natalia: È normale. Il condizionale si usa in diversi casi. Prima di tutto, si usa molto per la cortesia.
Roberto: Per esempio, se entro in un bar, posso dire: “Voglio un caffè”?
Natalia: Puoi dirlo, ma suona troppo diretto. Sarebbe meglio dire: “Vorrei un caffè, per favore”.
Roberto: Ah, quindi “vorrei” è più gentile di “voglio”.
Natalia: Esatto. E se devi chiedere qualcosa, puoi dire: “Potrebbe aiutarmi?” invece di “Mi aiuti?”.
Roberto: Quindi, con una persona che non conosco, dovrei usare il condizionale.
Natalia: Sì. Per esempio: “Mi potrebbe dire dov’è la stazione?” oppure “Mi saprebbe indicare la strada?”
Roberto: E con gli amici?
Natalia: Anche con gli amici puoi usarlo, ma in modo più naturale: “Mi passeresti il libro?” oppure “Mi daresti una mano?”` },
        { t: "tf", s: "Secondo Natalia, «Voglio un caffè» suona troppo diretto.", a: true },
        { t: "read", title: "Potresti aiutarmi? (2)", text:
`Roberto: Però il condizionale non serve solo per la cortesia, vero?
Natalia: No. Si usa anche per esprimere desideri. Per esempio: “Mi piacerebbe visitare Firenze” oppure “Vorrei parlare italiano senza paura”.
Roberto: Allora posso dire: “Mi piacerebbe vivere un mese in Italia”.
Natalia: Perfetto. Si usa anche per dare consigli: “Dovresti leggere un po’ ogni giorno”. Oppure: “Io al tuo posto ascolterei più dialoghi in italiano”.
Roberto: Quindi “dovresti” è un consiglio, non un ordine.
Natalia: Bravissimo. È molto più gentile di “devi”.
Roberto: E quando parliamo di situazioni immaginarie?
Natalia: Anche lì usiamo il condizionale: “Se avessi più tempo, studierei italiano tutti i giorni”.
Roberto: Oppure: “Se vivessi a Venezia, farei una passeggiata ogni sera”.
Natalia: Esatto. E ricordati: in italiano la gentilezza passa spesso attraverso il modo in cui chiediamo le cose.
Roberto: Natalia, mi correggeresti se sbaglio?
Natalia: Volentieri. Però tu mi prometteresti di non avere paura di parlare?
Roberto: Lo prometterei… anzi, lo prometto!` },
        { t: "mc", s: "Roberto, tu mi ___ aiutare con questo esercizio?", o: ["potresti", "puoi", "potevi"], a: 0, fixed: true },
        { t: "mc", s: "Io ___ parlare italiano senza paura.", o: ["voglio", "vorrei", "volevo"], a: 1, fixed: true },
        { t: "mc", s: "Secondo Natalia, Roberto ___ usare il condizionale con una persona che non conosce bene.", o: ["dovrebbe", "doveva", "dovrà"], a: 0, fixed: true },
        { t: "mc", s: "Se Roberto vivesse a Venezia, ___ una passeggiata ogni sera.", o: ["faceva", "farebbe", "farà"], a: 1, fixed: true },
        { t: "mc", s: "Natalia dice: «Al tuo posto, io ___ più dialoghi in italiano».", o: ["ascolterei", "ascolto", "ascoltavo"], a: 0, fixed: true },
        { t: "mc", q: "A che cosa serve il condizionale in questa frase?", s: "Dovresti leggere un po’ ogni giorno.", o: ["A dare un consiglio", "A esprimere un desiderio", "A fare una richiesta gentile", "A immaginare una situazione"], a: 0 },
        { t: "mc", q: "A che cosa serve il condizionale in questa frase?", s: "Mi piacerebbe visitare Firenze.", o: ["A esprimere un desiderio", "A dare un consiglio", "A dare un ordine", "A parlare del passato"], a: 0 },
        { t: "type", q: "Trasforma in modo più cortese.", s: "Voglio un caffè.", a: ["Vorrei un caffè.", "Vorrei un caffè, per favore.", "Prenderei un caffè.", "Prenderei un caffè, per favore."] },
        { t: "type", q: "Trasforma in modo più cortese.", s: "Mi aiuti con questo esercizio?", a: ["Mi aiuteresti con questo esercizio?", "Potresti aiutarmi con questo esercizio?", "Mi potresti aiutare con questo esercizio?", "Potrebbe aiutarmi con questo esercizio?", "Mi potrebbe aiutare con questo esercizio?", "Mi aiuterebbe con questo esercizio?"] },
        { t: "type", q: "Trasforma in modo più cortese.", s: "Mi dici dov’è la stazione?", a: ["Mi diresti dov’è la stazione?", "Mi potresti dire dov’è la stazione?", "Potresti dirmi dov’è la stazione?", "Mi potrebbe dire dov’è la stazione?", "Potrebbe dirmi dov’è la stazione?", "Mi sapresti dire dov’è la stazione?", "Mi saprebbe dire dov’è la stazione?", "Mi direbbe dov’è la stazione?"] },
        { t: "type", q: "Trasforma in modo più cortese.", s: "Mi passi il libro?", a: ["Mi passeresti il libro?", "Potresti passarmi il libro?", "Mi potresti passare il libro?", "Mi passerebbe il libro?", "Potrebbe passarmi il libro?", "Mi potrebbe passare il libro?"] },
        { t: "listen", a: "Mi correggeresti se sbaglio?" },
        { t: "order", a: "Se vivessi a Venezia farei una passeggiata ogni sera.", d: ["faccio"] }
      ]
    },
    {
      title: "D. Grammatica", icon: "pen",
      ex: [
        { t: "read", title: "Il condizionale presente", text:
`Il condizionale presente si usa per esprimere un desiderio, fare una richiesta gentile, dare un consiglio o esprimere una possibilità.
Esempi: Vorrei visitare Roma. Potresti aiutarmi? Dovresti riposare di più. Sarebbe una buona idea.
Le desinenze sono: io -ei, tu -esti, lui/lei -ebbe, noi -emmo, voi -este, loro -ebbero.
Nei verbi in -ARE la vocale a cambia in e: parlare → parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero.
PRENDERE → prenderei, prenderesti, prenderebbe… DORMIRE → dormirei, dormiresti, dormirebbe…
Verbi irregolari: essere → sarei, avere → avrei, andare → andrei, fare → farei, venire → verrei, volere → vorrei, potere → potrei, dovere → dovrei, sapere → saprei.` },
        { t: "match", q: "Abbina il soggetto alla forma di «parlare».", pairs: [["io", "parlerei"], ["tu", "parleresti"], ["lui / lei", "parlerebbe"], ["noi", "parleremmo"], ["voi", "parlereste"], ["loro", "parlerebbero"]] },
        { t: "match", q: "Abbina l’infinito al condizionale (io).", pairs: [["essere", "sarei"], ["avere", "avrei"], ["venire", "verrei"], ["volere", "vorrei"], ["sapere", "saprei"], ["andare", "andrei"]] },
        { t: "fill", s: "Io ___ un caffè. (volere)", a: ["vorrei"] },
        { t: "fill", s: "Tu ___ aiutarmi? (potere)", a: ["potresti"] },
        { t: "fill", s: "Natalia ___ vivere in Italia. (volere)", a: ["vorrebbe"] },
        { t: "fill", s: "Noi ___ partire domani. (dovere)", a: ["dovremmo"] },
        { t: "fill", s: "Voi ___ con noi? (venire)", a: ["verreste"] },
        { t: "fill", s: "Roberto ___ una nuova lingua. (studiare)", a: ["studierebbe"] },
        { t: "fill", s: "Loro ___ il treno. (prendere)", a: ["prenderebbero"] },
        { t: "fill", s: "Io, al tuo posto, non lo ___. (fare)", a: ["farei"] },
        { t: "mc", q: "Qual è la forma corretta?", s: "Stasera noi ___ volentieri una pizza. (mangiare)", o: ["mangeremmo", "mangieremmo", "mangiaremmo"], a: 0, why: "I verbi in -giare perdono la i: mangiare → mangerei." },
        { t: "mc", q: "Qual è la forma corretta?", s: "Io ___ un appartamento vicino al centro. (cercare)", o: ["cercherei", "cercerei", "cercarei"], a: 0, why: "I verbi in -care prendono la h: cercare → cercherei." },
        { t: "read", title: "Se fossi ricco…", text:
`Se fossi ricco, comprerei una grande casa vicino al mare. Ogni mattina camminerei sulla spiaggia e sarei molto più tranquillo. Non lavorerei più tante ore e avrei più tempo per la mia famiglia e i miei amici.
Viaggerei spesso in Italia e visiterei città come Roma, Firenze e Venezia. Avrei anche una piccola barca e la domenica andrei in mare con i miei amici.
Naturalmente, darei una parte del mio denaro alle persone che ne hanno bisogno. Aprirei una scuola gratuita per i bambini e finanzierei molti progetti culturali.
Ma non rimarrei tutto il giorno senza fare niente. Continuerei a scrivere, studiare e creare nuovi progetti, perché il denaro non sarebbe sufficiente per essere felici.` },
        { t: "fill", s: "Se fossi ricco, ___ una grande casa vicino al mare. (comprare)", a: ["comprerei"] },
        { t: "fill", s: "Ogni mattina ___ sulla spiaggia e ___ molto più tranquillo. (camminare / essere)", a: ["camminerei", "sarei"] },
        { t: "fill", s: "___ spesso in Italia e ___ Roma, Firenze e Venezia. (viaggiare / visitare)", a: ["Viaggerei", "visiterei"] },
        { t: "fill", s: "La domenica ___ in mare con i miei amici. (andare)", a: ["andrei"] },
        { t: "fill", s: "Il denaro non ___ sufficiente per essere felici. (essere)", a: ["sarebbe"] },
        { t: "mc", q: "Dai un consiglio: «Sono sempre stanco.»", o: ["Dovresti dormire di più.", "Dovevi dormire di più.", "Dormirai di più.", "Hai dormito di più."], a: 0 },
        { t: "mc", q: "Dai un consiglio: «Arrivo sempre tardi.»", o: ["Al tuo posto, uscirei di casa prima.", "Al tuo posto, uscivo di casa prima.", "Al tuo posto, esco di casa prima.", "Al tuo posto, sono uscito prima."], a: 0 }
      ]
    },
    {
      title: "E. Le automobili italiane", icon: "column",
      ex: [
        { t: "read", title: "Le automobili italiane", sub: "Cultura italiana", text:
`L’Italia è famosa nel mondo non solo per l’arte, la moda e la cucina, ma anche per le sue automobili. I marchi automobilistici italiani hanno caratteristiche molto diverse: alcuni producono modelli pratici per la vita quotidiana, mentre altri costruiscono auto sportive e di lusso.
La Fiat è uno dei marchi italiani più conosciuti. Per molte persone, le sue automobili rappresentano la città, la famiglia e la vita di tutti i giorni. La Fiat 500, piccola e facile da guidare, è diventata un vero simbolo del design italiano.
L’Alfa Romeo è apprezzata per le sue linee eleganti e il suo carattere sportivo. Ferrari e Lamborghini, invece, sono famose per le loro auto veloci, potenti e costose. Questi marchi sono legati al mondo delle corse, della tecnologia e del lusso. Anche la Maserati combina eleganza e prestazioni sportive.
Le automobili italiane non sono soltanto mezzi di trasporto. Il loro design cerca di trasmettere emozioni attraverso le forme, i colori e il suono del motore. Per questo motivo, molte persone le considerano vere opere d’arte.
Oggi l’industria automobilistica italiana deve affrontare nuove sfide. Le aziende stanno sviluppando veicoli elettrici e tecnologie più sostenibili, cercando di conservare la propria identità e la tradizione del design italiano.` },
        { t: "mc", q: "Per quali prodotti è famosa l’Italia nel mondo, secondo il testo?", o: ["Arte, moda, cucina e automobili", "Solo per la cucina", "Petrolio e acciaio", "Computer e telefoni"], a: 0 },
        { t: "mc", q: "Quale automobile è diventata un simbolo del design italiano?", o: ["La Fiat 500", "La Ferrari", "La Maserati", "La Lamborghini"], a: 0 },
        { t: "mc", q: "Perché la Fiat 500 è diventata un simbolo?", o: ["È piccola e facile da guidare.", "È la più veloce del mondo.", "È molto costosa.", "Si usa solo nelle corse."], a: 0 },
        { t: "match", q: "Abbina il marchio alla caratteristica.", pairs: [["Fiat", "auto pratiche per tutti i giorni"], ["Alfa Romeo", "linee eleganti e carattere sportivo"], ["Ferrari e Lamborghini", "auto veloci, potenti e costose"], ["Maserati", "eleganza e prestazioni sportive"]] },
        { t: "tf", s: "Il design delle auto italiane cerca di trasmettere emozioni con le forme, i colori e il suono del motore.", a: true },
        { t: "tf", s: "L’industria automobilistica italiana non deve affrontare nessuna sfida.", a: false },
        { t: "mc", q: "Che cosa stanno sviluppando oggi le aziende italiane?", o: ["Veicoli elettrici e tecnologie più sostenibili", "Carrozze a cavalli", "Solo auto da corsa", "Treni ad alta velocità"], a: 0 },
        { t: "fill", s: "Le automobili italiane non sono soltanto mezzi di ___.", a: ["trasporto"], bank: ["trasporto", "lusso", "corse", "design"] },
        { t: "order", a: "Molte persone le considerano vere opere d’arte." },
        { t: "mc", q: "Completa con il condizionale.", s: "Se potessi scegliere un’auto italiana, ___ una Fiat 500.", o: ["guiderei", "guido", "guidavo", "guiderò"], a: 0 }
      ]
    }
  ]
});
