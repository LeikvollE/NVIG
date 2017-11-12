/*
Filnavn: data.js
Skrevet av: Lars Martin Hodne
Når: November 2017
Mening: tilby filplasseringer og navn når BildeGalleriJs spør etter dette.
*/
//det eneste man må gjøre for lå legge til bilder i galleriet
//er å finne bilde, skrive en beskrivelse i .txt dokument,
//også legge til filplasseringer og navn på landet under
let bilder = [ //Linker til bildene i bildegalleriet.
    "Flagg/Australia.png","Flagg/Norge.png", "Flagg/Brasil.png","Flagg/Canada.png",
    "Flagg/Danmark.png","Flagg/Estland.png","Flagg/Etiopia.png", "Flagg/Finland.png",
    "Flagg/Frankrike.png","Flagg/Hellas.png","Flagg/Indonesia.png","Flagg/Vietnam.png",
    "Flagg/Vatikanstaten.png","Flagg/Ukraina.png","Flagg/Tyskland.png","Flagg/Tyrkia.png",
    "Flagg/Sverige.png","Flagg/Sveits.png","Flagg/Storbritania.png","Flagg/Spania.png",
    "Flagg/S_korea.png","Flagg/Nepal.png","Flagg/Qatar.png","Flagg/Polen.png",
    "Flagg/Russland.png","Flagg/New_Zealand.png","Flagg/palestina.png"
];
let land = [ //Navnet på de ulike landene representert i galleriet.
    "Australia","Norge", "Brasil","Canada",
    "Danmark","Estland","Etiopia", "Finland",
    "Frankrike","Hellas","Indonesia","Vietnam",
    "Vatikanstaten","Ukraina","Tyskland","Tyrkia",
    "Sverige","Sveits","Storbritania","Spania",
    "Sør Korea","Nepal","Qatar","Polen",
    "Russland","New Zealand","Palestina"
];

let beskrivelser = [ //Linker til txt-filene som inneholder beskrivelsene til de ulike flaggene.
    "beskrivelser/Australia.txt","beskrivelser/Norge.txt", "beskrivelser/Brasil.txt","beskrivelser/Canada.txt",
    "beskrivelser/Danmark.txt", "beskrivelser/Estland.txt","beskrivelser/Etiopia.txt", "beskrivelser/Finland.txt",
    "beskrivelser/Frankrike.txt","beskrivelser/Hellas.txt","beskrivelser/Indonesia.txt","beskrivelser/Vietnam.txt",
    "beskrivelser/Vatikanstaten.txt","beskrivelser/Ukraina.txt","beskrivelser/Tyskland.txt","beskrivelser/Tyrkia.txt",
    "beskrivelser/Sverige.txt","beskrivelser/Sveits.txt","beskrivelser/Storbritania.txt","beskrivelser/Spania.txt",
    "beskrivelser/S_Korea.txt","beskrivelser/Nepal.txt","beskrivelser/Qatar.txt","beskrivelser/Polen.txt",
    "beskrivelser/Russland.txt","beskrivelser/New_Zealand.txt","beskrivelser/palestina.txt"
];