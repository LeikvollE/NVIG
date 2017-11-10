/*
Filnavn: footerJS.js
Skrevet av: Lars Martin Hodne
Når: November 2017
Mening: Legge til footer på på alle sider.
*/

//henter footer fra html fokumentet
let footer = document.getElementById("footer");

//lager de ulike elementene i footeren og setter disse innn
let displayName = document.createElement("h3");
//xB3 er "kvadrert" symbol
displayName.innerText = "Male\xB3";
footer.appendChild(displayName);

let displayClient = document.createElement("h3");
//xA9 er "copyright" symbol
displayClient.innerText = "\xA9NVIG - Trondheim 2017";
footer.appendChild(displayClient);

let displayLink = document.createElement("a");
displayLink.href = ekstraSider[1].fil;
displayLink.target = ekstraSider[1].target;
displayLink.id = "displayLinkTwitter";
displayLink.innerText = ekstraSider[1].tittel;
footer.appendChild(displayLink);
