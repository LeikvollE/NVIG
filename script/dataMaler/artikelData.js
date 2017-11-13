/*
Filnavn: artikelData.js
Skrevet av: Lars Martin Hodne, Einar Viddal
Når: November 2017
Mening: holder navn og link til artiklene på siden og filplassering til bildet for den korresponderende artikkelen.
gjør at man kan bytte bilde på forsiden og artiklene gjennom en fil,
og bytte oversskrift i header, forside og artikkel i samme fil.
Gjør det også lett å legge til flere artikler
*/


//for å legge til artikler legger man bare til enda en array i artikler arrayen og forsiden tilpasser seg automatisk.
//Man kan velge mellom en stor artikkel, 2 middels eller 3 små(nå er forsiden på et 1 3 2 format).
let artikler = [
    [
        {//1
            tittel:"Til alle med hjerte for NTNUI", //fikser tittelen til artikkelen på framsiden, i artikkelen, og i header
            bilde:"artikkelTopp.png",               //Bildet bildet til artikkelen,brukes også på framsiden
            fil:"til-alle-med-hjerte-i-ntnui.html"  //HTML-filen forsiden og header skal linke til
        }
    ],
    [
        {//3
            tittel:"Forslag til nytt NTNUI-flagg",
            bilde:"NTNUI-nytt-flagg.png",
            fil:"NTNUIflaggforslag.html"
        },
        {
            tittel:"Vexillologi - Studiet av flagg",
            bilde:"veksillologi.png",
            fil:"vexillologi.html"
        },
        {
            tittel:"Flaggspill",
            bilde:"spill.svg.png",
            fil:"spill.html"
        }
    ],
    [
        {//2
            tittel:"Flaggquiz",
            bilde:"flaggquiz.png",
            fil:"quiz.html"
        },
        {
            tittel:"Flaggfakta",
            bilde:"slange.jpg",
            fil:"bildeGalleri.html"
        }
    ]
];

let ekstraSider = [ //sider/linker som ikke vises på forsiden som artikkel ligger i ekstrasider
    {
        tittel:"Om oss",
        fil:"about.html"
    },
    {
        tittel:"Twitter",
        fil:"https://twitter.com/nvigntnu",
        target:"_blank"
    }
];