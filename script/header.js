/*
Filnavn: header.js
Skrevet av: Einar Viddal, Emil Strand, Eirik Leikvoll og Lars Martin Hodne
Når: Oktober 2017
Mening: Lage alt innholdet i headeren og gi den funksjonalitet.
Det vil si, linke til forsiden,
*/


//Lager alle elementene i headeren.
var headerContainer = document.getElementById("headerContainer");

var header = document.createElement("div"); //Lager div som skal inneholde link til forsiden.
header.id = "header";

var frontLink = document.createElement("a"); //Lager a element som linker til forsiden.
frontLink.href = "index.html";

var logo = document.createElement("img"); //Lager og legger logoen inn i a elementet.
logo.src = "bilder/NVIGlogo2.png";
logo.alt = "Hjem";
frontLink.appendChild(logo);

var title = document.createElement("h1"); //Lager og legger tittelen inn i a elementet.
title.innerText = "NVIG";
frontLink.appendChild(title);

header.appendChild(frontLink); //Legger inn link til forsiden i den øverste diven i headeren.
headerContainer.appendChild(header);

//Lager navbaren
var navbar = document.createElement("div"); //Lager navbar-diven.
navbar.id = "navbar";

var links = [ //Liste med linkene i navbaren
  ["<b>Nyeste artikler</b>", "<a href='til-alle-med-hjerte-i-ntnui.html'>Til alle med et hjerte i NTNUI</a>", "<a href='NTNUIflaggforslag.html'>NTNUI flaggforslag</a>", "<a href='vexillologi.html'>vexillologi</a>"],
  ["<b>Interaktiv</b>", "<a href='spill.html'>Spill</a>", "<a href='quiz.html'>Quiz</a>"],
  ["<b>Info</b>", "<a href='bildeGalleri.html'>Flaggalleri</a>", "<a href='about.html'>Om oss</a>", "<a href='https://twitter.com/nvigntnu' target='_blank'>Twitter</a>"]
];

for (var a=0; a<links.length; a++){
  var newDiv = document.createElement("div");
  newDiv.className = "menyDiv";
  for (var b=0; b<links[a].length; b++){
    newDiv.innerHTML += links[a][b];
  }
  navbar.appendChild(newDiv);
}
headerContainer.appendChild(navbar); //Legger baren inn i header containeren.

//Lager knapp som åpner navbaren.
var navOpener = document.createElement("div");
navOpener.id = "navOpener";
headerContainer.appendChild(navOpener);
document.getElementById("navOpener").onclick = openNavbar; //Kaller funksjon som åpner navbaren.

//Lager er pil som viser at man kan åpne navbaren
var arrow = document.createElement("img");
arrow.src = "bilder/Arrow.png";
arrow.alt = "^";
arrow.id = "arrow";
arrow.className = "closeArrow";
navOpener.appendChild(arrow);

function openNavbar(){ //Funksjon som åpner navbaren.
  document.getElementById('navbar').style.animation = "openNavbar 0.3s forwards";
  document.getElementById('navOpener').onclick = closeNavbar;
  document.getElementById('arrow').className = "";
}

function closeNavbar(){ //Funksjon som lukker navbaren.
  document.getElementById('navbar').style.animation = "closeNavbar 0.3s forwards";
  document.getElementById('navOpener').onclick = openNavbar;
  document.getElementById('arrow').className = "closeArrow";
}
