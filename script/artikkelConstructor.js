var bildeVindu = document.getElementById("bildeVindu");


var artikkelHeading = document.createElement("h1");
artikkelHeading.innerText = mainPhoto.heading;
bildeVindu.appendChild(artikkelHeading);
var infoBoks = document.getElementById("info");

var artikkelHeading = document.createElement("p");
artikkelHeading.innerText = mainPhoto.intro;
bildeVindu.appendChild(artikkelHeading);

var artikkelBilde = document.createElement("img");
artikkelBilde.className = "bilde";
artikkelBilde.src = mainPhoto.source;
artikkelBilde.alt = mainPhoto.alter;
bildeVindu.appendChild(artikkelBilde);



var dato = document.createElement("p");
var datoBold = document.createElement("strong");
datoBold.innerText = "Dato: ";
dato.innerHTML = datoBold.outerHTML + details.dato;
infoBoks.appendChild(dato);

var forfatter = document.createElement("p");
var forfatterBold = document.createElement("strong");
forfatterBold.innerText = "Forfatter: ";
forfatter.innerHTML = forfatterBold.outerHTML + details.forfatter;
infoBoks.appendChild(forfatter);

var understrek = document.createElement("hr");
infoBoks.appendChild(understrek);

var artikkel = document.getElementById("artikkel");
for (var i=0;i<artikkelContent.length;i++) {
    if (artikkelContent[i].type === "dobbelDiv") {
       var venstre = document.createElement("div");
       venstre.className = "dobbelDiv";
       var hoyre = document.createElement("div");
       hoyre.className = "dobbelDiv";

       hoyre.innerHTML = artikkelContent[i].hoyre;
       venstre.innerHTML = artikkelContent[i].venstre;

       var container = document.createElement("div");
       container.className = "dobbelContainer";

       var dobbelHeading = document.createElement("h4");
       dobbelHeading.innerText = artikkelContent[i].heading;

       artikkel.appendChild(dobbelHeading);
       container.appendChild(venstre);
       container.appendChild(hoyre);
       artikkel.appendChild(container);
    }
    else {
        var element = document.createElement(artikkelContent[i].type);
        if (artikkelContent[i].type === "p" || artikkelContent[i].type === "blockquote") {
            element.innerHTML = artikkelContent[i].content;
            artikkel.appendChild(element);
        }
        else if (artikkelContent[i].type === "img") {
            element.src = artikkelContent[i].source;
            element.alter = artikkelContent[i].source;
            element.className = "artikkelBilde";
            artikkel.appendChild(element);
        }
        else if (artikkelContent[i].type === "a") {
            element.src = artikkelContent[i].source;
            element.alter = artikkelContent[i].source;
            element.className = "artikkelLink";
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