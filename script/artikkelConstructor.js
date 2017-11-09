/*
Filnavn: artikkelConstructor.js
Skrevet av: Eirik Leikvoll, Lars Martin Hodne
Når: November 2017
Mening: Lage artikler fra maler gitt i datamaler mappene og legge tidde ut på artikkel siden. Forsikrer modularitet.
*/

//henter hovedbilde diven
var bildeVindu = document.getElementById("bildeVindu");

//legger inn overskrift(alle verdier ligger i et eget js document for hver artikkel)
var artikkelHeading = document.createElement("h1");
artikkelHeading.innerText = mainPhoto.heading;
bildeVindu.appendChild(artikkelHeading);

//setter inn hovedbilde
var artikkelBilde = document.createElement("img");
artikkelBilde.className = "bilde";
artikkelBilde.src = mainPhoto.source;
artikkelBilde.alt = mainPhoto.alter;
bildeVindu.appendChild(artikkelBilde);

//henter infoboks
var infoBoks = document.getElementById("info");

//setter inn dato fra det andre js-dokumentet
var dato = document.createElement("p");
var datoBold = document.createElement("strong");
datoBold.innerText = "Dato: ";
dato.innerHTML = datoBold.outerHTML + details.dato;
infoBoks.appendChild(dato);
//setter inn forfatter og understrek
var forfatter = document.createElement("p");
var forfatterBold = document.createElement("strong");
forfatterBold.innerText = "Forfatter: ";
forfatter.innerHTML = forfatterBold.outerHTML + details.forfatter;
infoBoks.appendChild(forfatter);

var understrek = document.createElement("hr");
infoBoks.appendChild(understrek);

//henter artikkel og begynner å konstruere denne
var artikkel = document.getElementById("artikkel");
//kjører for lengden til arrayen i det andre js-dokumentet
for (var i=0;i<artikkelContent.length;i++) {
    //dobbeldiv er en slags jukse-versjon av en tabell, valgte denne versjonen siden tabeller er stygge
    //og tungvinte å style
    if (artikkelContent[i].type === "dobbelDiv") {
        //lager venstre og høyre side
       var venstre = document.createElement("div");
       venstre.className = "dobbelDiv";
       var hoyre = document.createElement("div");
       hoyre.className = "dobbelDiv";

       //setter inn tekst
       hoyre.innerHTML = artikkelContent[i].hoyre;
       venstre.innerHTML = artikkelContent[i].venstre;

       var container = document.createElement("div");
       container.className = "dobbelContainer";
       //henter heading
       var dobbelHeading = document.createElement("h4");
       dobbelHeading.innerText = artikkelContent[i].heading;

       //setter alt inn i en containerdiv
       artikkel.appendChild(dobbelHeading);
       container.appendChild(venstre);
       container.appendChild(hoyre);
       artikkel.appendChild(container);
    }
    else {
        //ellers lages et element av typen spesifisert i arrayen
        var element = document.createElement(artikkelContent[i].type);
        //for p eller blockquote kjøres det følgende
        if (artikkelContent[i].type === "p" || artikkelContent[i].type === "blockquote") {
            element.innerHTML = artikkelContent[i].content;
            artikkel.appendChild(element);
        }
        //bilder og linker
        else if (artikkelContent[i].type === "a" || artikkelContent[i].type === "img") {
            element.src = artikkelContent[i].source;
            element.alter = artikkelContent[i].source;
            artikkel.appendChild(element);
        }
    }
}

var shareLinkFacebook = document.createElement("a");
var shareLinkTwitter = document.createElement("a");
shareLinkFacebook.innerHTML = "Del på facebook!";
shareLinkTwitter.innerHTML = "Del på twitter!";
shareLinkFacebook.className = "shareLinkFacebook";
shareLinkTwitter.className = "shareLinkTwitter";
shareLinkFacebook.href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
shareLinkTwitter.href = "https://twitter.com/share?url=" + window.location.href;
shareLinkFacebook.target = "blank";
shareLinkTwitter.target = "blank";
artikkel.appendChild(shareLinkFacebook);
artikkel.appendChild(shareLinkTwitter);