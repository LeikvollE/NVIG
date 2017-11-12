/*
Filnavn: artikkelConstructor.js
Skrevet av: Eirik Leikvoll, Lars Martin Hodne
Når: November 2017
Mening: Lage artikler fra maler gitt i datamaler mappene og legge disse ut på artikkel siden. Forsikrer modularitet.
*/

//henter hovedbilde diven
let bildeVindu = document.getElementById("bildeVindu");

//legger inn overskrift(alle verdier ligger i et eget js document for hver artikkel)
let artikkelHeading = document.createElement("h1");
artikkelHeading.innerText = mainPhoto.heading;
bildeVindu.appendChild(artikkelHeading);

//setter inn hovedbilde
let artikkelBilde = document.createElement("img");
artikkelBilde.className = "bilde";
artikkelBilde.src = "bilder/" + mainPhoto.source;
artikkelBilde.alt = mainPhoto.alter;
bildeVindu.appendChild(artikkelBilde);

/*delingslinker for sosiale medier*/
let artikkel = document.getElementById("artikkel");
let shareLinkFacebook = document.createElement("a");
let shareLinkTwitter = document.createElement("a");
shareLinkFacebook.innerHTML = "Del på facebook!";
shareLinkTwitter.innerHTML = "Del på twitter!";
shareLinkFacebook.className = "shareLinkFacebook";
shareLinkTwitter.className = "shareLinkTwitter";
shareLinkFacebook.href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
shareLinkTwitter.href = "https://twitter.com/share?url=" + window.location.href;
shareLinkFacebook.target = "_blank";
shareLinkTwitter.target = "_blank";
artikkel.appendChild(shareLinkFacebook);
artikkel.appendChild(shareLinkTwitter);