/*
Filnavn: BildeGalleriJS.js
Skrevet av: Lars Martin Hodne
Når: November 2017
Mening: Legge inn bilder i bildegalleriet og reagere på brukerinput, skal også gjøre det lett å
legge til nye bilder uten at koden "kollapser"(legger du til nye bilder tilpasser siden seg automatisk)
, samt å gi enkle konfigureringsmuligheter - f.eks kan man forandre antall bilder per rad gjennom en variabel
*/

//alle henvendelser til arrayer viser til arrayene i bildeGalleriData.js
 //diven der alt innhold bli plassert
 let bildeContentDiv = document.querySelector("#galleri");

 //lar man bestemme antall bilder per rad
 const antallBilderPerRad = 5;

 //regner ut antall rader gitt ved antallbilderperrad
 const antallRader = (bilder.length - bilder.length%antallBilderPerRad)/antallBilderPerRad;

 //regner ut en hoydekonstant til bildene gitt ut ifra antallBilderPerRade
 //en hoydekonstant paa 14 fungerer fint med 4 bilder per rad,vi ganger med 4/antallbilderperrad slik at konstanen
 //blir riktig i situasjoner hvor mengden rader er anderledes(man kan forandre antallBilderPerRad og siden tilpasser seg automatisk)
 const hoyde = 14*(4/antallBilderPerRad);

 //regner ut hvor mange bilder som "flyter over" og må legges på bunnen
 const antallBilderPaaBunnen = bilder.length%antallBilderPerRad;


 //legger til bilder på en rad, velger bilder fra bildearrayen med indeks fra start til men ikke med slutt
 function leggTilRad(start,slutt) {
     let bildeRad = document.createElement("p");
     bildeRad.className = "bildeRad";

     bildeContentDiv.appendChild(bildeRad);
     for (let a = start; a<slutt;a++) {
         let imgDiv = document.createElement("div");
         imgDiv.className = "imgDiv";

         //id'en som gis er tilsvarende plasseringen i bilder arrayen, viktig for bruk senere
         imgDiv.id = a;

         let img = document.createElement('img');

         //setter src og alt attributtene
         img.setAttribute('src', "bilder/" + bilder[a]);
         img.setAttribute('alt',land[a]);
         img.classList.add("bilde");

         //setter hoyden på bilde gitt ved hoydekonstanten
         img.setAttribute('style', 'height:' + hoyde + 'vw;');

         imgDiv.appendChild(img);
         bildeRad.appendChild(imgDiv);
         imgDiv.addEventListener("click",visInfo);
         //når bildet/flagget trykkes kjøres vis info funksjonen
     }
 }

 //legger til rader gitt ved antallrader tidligere
 //bildenr holder styr på hvilket bilde man sluttet ved sist
 //og starter der i neste omgang når funksjonen kjøres
 let bildeNr = 0;
 for (let y = 0; y < antallRader; y++) {
     leggTilRad(bildeNr,bildeNr+antallBilderPerRad);
     bildeNr += antallBilderPerRad;
 }
