//Mening: Legger til artiklene på framsiden og legger inn bildet over den korresponderende artikkelen
/*
Filnavn: artikelData.js
Skrevet av: Lars Martin Hodne, Einar Viddal
Når: November 2017
Mening: Legger til artiklene på framsiden og legger inn bildet over den korresponderende artikkelen.
gjør at man kan bytte bilde på forsiden og artiklene gjennom en fil,
og bytte oversskrift i header, forside og artikkel i samme fil
*/

let artikler = [
    [
        {
            tittel:"Til alle med hjerte for NTNUI", //fikser tittelen til artikkelen på framsiden, i artikkelen, og i header
            bilde:"artikkelTopp.png",               //Legger bildet til artikkelen, og på framsiden
            fil:"til-alle-med-hjerte-i-ntnui.html"  //HTML-filen artikkelen skal linke til
        }
    ],
    [
        {
            tittel:"Forslag til nytt NTNUI-flagg",
            bilde:"artikkelBilde6.png",
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
        {
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

let ekstraSider = [ //sider som ikke vises på forsiden som artikkel ligger i ekstrasider
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