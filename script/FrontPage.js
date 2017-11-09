/*
Filnavn: FrontPage.js
Skrevet av: Einar Viddal
Når: Oktober 2017
Mening: Fylle frontsiden med linker til artikler
*/

var div = document.getElementById('articleDiv'); //Henter div alle artiklene skal ligge i.
var sections = document.getElementsByClassName('contentSection'); //Henter alle seksjonene (gruppen artikler på samme linje), denne starter tom.

for (var a=0; a<artikler.length; a++){ //For løkke som lager seksjonene og legger artikler inn i de.
    var newSection = document.createElement("section");
    newSection.classList.add("contentSection");
    div.innerHTML += newSection.outerHTML;

    for (var b=0; b<artikler[a].length; b++){ //For løkke som legger artikler inn i seksjonene.
        var newDiv = document.createElement("div"); //Lager div som inneholder en enkelt artikkel.
        newDiv.classList.add("contentDiv");
        newDiv.classList.add("items_" + artikler[a].length);

        var newA = document.createElement("a"); //Lager en a som ligger i diven og inneholder bilde og tittel.
        newA.href = artikler[a][b].fil;

        var newImg = document.createElement("img"); //Legger inn bilde til artikkelen.
        newImg.src = "bilder/"+ artikler[a][b].bilde;
        newImg.alt = "artikkelbilde";

        newA.appendChild(newImg);
        //newA.appendChild(newHeadline);
        newA.innerHTML += "<div class='overskrift'>" + artikler[a][b].tittel + "</div>";
        newDiv.appendChild(newA);

        sections[a].innerHTML += newDiv.outerHTML;
    }
}
