/*
Filnavn: FrontPage.js
Skrevet av: Einar Viddal
Når: Oktober 2017
Mening: Fylle frontsiden med linker til artikler, gjøre det lett å legge til nye artikler
*/

//for å legge til nye artikler trenger man bare legge til link, tittel og bileplassering
//koden vil automatisk legge artikkelen til
let articlePage = document.getElementById('articleDiv'); //Henter div alle artiklene skal ligge i.

for (let a=0; a<artikler.length; a++){ //For løkke som lager seksjonene og legger artikler inn i de.
    let newSection = document.createElement("section");
    newSection.classList.add("contentSection");

    for (let b=0; b<artikler[a].length; b++){ //For løkke som legger artikler inn i seksjonene.
        let newDiv = document.createElement("div"); //Lager div som inneholder en enkelt artikkel.
        newDiv.classList.add("contentDiv");
        newDiv.classList.add("items_" + artikler[a].length);

        let newA = document.createElement("a"); //Lager en a som ligger i diven og inneholder bilde og tittel.
        newA.href = artikler[a][b].fil;

        let newImg = document.createElement("img"); //Legger inn bilde til artikkelen.
        newImg.src = "bilder/"+ artikler[a][b].bilde;
        newImg.alt = "artikkelbilde";

        let newHeading = document.createElement("div");//lager overskrift
        newHeading.className = "overskrift";
        newHeading.innerText = artikler[a][b].tittel;

        newA.appendChild(newImg);//setter inn overskrift og bilde
        newA.appendChild(newHeading);
        newDiv.appendChild(newA);

        newSection.appendChild(newDiv);//legger newDiv inn i sections[a]
    }
    articlePage.appendChild(newSection);
}