//hvis noen bilder "flyter over" legges disse til i en egen div på bunnen
 if (antallBilderPaaBunnen) {
     leggTilRad(bilder.length - antallBilderPaaBunnen,bilder.length);
     bildeContentDiv.lastChild.className = "sisteBildeRad";
 }

 //forrigediv viser til den forrige åpnede infodiven
 let forrigeDiv = "";
 //eksisterendeDiv er en bollsk verdi for om det er en infodiv til stede eller ikke
 let eksisterendeDiv = false;
 function visInfo() {
     //hvis det eksister en div kjøres det følgende
     if (eksisterendeDiv) {
         //hvis infodiven som skal skapes ligger i samme rad som forrigediv byttes bare innholdet
         if (forrigeDiv.parentNode === this.parentNode) {
             //hvis forrigediv er lik den nye diven lukkes denne
             if (forrigeDiv === this) {
                 fjernDiv(document.getElementById("infoDiv"));
                 this.removeChild(document.getElementById("pilDiv"));
                 eksisterendeDiv = false;
             }
             //ellers byttes innholdet
             else {
                 document.getElementById("bildeBeskrivelse").innerHTML = lagBildeBeskrivelse(this.id);
                 document.getElementById("flaggBeskrivelse").innerHTML = lagFlaggBeskrivelse(this.id);

                 forrigeDiv.removeChild(document.getElementById("pilDiv"));
                 lagPil(this);
             }
         }
         //hvis infodiven som skal skapes ikke ligger i samme rad som forrige div lages en ny infordiv på den nye raden,
         // og den forrige fjernes
         else {
             fjernDiv(document.getElementById("infoDiv"));
             lagInfoDiv(this);

             forrigeDiv.removeChild(document.getElementById("pilDiv"));
             lagPil(this);
         }
     }
     //ingen infodiv tilstede, lager en ny
     else {
         lagInfoDiv(this);
         lagPil(this);
         eksisterendeDiv = true;
     }
     //lagrer seg selv som forrige div
     forrigeDiv = this;
 }
//lager en pil(en liten div som er rotert 45 grader)
 function lagPil (element) {
     let pilDiv = document.createElement("div");
     pilDiv.id = "pilDiv";
     element.appendChild(pilDiv);
 }
//lager infodiv
 function lagInfoDiv (element) {
     let infoDiv = document.createElement("div");
     infoDiv.id = "infoDiv";

     let bildeBeskrivelse = document.createElement("div");
     bildeBeskrivelse.id = "bildeBeskrivelse";

     //element id viser hvor man skal finne bildet til bildeBeskrivelsen
     bildeBeskrivelse.innerHTML = lagBildeBeskrivelse(element.id);
     infoDiv.appendChild(bildeBeskrivelse);

     let flaggBeskrivelse = document.createElement("div");
     flaggBeskrivelse.id = "flaggBeskrivelse";

     //element.id viser hvor man skal finne beskrivelsen i beskrivelse arrayen
     flaggBeskrivelse.innerHTML = lagFlaggBeskrivelse(element.id);
     infoDiv.appendChild(flaggBeskrivelse);

     //legger infodiven etter raden(den ligger mellom radene) som det aktuelle flagget ligger i
     element.parentNode.parentNode.insertBefore(infoDiv, element.parentNode.nextSibling);
 }

 function lagBildeBeskrivelse(elementId) {//finner til flagget gitt ved elementId
     let img = document.createElement("img");
     img.src = "bilder/" + bilder[elementId];//henter bilde
     img.alt = land[elementId];
     img.id = "bildeIBeskrivelse";
     return (img.outerHTML)
 }
 function lagFlaggBeskrivelse(elementId) {//henter beskrivelsen av flagget gitt ved elementId og
                                          // returnerer en paragraf med tekst og overskrift
     let read = new XMLHttpRequest();//henter beskrivelse
     read.open('GET', beskrivelser[elementId], false);
     read.send();

     let overskrift = document.createElement("strong");//lager overskrift
     overskrift.classList.add("boldOverskrift");
     overskrift.innerText = land[elementId];

     let documentText = read.responseText;
     let paragraf = document.createElement("p");
     paragraf.id = "paragraf";
     paragraf.innerHTML = overskrift.outerHTML + "<br><br>" + documentText;//setter inn beskrivelse og overskrift

     return(paragraf.outerHTML);
 }

 function fjernDiv (element) {
     //en animasjon blir laget slik at diven faller ut, elementet blir så slettet
     element.id = "fjernDiv";
     element.removeChild(document.getElementById("flaggBeskrivelse"));
     element.childNodes.item("bildeIBeskrivelse").setAttribute("style","animation: bliUsynlig 0.4s linear 0s 1 forwards;");
     setTimeout(function () {
         element.parentNode.removeChild(element);
     },400)
 }