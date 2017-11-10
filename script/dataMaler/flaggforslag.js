/*
Filnavn: flaggforslag.js
Skrevet av: Emil Strand
Når: November 2017
Mening: mal for flaggdrama artikkelen, gir info til artikkelConstructor.js.
*/
var mainPhoto = {source:artikler[1][0].bilde, alter:"artikkelbilde", heading:artikler[1][0].tittel};
var details = {dato:"09/11/17",forfatter:"Frederic"};
var artikkelContent = [
    {type:"p",content:"Her er begrunnelsen for farger og proporsjoner til det foreslåtte designet.\n"},
    {type:"img",source:"bilder/NTNUI-flaggforslag.png", alter:"Foreslått design"},
    {type:"p",content:"<i>Fargetonene</i> er hentet fra den logoen som er å finne på NTNUIs hjemmesider:"},
    {type:"p",content:"<ul><li>Grønn: RGB #008000</li><li>Gul: RGB #ffff00</li><li>Svart: RGB #000000</li></ul>"},
    {type:"p",content:"Tonen til grønnfargen har variert avhengig av plaggleverandør, stofftype eller maling. " +
    "Skal man bestille ordentlige og sydde flagg er det kun fåtall tilgjengelige fargetoner uansett, så ordentlige " +
    "flagg vil vike noe fra forslaget over. Under følger et nyansespekter av grønnalternativer og hvordan " +
    "de ser ut i flagget:\n"},
    {type: "img", source: "bilder/NTNUItabell.png"},
    /*{type: "table", content:
    "<tr>" +
    "    <th>#00<strong>40</strong>00</th>" +
    "    <th>#00<strong>50</strong>00</th>" +
    "    <th>#00<strong>60</strong>00</th>" +
    "    <th>#00<strong>70</strong>00</th>" +
    "</tr>" +
    "<tr>" +
    "    <th></th>" +
    "    <th></th>" +
    "    <th></th>" +
    "    <th></th>" +
    "</tr>" +
    "<tr>" +
    "    <th>#00<strong>80</strong>00</th>" +
    "    <th>#00<strong>90</strong>00</th>" +
    "    <th>#00<strong>a0</strong>00</th>" +
    "    <th>#00<strong>b0</strong>00</th>" +
    "</tr>" +
    "<tr>" +
    "    <th></th>" +
    "    <th></th>" +
    "    <th></th>" +
    "    <th></th>" +
    "</tr>"
    },*/
    {type:"p",content:"De relative stripetykkelsene er 2:1:1:1:2 (grønn:gul:svart:gul:svart) mens selve " +
    "flaggproporsjonene er satt til 7:10 (høyde:bredde). \n" +
    "Utgangspunktet for stripetykkelsene er at på de fleste NTNUI-drakter jeg har sett ser den svarte stripen omtrent " +
    "like tykk ut som de gule, kanskje er den litt tykkere. De grønne stripene på topp og bunn er satt til å være " +
    "dobbelt så tykke som hver av de gule og svarte for at det grønne som hovedfarge skal feste seg. Nøyaktig dobbelt " +
    "så tykt grønt som gult eller svart er valgt for at proporsjonene skal være lette å anvende for å lage flagg ut av " +
    "fargede gjenstander i samme størrelse: Du kan strø en kake med Non Stop à 2+2 rader grønne, 1+1 rad gule og 1 rad " +
    "svarte eller publisere et innlegg på sosiale med 2+2 grønne, 1+1 gule og 1 svart hjerte.\n"},
    {type: "img", source:"bilder/fbpost.png", alter: "Facebook post"},
    {type: "p", content:"Flaggproporsjonene 7:10 er valgt fordi flagg pleier å være rektangulære og at det skal " +
    "være lett å regne på det om man skal lage det for hånd. Om flagget blir litt lenger eller litt kortere er ganske " +
    "uvesentlig, men huskeregelen om å gange stripelengde med fem for gult og svart eller ti for grønt er et bra " +
    "utgangspunkt for å få noe som ligner på et ordentlig flagg.\n"}
];
