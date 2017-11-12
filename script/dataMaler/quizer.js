/*
Filnavn: quizer.js
Skrevet av: Einar Viddal
Når: November 2017
Mening: Beskrive innholdet i quizene på quiz siden, dvs spørsmålene, svaralternativene, bildene og de riktige svarene.
Gjøre det lett å legge til ekstra spørsmål, man trenger kun å legge til informasjonen i arrayene,
 og quizen tilpasser seg automatisk. For å legge til en helt ny quiz må man også legge til en "quizValgBoks" i HTMLen
 i tilegg til nye svar, spørsmål osv nedenfor
*/

let quizer = [ //Lager en array som inneholder vær quiz som et objekt.
  {//Spørsmålene, svarealternativene, bildene og de riktige svarene til quizen blir lagret som hver sin array.
      //Et spørsmål i quizen bruker en indeks for å hente informasjon fra alle arrayene

    navn:"Hvor godt kjenner du disse flaggene?", //Navnet på quizen
    sporsmaal:[
      "Hvilket stjernebilde representerer de 5 stjernene i den høyre delen av Australias flagg?",
      "Hva representerer stripene i Hellas flagg?",
      "Nepals flagg er unikt fordi..",
      "Hva er opprinnelsen til korset i Sveits flagg?",
      "Qatars flagg er unikt fordi.."
    ],
    svar:[
      ["Sørkorset","Delfinen", "Alteret","Paradisfuglen"],
      ["De 5 viktige importvarene i Hellas: mat, petroleum, stål, olivenolje og tobakk", "De 9 største byene i Hellas.", "De 5 fem samfunnsklassene i Athen på den tiden Solon oppfant demokratiet.", 'De 9 stavelsene i en gresk læresetning "frihet eller døden".'],
      ["Det er det eneste nasjonalflagget som ikke er firkantet", "Det er har mer enn ett symbol i seg", "Det tar i bruk det gylne snitt", "Det tar i bruk det omvendte gylne snitt"],
      ["Det kristne korset", "Et kampflagg for sveitsiske forsvarstyrker", "Det røde korset, et av Røde Kors sine symboler", "Ordenen Riddere av det hvite kors"],
      ["Der det eneste flagget med 2 farger", "Det har det høyeste forholdet mellom sidene, av alle nasjonalflagg", "Det skal henges opp med begge endene festet til flaggstangen", "Man fester undersiden til flaggstangen"]
    ],
    bilder:[
      "bilder/Flagg/Australia.png",
      "bilder/Flagg/Hellas.png",
      "bilder/Flagg/Nepal.png",
      "bilder/Flagg/Sveits.png",
      "bilder/Flagg/Qatar.png"
    ],
    riktigeSvar:[0,3,0,1,1]
  },
  {
    navn:"Gjett på europeiske flagg",
    sporsmaal:[
      "Hvilket land har dette flagget?",
      "Hvilket land har dette flagget?",
      "Hvilket land har dette flagget?",
      "Hvilket land har dette flagget?"
    ],
    svar:[
      ["Norge", "Danmark", "Sveits", "Nederland"],
      ["Polen", "Estland", "Østerrike", "Ungarn"],
      ["Hellas", "Italia", "Albania", "Montenegro"],
      ["Bulgaria", "Romania", "Andorra", "Moldova"]
    ],
    bilder:[
      "bilder/Flagg/Danmark.png",
      "bilder/Flagg/Estland.png",
      "bilder/Flagg/Hellas.png",
      "bilder/Flagg/ad.png"
    ],
    riktigeSvar:[1,1,0,2]
  }
];
