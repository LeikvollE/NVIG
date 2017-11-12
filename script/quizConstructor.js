/*
Filnavn: quizJS.js
Skrevet av: Einar Viddal, Lars Martin Hodne
Når: November 2017
Mening: Gi funksjonalitet til quizen, dvs: la brukeren velge quiz, svare på spørsmål og få et resultat.
Forsikre at man lett kan legge til nye quizer
*/
document.getElementById("SampleDiv").style.display = "none"; //Skjuler quizboks

//henter alle quizValgBoksene på siden
let quizBokser = document.getElementsByClassName("quizValgBoks");

//legger til eventlisteners på quizvalgene
for (let i = 0;i<quizBokser.length;i++) {
    quizBokser[i].addEventListener("click", function(){ startQuiz(i); })
}

let sporsmaalNr; //Viser til hvilket spørsmål man er på.
let valgteSvar;  //En array som tar vare på poeng brukeren får på hvert spørsmål.

function startQuiz(quizNr){
    document.getElementById("velgQuiz").style.display = "none"; //Skjuler boks hvor bruker velger quiz
    document.getElementById("SampleDiv").style.display = "block"; //Åpner quizboks

    sporsmaalNr = 1;

    valgteSvar = [];
    for (let i=0; i<quizer[quizNr].sporsmaal.length; i++){ //Starter med å sette inn 0 poeng for alle mulige svar.
        valgteSvar.push(0);
    }

    let fremgang = document.getElementById("fremgang");  //Lar brukeren se spørsmålet han er på og total antall spørsmål
    fremgang.innerText = sporsmaalNr + "/" + quizer[quizNr].sporsmaal.length;

    document.getElementById("knappNeste").onclick = function(){ nesteSporsmaal(quizNr); }; //Event listener som lar brukeren gå fram og tilbake mellom spørsmål.
    document.getElementById("knappForrige").onclick =  function(){ forrigeSporsmaal(quizNr); };

    lagSporsmaal(quizNr); //Lager det første spørsmålet.
}

function lagSporsmaal(quizNr) { //Viser bilde og spørsmål
    let img = document.getElementById("img"); //Legger inn bilde til spørsmålet
    img.src = quizer[quizNr].bilder[sporsmaalNr-1];
    img.alt = "Hvis du ikke kan se bilde her kan du ikke ta quizen";

    let sporsmaalsTekst = document.getElementById("tekst"); //Legger inn spørsmålet
    sporsmaalsTekst.innerText = quizer[quizNr].sporsmaal[sporsmaalNr-1];
    let labels = document.getElementsByClassName("label");
    for (let i=0; i<quizer[quizNr].svar[sporsmaalNr-1].length; i++) { //Legger inn svaralternativene
        let boks = document.createElement("input");
        boks.className = "svarBoks";
        boks.type = "radio";
        boks.name= "svar";

        labels[i].innerHTML = boks.outerHTML + quizer[quizNr].svar[sporsmaalNr-1][i];
    }
    fremgang.innerText = sporsmaalNr + "/" + quizer[quizNr].sporsmaal.length; //Viser fremgang
}

function nesteSporsmaal(quizNr) { //Tar brukeren til neste spørsmål
    let svarBokser = document.getElementsByClassName("svarBoks");
    if ( svarBokser[ quizer[quizNr].riktigeSvar[sporsmaalNr - 1] ].checked ) { //Gir poeng om den riktige radioknappen er valgt
        valgteSvar[sporsmaalNr-1] = 1;
    }
    else {
        valgteSvar[sporsmaalNr-1] = 0; //Gir 0 poeng om brukeren endrer til feil svar
    }

    if (sporsmaalNr === quizer[quizNr].sporsmaal.length) { //Viser resultat om brukeren går videre etter sise spørsmål
        visSvar(quizNr);
    }
    else { //Går til neste spørsmål
        sporsmaalNr ++;
        lagSporsmaal(quizNr)
    }
}

function forrigeSporsmaal(quizNr) { //Kalles på når brukeren går til forrige spørsmål.
    if (sporsmaalNr !== 1) {
        sporsmaalNr --;
        lagSporsmaal(quizNr);
    }
}

function visSvar(quizNr) { //Åpner boks med resultat
    let poengsum = 0;
    for (let i=0; i<valgteSvar.length; i++){//regner ut poengsum
        poengsum += valgteSvar[i];
    }
    document.getElementById("SampleDiv").style.display = "none"; //Skjuler quizen
    document.getElementById("ferdig").style.display = "block"; //Åpner resultatboks
    document.getElementById("antallRiktig").innerText = ("Du fikk " + poengsum + "/" + quizer[quizNr].sporsmaal.length + " rette"); //Skriver resultatet
    document.getElementById("avslutt").onclick = tilbakeTilStart; //Knapp som lar brukeren gå tilbake til quiz listen.
}

function tilbakeTilStart(){ //Tar bruker en tilbake til quiz listen
    document.getElementById("ferdig").style.display = "none"; //Skjuler resultatboks
    document.getElementById("velgQuiz").style.display = "flex"; //Viser boksen hvor bruker velger quiz.
}
