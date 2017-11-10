/*
Filnavn: ntnui.js
Skrevet av:Lars Martin Hodne
Når: November 2017
Mening: mal for ntnui artikkelen, gir info til artikkelConstructor.js.
*/

var mainPhoto = {source:artikler[0][0].bilde, alter:"artikkelbilde", heading:artikler[0][0].tittel};
var details = {dato:"08/11/17",forfatter:"Frédéric Ménard Lindboe"};
var artikkelContent = [
    {type:"p",content:"\n" +
    "Jeg heter Frédéric, spiller volleyball for NTNUI og elsker flagg. Det siste ble jeg av å ha sett " +
    "<a href='https://youtu.be/pnv5iKB2hl4' alt='Roman-Mars-snakker-om-flagg' target='_blank'>denne</a> TED-talken. Den er, helt oppriktig," +
    " noe av det mest inspirerende jeg noensinne har sett. Jeg anbefaler deg å faktisk se hele videoen før du leser dette innlegget videre." +
    " Jeg kommer nemlig til å ta utgangspunkt i sitater derfra for å strukturere argumentene om <strong>hvorfor jeg mener NTNUI få et nytt flagg.</strong>"},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=1m22s' alt='video' target='_blank'>1:22</a><br>\n" +
    "Sometimes I bring up the topic of flags, and people are like, \"I don't care about flags,\" and then we start talking about flags, and trust me, " +
    "100 percent of people care about flags. There's just something about them that works on our emotions."},
    {type:"img",source:"bilder/artikkelBilde1.png",alter:"Karl Johann"},
    {type:"p",content:"Dette bildet vekker nok noen følelser i deg. Det norske flagget assosieres både med lykkelige stunder og folkefester."},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=2m02s' alt='video' target='_blank'>2:02</a><br>\n" +
    "What I love about flags is that once you understand the design of flags," +
    " what makes a good flag, what makes a bad flag, you can understand the design of almost anything."},
    {type:"p",content:"Veldesignede flagg er enkle og distinkte: Når du først har lært at blåhvitt kors på" +
    " rød bunn representerer Norge så vil du aldri glemme det, og du ville gjenkjent et vaiende norsk flagg hundrevis av meter unna."},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=5m09s' alt='video' target='_blank'>5:09</a><br>\n" +
    "It's adaptable and remixable."},
    {type:"img",source:"bilder/artikkelBilde2.png",alter:"Marit politibil"},
    {type:"p",content:"Gode flagg er anvendelige. Som vist over kan det norske flaggets fargemønster brukes på " +
    "mange ulike måter. Det blåhvite korset på den røde skidressens arm og de røde og blå stripene langs de " +
    "gamle politibilene skaper entydige og unektelige assosiasjoner til Norge."},
    {type:"img",source:"bilder/artikkelBilde3.png",alter:"Grupper og flagg"},
    {type:"p",content:"Det er ikke bare nasjoner som bruker farger for å vise tilhørighet. Idrettsklubber gjør det" +
    " også. NTNUI er en klubb med et helt unik fargemønster. Se på bildene over eller søk etter " +
    "<a href='https://goo.gl/3prdYO' alt='google-søk' target='_blank'>NTNUI-bilder på Google!</a> " +
    "Hvilket mønster har de til felles? En grønn bunn delt av to gule og én svart stripe. Alle NTNUI-utøvere bruker dette " +
    "fargemønsteret i en eller annen form. Det bare oser NTNUI på lang avstand!"},
    {type:"p",content:"Da Andreas Wahl var konferansier under NTNU-immatrikuleringen i " +
    "august 2016 sa han noe ganske interessant etter NTNUI Dans sin fremføring " +
    "(<a href='https://livestream.com/accounts/12996210/events/6114363/player?width=640&height=360&autoPlay=false&mute=false' alt='video' target='_blank'>se video</a> 1:16:40-1:17:20)"},
    {type:"blockquote",content:"Kanskje noen av dere tenker som jeg da jeg flytta hit. De grønngule NTNUI-fargene er " +
    "kanskje ikke... the shit. Men jeg kan love dere noe, og dette er veldig rart: Fra jeg gikk ut herfra, hver gang" +
    " jeg ser NTNUI-drakter, og jeg ser det ganske ofte over hele landet, blir jeg ordentlig varm og glad langt inni " +
    "hjerterota for at de kommer fra Trondheim, samme sted som meg. Dere kommer til å bli glad i de fargene, det kan " +
    "jeg love dere!"},
    {type:"p",content:"Denne tilhørigheten som Andreas Wahl har fått til NTNUI og Trondheim fra NTNUI-fargene er " +
    "akkurat slike følelser man vil vekke med flagg. Man skulle dermed trodd at et NTNUI-flagg brukte nettopp " +
    "disse fargemøsntrene. Dessverre, synes jeg, ser NTNUI-flagget i dag slik ut:"},
    {type:"img",source:"bilder/artikkelBilde4.png",alter:"NTNUI's flagg"},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=7m27s' alt='video' target='_blank'>7:27</a><br>\n" +
    "If you need to write the name of what you're representing on your flag, your symbolism has failed."},
    {type:"p",content:"Dagens NTNUI-flagg er en NTNUI-logo på grønn bunn. Det assosiasjonssterke fargemotivet kommer " +
    "ikke særlig tydelig frem. Andreas Wahl referer til 'NTNUI-fargene', ikke til NTNUI-logoen. Flagg blir gode idet " +
    "man tilegner dets motiv en betydning. Men når NTNUI står skrevet eksplisitt " +
    "på flagget så blir motiv og hva flagget skal representere én og samme ting. Da er betydningstilegnelsesprosessen " +
    "gjort for deg allerede. Derfor synes jeg at dagens NTNUI-flagg ikke symboliserer NTNUI godt nok. Tenk deg om Norges " +
    "flagg hadde vært designet på samme måte."},
    {type:"img",source:"bilder/artikkelBilde5.png",alter:"Norge's nye flagg"},
    {type:"p",content:"Jeg har ingen tro på at Norge hadde hatt samme flaggtradisjoner under 17. mai " +
    "eller skiidrettsarrangementer dersom flagget hadde sett slikt ut."},
    {type:"p",content:"Jeg mener altså at flagget til NTNUI bør spille på abstrakte, men assosiasjonssterke fargemøsntre. " +
    "Det trenger altså noe som skriker NTNUI uten å si det eksplisitt. Med det som utgangspunkt blir " +
    "hvordan et NTNUI-flagg bør se ut, for meg, ganske åpenbart og det håper jeg du som leser nå er blitt enig i:"},
    {type:"img",source:"bilder/artikkelBilde6.png",alter:"NTNUI's nye flagg"},
    {type:"p",content:"Ingenting skaper sterkere assiosiasjoner til NTNUI bedre enn de karakteristiske to gule og " +
    "den ene svarte stripen på den grønne bunnen. NTNUI-flagget bør være intet mer, intet mindre. Tykkelsen til " +
    "stripene i forhold til hverandre kan diskuteres, fargenyansene kan justeres, men hvordan kjernemotivet bør være er" +
    " for meg krystallklart!"},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=17m11s' alt='video' target='_blank'>17:11</a><br>\n" +
    "[...] a great city flag is something that represents a city to its people and its people to the world at " +
    "large. And when that flag is a beautiful thing, that connection is a beautiful thing."},
    {type:"p",content:"Bytter du ut “city” med “club” og “world” med “Norway” kan du relatere det til hva Andreas " +
    "Wahl mente med å bli “varm i hjerterota” når han ser NTNUI-fargene rundt omkring i landet."},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=15m37s' alt='video' target='_blank'>15:37</a><br>\n" +
    "[...] it isn't just that people love Chicago and therefore love the flag. I also" +
    " think that people love Chicago more because the flag is so cool. "},
    {type:"p",content:"Igjen, bytt ut “Chicago” med “NTNUI”."},
    {type:"blockquote",content:"<a href='https://youtu.be/pnv5iKB2hl4?t=17m11s' alt='video' target='_blank'>17:11</a><br>\n" +
    "The five basic principles of flag design:"},
    {type:"p",content:"La oss nå sammenligne NTNUI-flaggene med hensyn på disse " +
    "<a href='http://www.ausflag.com.au/assets/images/Good-Flag-Bad-Flag.pdf' alt='flaggregler' target='_blank'>flaggdesignprinsippene:</a>"},
    {type:"dobbelDiv",heading:"",venstre:"<img src='bilder/artikkelBilde7.png' alt='NTNUI'>", hoyre:"<img src='bilder/artikkelBilde8.png' alt='NTNUI'>"},
    {type:"dobbelDiv",heading:"1. Keep it simple (so simple a child can draw it from memory)",
        venstre:"NTNUI-logoen " +
        "er faktisk ganske simplistisk og flagget er dermed ingen versting blant idrettsklubber. " +
        "Dog er logoer vanskelige å anvende annet enn i sin hele form.",
        hoyre:"Mønsteret i dette flagget er redusert til sine kjernekomponenter og kan " +
        "dermed ikke bli enklere. Anvendeligheten til mønsteret i flagget er skyhøyt, " +
        "slik som illustrert i bildeserien lenger oppe."},
    {type:"dobbelDiv",heading:"2. Use meaningful symbolism",
        venstre:"NTNUI-logoen symboliserer sammenslåingen av NTHI (grønt, gult og svart) og AVHI (rødt). " +
        "Den historiske symbolikken er ganske god. Likevel anerkjenner logoflagget grønt som klubbens hovedfarge " +
        "ved å bruke grønt i bunn.",
        hoyre:"Dette flagget inkluderer ikke det AVHI-røde, kun de opprinnelige NTHI-fargene. Det er synd. Men det " +
        "røde er i dag nesten ikke anvendt i NTNUIs fargeprofil og (hjemme)drakter så jeg tør påstå at veldig få " +
        "mennesker vil reagere på at det røde ikke er i dette flagget. Slik jeg ser det har det grønne og" +
        " gulsvarte blitt omfavnet i dag av alle NTNUIs medlemmer uavhengig av campus og dermed " +
        "representerer disse tre fargene nå alle. Akkurat hva dette fargemønsteret symboliserer er det få som vet " +
        "(ikke jeg), men når stripemønsterets assosiasjonsverdi til NTNUI er så sterk allerede så synes jeg det holder " +
        "i massevis for å lage et bra flagg."},
    {type:"dobbelDiv",heading:"3. Use two to three basic colors",
        venstre:"Denne regelen er kanskje den mest ignorerte blant flotte flagg. " +
        "Jeg synes ikke det er noe i veien med å bruke flere farger så sant fargene har en " +
        "relevant betydning, kontrasten i flagget er god og det fungerer for flaggets motiv. ",
        hoyre:"Dette flagget bruker de tre mest brukte NTNUI-fargene grønt, " +
        "gult og svart. Å introdusere et rødt element synes jeg vil forstyrre stripemotivet og" +
        " redusere den etablerte og råsterke assosiasjonen til NTNUI det allerede har.  "},
    {type:"dobbelDiv",heading:"4. No lettering or seals of any kind.",
        venstre:"<img src='bilder/artikkelBilde9.png' alt='flaggstang'><br> Skrift er dårlig egnet på flagg av to årsaker: " +
        "Det er lite slagkraftig bruk av assosiasjoner og det er vanskelig å lese på avstand og når flagget vaier speilvendt eller det ikke er vind. Klikk " +
        "<a href='https://krikienoid.github.io/flagwaver/#?src=http%3A%2F%2Fi.imgur.com%2Fl8sAgNf.png' alt='flaggside' target='_blank'>her</a> for å se" +
        "hvordan dette flagget ser ut vaiende med og uten vind.",
        hoyre:"<img src='bilder/artikkelBilde10.png' alt='flaggstang'><br> Siden dette designet er redusert til sitt enkleste" +
        " vil det være gjenkjennelig som NTNUI-flagg både med og uten vind vaiende rettvendt eller speilvendt! Klikk " +
        "<a href='https://krikienoid.github.io/flagwaver/#?src=http%3A%2F%2Fi.imgur.com%2FKGIJ0oo.png' alt='flaggside' target='_blank'>her</a> " +
        "for å se hvordan dette flagget ser ut vaiende med og uten vind. Jeg mener dette flagget hadde vært mye mer " +
        "effektfullt å bruke på flaggstanga til " +
        "<a href='http://www.strindahistorielag.no/wiki/images/thumb/Studenterhytta_i_2014.JPG/200px-Studenterhytta_i_2014.JPG' alt='flaggside' target='_blank'>Studenterhytta</a> " +
        "enn dagens flagg."},
    {type:"dobbelDiv",heading:"5. Be distinctive or be related",
        venstre:"Logoflagget flagget ligner på andre idrettsklubbflagg: " +
        "<a href='http://www.rbnett.no/incoming/article6615769.ece/BINARY/w980-adaptive/per%20h%C3%A5nde.JPG' alt='Molde' target='_blank'>Molde FK</a> og " +
        "<a href='https://nidarosfoto.smugmug.com/Sport/H%C3%A5ndball-Kvinner/By%C3%A5sen-Elite/Sesongen-2014-15/By%C3%A5sen-vs-Storhamar-H%C3%A5ndball-2/i-Gkfxr6C' " +
        "alt='Håndballside' target='_blank'>Byåsen Håndball</a> har alle " +
        "klubblogoen i flagget på ensfarget bakgrunn. På samme måte viser Norge tilhørighet til Norden ved å bruke" +
        " det usentrerte nordiske korset i flagget sitt. Man kan dermed argumentere for at logoflagget viser at også NTNUI " +
        "er en idrettsklubb. Jeg personlig ville sagt at det også føyer seg i rekken for under middels godt designede flagg.",
        hoyre:"NTNUIs unike fargemønster gjøre naturlig nok dette flagget også unikt. En kan si at stripene og " +
        "fargepaletten gjør at flagget minner om en eller annen afrikansk “demokratisk” republikk og dermed " +
        "skaper feil asosiasjoner og viser feil tilhørighet. Faktisk så flagget til den kortlevde nasjonen " +
        "<a href='https://en.wikipedia.org/wiki/Tanganyika' alt='wiki' target='_blank'>Tanganyika</a> " +
        "nesten slik ut! Forskjellen i stripetykkelse, fargenyanse og ikke minst bruksområde (helt urelatert tidl. " +
        "nasjon vs. nåværende lokal idrettsklubb) gjør at denne potensielle forvekslingen nok ikke er noe å bry seg om:" +
        " Flagg trenger primært bli gjenkjent internt for å samle mennesker med felles tilhørighet. "},
    {type:"p",content:"Selvfølgelig finnes det mennesker utenfor student-Trondheim som ikke vil gjenkjenne stripeflagget " +
    "som NTNUI-flagg. Hvordan skal man vise overfor dem at man er fra NTNUI? Jo, stripeflagg som brukes på idrettsarrangement " +
    "vil ha NTNUI-utøvere tilstede. Disse utøverne har oftest på seg NTNUI-klær med samme fargemønster og med NTNUI tydelig " +
    "skrevet på ryggen eller i logoen på brystet. Ev. kan man fra før vite at de med grønne drakter og gulsvarte striper tilhører " +
    "NTNUI. Det vil derfor uansett fort bli veldig åpenbart hvilken klubb stripeflagget representerer og da vil assosiasjonen " +
    "mellom fargemønsteret på flagget og klubben NTNUI feste seg også hos eksterne idrettsutøvere. Jeg vil også si at flere " +
    "vil vaie stolt med stripeflagget enn med logoflagget. Dersom eksterne ser mange kledd i grønt, gult og svart som vaier " +
    "entusiastisk med stripeflagget vil de kanskje bli nysgjerrige og spørre noen “Unnskyld? Hvilket flagg er det? Jeg så det" +
    " på lang avstand!” og da vil de få svaret “Det er NTNUI, klubbflagget til alle disse idrettsutøverne som er kledd i de " +
    "samme fargene!”."},
    {type:"p",content:"For at eksterne skal kunne tolke logoflagget må de, med mindre det blåser sterkt, komme så nærme " +
    "flagget for å kunne lese “NTNUI” på bannere eller på noens klær i nærheten uansett."},
    {type:"p",content:"Avslutningsvis vil jeg dele noen bilder av et NTNUI-stripeflagg jeg har sydd selv og brukt på" +
    " volleyballarrangementer i hele høst. Jeg har også vist det for andre i student-Trondheim og spurt hvilket flagg" +
    " de tror det er: De fleste svarer NTNUI og blir overrasket når jeg forteller dem at NTNUI egentlig har et annet " +
    "flagg som ikke ser sånn ut. Jeg utfordrer deg til å prøve dette selv!"},
    {type:"img",source:"bilder/artikkelBilde11.png",alter:"Snap"},
    {type:"p",content:"Jeg kommer sannsynligvis til å fremme et forslag om å få anerkjent dette stripeflagget som " +
    "NTNUI-flagg ved NTNUI hovedstyrets generalforsamling i februar 2018. Dersom du er NTNUI-medlem og enig i dette innleggets " +
    "budskap håper jeg du vil stille opp for å stemme frem forslaget. NTNUI fortjener et flott flagg"},
    {type:"p",content:
    "Med håpefull hilsen<br>" +
    "Frédéric Ménard Lindboe,<br>" +
    "Flaggentusiast og volleyballspiller for NTNUI på sjette sesong"}
];
