/* Unità 2 — La lettura è buona · Congiuntivo presente */
(window.CIAO_UNITS = window.CIAO_UNITS || []).push({
  n: 2,
  title: "La lettura è buona",
  topics: "Libri e generi letterari · Libro o film? · Il congiuntivo presente",
  color: "#1f6b6f", color2: "#2f8c8f", shadow: "#134a4d",
  frase: { t: "Un buon libro può farci emozionare, riflettere e viaggiare con l’immaginazione senza uscire di casa.", c: "Natalia, Unità 2" },
  notes: `
<h3>1. Il congiuntivo presente</h3>
<p>Si usa soprattutto dopo espressioni che indicano <b>opinione, dubbio, desiderio, speranza, possibilità, necessità</b> o <b>emozione</b>.</p>
<div class="ex">Penso che il libro sia interessante. · Spero che Carlotta venga con noi. · È possibile che Roberto abbia ragione. · Voglio che tu mi dica la verità.</div>
<h4>Verbi regolari</h4>
<div class="tbl-wrap"><table>
<tr><th>che…</th><th>parlare</th><th>leggere</th><th>dormire</th><th>capire</th></tr>
<tr><td>io / tu / lui</td><td>parli</td><td>legga</td><td>dorma</td><td>capisca</td></tr>
<tr><td>noi</td><td>parliamo</td><td>leggiamo</td><td>dormiamo</td><td>capiamo</td></tr>
<tr><td>voi</td><td>parliate</td><td>leggiate</td><td>dormiate</td><td>capiate</td></tr>
<tr><td>loro</td><td>parlino</td><td>leggano</td><td>dormano</td><td>capiscano</td></tr>
</table></div>
<h4>Essere e avere</h4>
<p>essere → sia, sia, sia, siamo, siate, <b>siano</b> · avere → abbia, abbia, abbia, abbiamo, abbiate, <b>abbiano</b></p>
<h4>Altri verbi frequenti</h4>
<p>andare → <b>vada</b> · venire → <b>venga</b> · dire → <b>dica</b> · dare → <b>dia</b> · stare → <b>stia</b> · sapere → <b>sappia</b> · potere → <b>possa</b> · volere → <b>voglia</b> · dovere → <b>debba</b> · fare → <b>faccia</b> · scegliere → <b>scelga</b></p>
<h3>2. Espressioni + congiuntivo</h3>
<p>penso che… · credo che… · non penso che… · non credo che… · spero che… · voglio che… · preferisco che… · è possibile che… · è importante che… · è necessario che…</p>
<div class="ex">Non credo che Luis abbia tempo. · È importante che voi partecipiate.</div>
<div class="warn">Quando esprimono un’opinione personale o non certa, <b>pensare che</b> e <b>credere che</b> sono seguiti dal congiuntivo: <i>Penso che il film sia migliore.</i></div>
<h3>3. Vocabolario essenziale</h3>
<div class="vocab">
<div><b>il romanzo romantico</b></div><div><b>la fantascienza</b></div><div><b>il giallo</b> — mistero, crimine</div>
<div><b>il fantasy</b></div><div><b>il romanzo storico</b></div><div><b>la biografia</b></div>
<div><b>la novella</b> — racconto breve</div><div><b>la poesia</b></div><div><b>la commedia</b></div>
<div><b>la fiera del libro</b></div><div><b>il regista</b></div><div><b>la recensione</b></div>
</div>`,
  lessons: [
    {
      title: "A. La lettura è buona", icon: "book",
      ex: [
        { t: "read", title: "Natalia e Carlotta parlano di libri", text:
`Natalia: Carlotta, ti piace leggere?
Carlotta: Sì, mi piace moltissimo. Leggo quasi ogni sera, soprattutto prima di andare a dormire. E tu?
Natalia: Anch’io adoro leggere. Quando ho un po’ di tempo libero, prendo un libro e dimentico tutto il resto. Qual è il tuo genere letterario preferito?
Carlotta: Mi piace soprattutto la fantascienza. Amo le storie ambientate nel futuro, i viaggi nello spazio, i robot e le nuove tecnologie.
Natalia: Interessante! Io, invece, preferisco i romanzi romantici.
Carlotta: Ti piacciono molto le storie d’amore?
Natalia: Sì, soprattutto quando i personaggi devono superare molte difficoltà per stare insieme.
Carlotta: Capisco. Io preferisco i libri che presentano mondi sconosciuti e problemi del futuro. A volte la fantascienza ci fa riflettere anche sulla società di oggi.
Natalia: È vero. Io leggo anche romanzi storici, perché permettono di conoscere altre epoche, altri modi di vivere e personaggi realmente esistiti.
Carlotta: A me piacciono anche i romanzi gialli e fantasy, ma la fantascienza rimane il mio genere preferito.
Natalia: Un buon libro può farci emozionare, riflettere e viaggiare con l’immaginazione senza uscire di casa.
Carlotta: Allora potremmo consigliarci un libro a vicenda.
Natalia: Ottima idea! Tu mi consiglierai un romanzo di fantascienza e io ti presterò una bella storia d’amore.
Carlotta: D’accordo! Sarà il nostro piccolo club di lettura!` },
        { t: "tf", s: "Carlotta legge soprattutto romanzi romantici.", a: false },
        { t: "tf", s: "Natalia ama le storie d’amore.", a: true },
        { t: "tf", s: "Secondo Carlotta, la fantascienza può farci riflettere sulla società.", a: true },
        { t: "tf", s: "Natalia non legge mai romanzi storici.", a: false },
        { t: "tf", s: "Le due ragazze decidono di consigliarsi un libro a vicenda.", a: true },
        { t: "mc", q: "Perché a Carlotta piace la fantascienza?", o: ["Ama le storie nel futuro, lo spazio, i robot e le nuove tecnologie.", "Racconta la vita di persone reali.", "Parla solo di storie d’amore.", "È ambientata nel passato."], a: 0 },
        { t: "match", q: "Abbina il genere alla definizione.", pairs: [["Romanzo romantico", "sentimenti, relazioni, storie d’amore"], ["Fantascienza", "futuro, spazio, robot, tecnologie"], ["Romanzo giallo", "un mistero, un crimine, un’indagine"], ["Fantasy", "mondi immaginari, magia, creature fantastiche"]] },
        { t: "match", q: "Abbina il genere alla definizione.", pairs: [["Romanzo storico", "ambientato nel passato, con fatti storici"], ["Biografia", "la vita di una persona reale"], ["Racconto d’avventura", "viaggi, pericoli, situazioni emozionanti"], ["Poesia", "versi e linguaggio ricco di immagini"]] },
        { t: "fill", q: "La letteratura italiana", s: "La ___ è un racconto breve, spesso con una conclusione sorprendente. Giovanni Boccaccio è uno degli autori più famosi di questo genere.", a: ["novella"], bank: ["novella", "poesia", "commedia", "giallo"] },
        { t: "fill", q: "La letteratura italiana", s: "La ___ occupa un posto importante nella cultura italiana grazie ad autori come Dante Alighieri e Francesco Petrarca.", a: ["poesia"], bank: ["poesia", "novella", "giallo", "commedia"] },
        { t: "fill", q: "La letteratura italiana", s: "Il ___ unisce personaggi inventati ed eventi reali. Un esempio famoso è «I promessi sposi».", a: ["romanzo storico"], bank: ["romanzo storico", "giallo", "poesia", "commedia"] },
        { t: "fill", q: "La letteratura italiana", s: "Il ___ presenta un crimine o un mistero. Il nome viene dal colore delle copertine di una famosa collana di libri polizieschi.", a: ["giallo"], bank: ["giallo", "romanzo storico", "novella", "poesia"] },
        { t: "match", q: "Abbina l’opera al genere.", pairs: [["La Divina Commedia — Dante", "poema allegorico"], ["Il Decameron — Boccaccio", "raccolta di novelle"], ["I promessi sposi — Manzoni", "romanzo storico"], ["Le avventure di Pinocchio — Collodi", "letteratura per ragazzi"]] },
        { t: "match", q: "Abbina l’opera al genere.", pairs: [["Il fu Mattia Pascal — Pirandello", "romanzo psicologico"], ["Se questo è un uomo — Primo Levi", "testimonianza autobiografica"], ["Il nome della rosa — Umberto Eco", "giallo storico"], ["Sei personaggi in cerca d’autore", "opera teatrale"]] },
        { t: "listen", a: "Sarà il nostro piccolo club di lettura." }
      ]
    },
    {
      title: "B. Che ne pensi?", icon: "chat",
      ex: [
        { t: "read", title: "Roberto e Luis alla fiera del libro", text:
`Roberto: Luis, pensi che questa fiera del libro sia interessante?
Luis: Sì, credo che ci siano molti autori famosi e che il programma offra diversi incontri.
Roberto: Spero che Natalia e Carlotta vengano con noi. A loro piace molto leggere.
Luis: Anch’io spero che possano venire, ma temo che Carlotta debba lavorare.
Roberto: È possibile che finisca presto. Potremmo aspettarla all’ingresso.
Luis: Va bene. È importante che arriviamo prima dell’incontro con lo scrittore.
Roberto: Non credo che sia necessario arrivare troppo presto. Abbiamo già comprato i biglietti.
Luis: Sì, ma voglio che troviamo dei buoni posti. Penso che ci sia molta gente.
Roberto: Hai ragione. Preferisci che prendiamo l’autobus o che andiamo in macchina?
Luis: Preferisco che prendiamo l’autobus, così non dobbiamo cercare parcheggio.
Roberto: D’accordo. Spero che non piova, perché dobbiamo camminare un po’.
Luis: Non penso che faccia brutto tempo. Il cielo è sereno.
Roberto: Vorrei che Natalia mi consigliasse un buon romanzo romantico.
Luis: E io vorrei che Carlotta mi aiutasse a scegliere un libro di fantascienza.
Roberto: L’importante è che ognuno trovi qualcosa che gli piaccia.
Luis: Esatto. E spero che dopo la fiera possiamo andare tutti insieme a bere un caffè.` },
        { t: "tf", s: "Roberto e Luis parlano di una fiera del libro.", a: true },
        { t: "tf", s: "Carlotta è sicuramente libera e può andare con loro.", a: false, why: "Luis teme che Carlotta debba lavorare." },
        { t: "tf", s: "Luis preferisce andare alla fiera in autobus.", a: true },
        { t: "tf", s: "Roberto vuole comprare un libro di fantascienza.", a: false, why: "Roberto vorrebbe un buon romanzo romantico." },
        { t: "tf", s: "Dopo la fiera, vorrebbero bere un caffè insieme.", a: true },
        { t: "fill", s: "È possibile che Roberto ___ un nuovo romanzo. (comprare)", a: ["compri"] },
        { t: "fill", s: "Voglio che tu mi ___ la tua opinione. (dire)", a: ["dica"] },
        { t: "fill", s: "Non credo che questo libro ___ noioso. (essere)", a: ["sia"] },
        { t: "fill", s: "Preferisco che noi ___ insieme. (leggere)", a: ["leggiamo"] },
        { t: "fill", s: "Spero che Luis ___ una storia interessante. (scegliere)", a: ["scelga"] },
        { t: "fill", s: "È importante che tutti ___ alla discussione. (partecipare)", a: ["partecipino"] },
        { t: "fill", s: "Credo che Natalia ___ ogni sera prima di dormire. (leggere)", a: ["legga"] },
        { t: "fill", s: "Non penso che Roberto ___ questo autore. (conoscere)", a: ["conosca"] },
        { t: "fill", s: "Credete che gli studenti ___ il testo senza difficoltà? (capire)", a: ["capiscano"] },
        { t: "fill", s: "Penso che questi racconti ___ adatti al livello B1. (essere)", a: ["siano"] },
        { t: "order", a: "Spero che non piova domani.", d: ["piove"] }
      ]
    },
    {
      title: "C. Spero che…", icon: "chat",
      ex: [
        { t: "read", title: "Il libro o il film?", text:
`Natalia: Hai visto il film tratto dal romanzo che abbiamo letto?
Carlotta: Sì, ieri sera. Penso che il film sia molto bello, soprattutto per le immagini e la musica.
Natalia: A me è piaciuto, ma credo che il libro sia più interessante. Nel romanzo conosciamo meglio i pensieri dei personaggi.
Carlotta: È vero, però mi sembra che il film renda la storia più emozionante.
Natalia: Non credo che tutti siano d’accordo con te! Alcune scene importanti non ci sono.
Carlotta: Forse, ma è possibile che il regista voglia rendere la storia più semplice.
Natalia: Spero che un giorno facciano una nuova versione più fedele al libro.
Carlotta: Io invece spero che mantengano la stessa atmosfera. Mi è piaciuta moltissimo.
Natalia: In ogni caso, penso che valga sempre la pena leggere il libro prima di vedere il film.
Carlotta: Su questo sono d’accordo. E credo che confrontare le due versioni sia ancora più interessante!` },
        { t: "tf", s: "Carlotta pensa che il film sia molto bello.", a: true },
        { t: "tf", s: "Natalia preferisce il film al libro.", a: false },
        { t: "tf", s: "Carlotta pensa che il regista voglia complicare la storia.", a: false, why: "Pensa che voglia renderla più semplice." },
        { t: "tf", s: "Natalia spera che facciano una nuova versione del film.", a: true },
        { t: "fill", s: "Mi sembra che il film ___ la storia più emozionante. (rendere)", a: ["renda"] },
        { t: "fill", s: "È possibile che il regista ___ semplificare la storia. (volere)", a: ["voglia"] },
        { t: "fill", s: "Spero che un giorno ___ una nuova versione. (fare)", a: ["facciano"] },
        { t: "mc", q: "Scegli la forma corretta.", s: "Credo che questo libro ___ interessante.", o: ["sia", "è"], a: 0, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Spero che Carlotta ___ domani.", o: ["viene", "venga"], a: 1, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Non penso che Luis ___ tempo.", o: ["ha", "abbia"], a: 1, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "È importante che voi ___ a lezione ogni giorno.", o: ["venite", "veniate"], a: 1, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "Voglio che Roberto ___ attenzione.", o: ["fa", "faccia"], a: 1, fixed: true },
        { t: "mc", q: "Scegli la forma corretta.", s: "È possibile che loro ___ questa sera.", o: ["partono", "partano"], a: 1, fixed: true },
        { t: "type", q: "Trasforma con «Penso che…».", s: "Natalia legge molto.", a: ["Penso che Natalia legga molto."] },
        { t: "type", q: "Trasforma con «È possibile che…».", s: "Roberto è stanco.", a: ["È possibile che Roberto sia stanco."] },
        { t: "type", q: "Trasforma con «Spero che…».", s: "Carlotta viene con noi.", a: ["Spero che Carlotta venga con noi."] },
        { t: "type", q: "Trasforma con «È importante che…».", s: "Gli studenti capiscono la spiegazione.", a: ["È importante che gli studenti capiscano la spiegazione."] },
        { t: "listen", a: "Penso che valga sempre la pena leggere il libro." }
      ]
    },
    {
      title: "D. Grammatica", icon: "pen",
      ex: [
        { t: "read", title: "Il congiuntivo presente", text:
`Il congiuntivo presente si usa soprattutto dopo espressioni che indicano opinione, dubbio, desiderio, speranza, possibilità, necessità o emozione.
Penso che il libro sia interessante. Spero che Carlotta venga con noi. È possibile che Roberto abbia ragione. Voglio che tu mi dica la verità.
Verbi regolari: parlare → che io parli, che noi parliamo, che voi parliate, che loro parlino. Leggere → legga, leggiamo, leggiate, leggano. Capire → capisca, capiamo, capiate, capiscano.
Verbi frequenti: andare → vada, venire → venga, dire → dica, dare → dia, stare → stia, sapere → sappia, potere → possa, volere → voglia, dovere → debba.
Pensare che e credere che, quando esprimono un’opinione personale o non certa, sono seguiti dal congiuntivo: Penso che il film sia migliore.` },
        { t: "match", q: "Abbina l’infinito al congiuntivo presente.", pairs: [["andare", "vada"], ["venire", "venga"], ["dire", "dica"], ["dare", "dia"], ["stare", "stia"]] },
        { t: "match", q: "Abbina l’infinito al congiuntivo presente.", pairs: [["sapere", "sappia"], ["potere", "possa"], ["volere", "voglia"], ["dovere", "debba"], ["fare", "faccia"]] },
        { t: "match", q: "Abbina: che… + essere", pairs: [["che io", "sia"], ["che noi", "siamo"], ["che voi", "siate"], ["che loro", "siano"]] },
        { t: "fill", s: "Penso che questo libro ___ interessante. (essere)", a: ["sia"] },
        { t: "fill", s: "Credo che Natalia ___ molto. (leggere)", a: ["legga"] },
        { t: "fill", s: "Spero che voi ___ domani. (venire)", a: ["veniate"] },
        { t: "fill", s: "Non penso che Luis ___ tempo. (avere)", a: ["abbia"] },
        { t: "fill", s: "È possibile che Roberto ___ ragione. (avere)", a: ["abbia"] },
        { t: "fill", s: "Voglio che tu mi ___ la tua opinione. (dire)", a: ["dica"] },
        { t: "fill", s: "È importante che noi ___ insieme. (lavorare)", a: ["lavoriamo"] },
        { t: "mc", q: "Quale espressione NON vuole il congiuntivo?", o: ["So che…", "Penso che…", "Spero che…", "È possibile che…"], a: 0, why: "«Sapere» esprime una certezza: So che Luis ha tempo." },
        { t: "order", a: "Non credo che Luis abbia tempo.", d: ["ha"] },
        { t: "listen", a: "È importante che voi partecipiate." }
      ]
    },
    {
      title: "E. La Galleria degli Uffizi", icon: "column",
      ex: [
        { t: "read", title: "La Galleria degli Uffizi", sub: "Cultura italiana", text:
`La Galleria degli Uffizi è uno dei musei più famosi d’Italia e si trova nel centro di Firenze, vicino al fiume Arno e a Piazza della Signoria.
L’edificio fu progettato nel XVI secolo da Giorgio Vasari per volere di Cosimo I de’ Medici. In origine non era un museo: doveva ospitare gli uffici amministrativi della città. Da qui deriva il nome “Uffizi”, cioè “uffici”.
Con il tempo, la famiglia Medici iniziò a conservare nel palazzo dipinti, sculture e altri oggetti d’arte. La collezione diventò sempre più importante e, nel XVIII secolo, gli Uffizi furono aperti al pubblico.
Oggi il museo ospita opere fondamentali del Rinascimento italiano. Tra gli artisti più famosi troviamo Botticelli, Leonardo da Vinci, Michelangelo, Raffaello, Tiziano e Caravaggio.
Una delle opere più conosciute è La nascita di Venere di Sandro Botticelli. Il dipinto rappresenta la dea Venere che arriva sulla riva del mare sopra una grande conchiglia. Un’altra opera celebre di Botticelli è La Primavera, ricca di personaggi mitologici e simboli.
Visitare gli Uffizi significa fare un viaggio attraverso secoli di arte e cultura italiana. Per chi ama l’arte, gli Uffizi sono una tappa quasi obbligatoria durante un viaggio in Toscana.` },
        { t: "mc", q: "Dove si trova la Galleria degli Uffizi?", o: ["Nel centro di Firenze, vicino all’Arno", "A Roma, vicino al Colosseo", "A Venezia, sul Canal Grande", "A Milano, vicino al Duomo"], a: 0 },
        { t: "mc", q: "Chi progettò l’edificio?", o: ["Giorgio Vasari", "Michelangelo", "Leonardo da Vinci", "Sandro Botticelli"], a: 0 },
        { t: "mc", q: "Da dove deriva il nome «Uffizi»?", o: ["Da «uffici»: in origine ospitava gli uffici della città.", "Dal nome di un pittore.", "Da una famiglia nobile di Firenze.", "Da una parola latina che significa «arte»."], a: 0 },
        { t: "tf", s: "Gli Uffizi furono aperti al pubblico nel XVIII secolo.", a: true },
        { t: "tf", s: "La nascita di Venere è un’opera di Caravaggio.", a: false, why: "È di Sandro Botticelli." },
        { t: "mc", q: "Che cosa rappresenta La nascita di Venere?", o: ["La dea Venere che arriva sulla riva del mare su una conchiglia", "Una battaglia medievale", "Il ritratto di Cosimo de’ Medici", "Una festa in primavera"], a: 0 },
        { t: "match", q: "Abbina.", pairs: [["Cosimo I de’ Medici", "volle l’edificio"], ["Giorgio Vasari", "progettò l’edificio"], ["Botticelli", "La nascita di Venere e La Primavera"], ["il XVIII secolo", "apertura al pubblico"]] },
        { t: "mc", q: "Completa con il congiuntivo.", s: "Penso che gli Uffizi ___ una tappa obbligatoria per chi ama l’arte.", o: ["siano", "sono stati", "fossero", "saranno"], a: 0 },
        { t: "order", a: "Spero che tu possa visitare gli Uffizi." }
      ]
    }
  ]
});
