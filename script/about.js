//legger eventlisteners på knappene, kjører showBox med hensyn til tilhørende index i arrayene
document.getElementById('NVIGButton').addEventListener('click', function () {showBox(0);});
document.getElementById('GoalButton').addEventListener('click', function () {showBox(1);});
document.getElementById('MALEButton').addEventListener('click',function () {showBox(2);});
document.getElementById('VexologyButton').addEventListener('click', function () {showBox(3);});
document.getElementById('LogoButton').addEventListener('click', function () {showBox(4);});

//beskrivelser
let aboutText = ["NTNUs Veksillologiske Interesse Gruppe, også kjent som NVIG, er en studentorganisasjon opptatt" +
"        av spredningen av veksillologiens goder, spesifikt blant våre medstudenter ved NTNU." +
"        Inspirert av TED-talken til Roman Mars (som kan ses på NVIGs framside) om manglende engasjement anngående byflagg, ble NVIG grunnlagt" +
"        av fem informatikkstudenter i 2017.", "Vi i NVIG er bekymret over mangelen av kunnskap om flag i samfunnet, derfor er målet vårt" +
"        å spre informasjon og engasjement rundt flag. NVIG jobber med denne spredningen i håp om en" +
"        framtidig prioritering av flaggdesign. De ufyselige designene man finner i flagget til San" +
"        Francisco, Pocatello og de fleste andre flag med tekst på var også en sterk inspirasjon for" +
"        grunnleggerne av NVIG. NVIG ønsker at alle byer, stater og organisasjoner skal kunne ha et flagg" +
"        verdt å samle seg bak.", "MALE³ er en gruppe med studenter fra NTNU som studerer informatikk. Gruppen består av" +
"        Eirik Leikvoll, Emil Strand, Lars Martin Hodne, August Noer Steinset og Einar Viddal." +
"        Navnet MALE³ kommer fra forbokstavene i navnene til medlemene av gruppa. MALE³" +
"        er også grunnleggerne av NVIG.", "Har du noen gang sett det norske flagget i utlandet eller på internasjonal TV?" +
"        Et blikk på en olympisk utøver sin drakt så ser du det kanskje. Et raskt" +
"        blikk og du vet med en gang hvilket land utøveren representerer. Flagg" +
"        er både språk og identitet samtidig. Det er ikke bare nasjoner som har egne" +
"        flagg. Byer har også flagg, men de er sjeldent verdt å nevne. Trondheim og" +
"        Amsterdam er et par av de få byene med flagg som befolkningen identifiserer" +
"        seg med. De fleste byflagg går glemt på grunn av sine dårlige design." +
"        De fleste vexillogister mener at alle har rett til et bra flagg å samle seg bak," +
"        og ved å engasjere deg i denne saken, kan DU utgjøre en forskjell for dine" +
"        fremtidige barn og deres vexillogiske verden!", "Hjernen symboliserer NVIGs medlemmers sinn, " +
"flaggstangen er presentert som en plante som er spirt opp av hjernen, alt som skal til er" +
" å plante veksologiens frø i sinnet. Gjennom NVIg håper vi å oppnå akkuratt dette for andre medstudenter" +
"på NTNU, og alle andre som kunne la seg friste av å lære noe om veksillologi"];

//Overskrifter til beskrivelsene
let aboutHeading = ["NVIG", "NVIG sitt mål", "MALE³", "Hvorfor Vexillologi?", "Logo"];

let about = document.getElementById("aboutDiv");
let text  = document.createElement("div");
let heading = document.createElement("h2");


//gjør at NVIGknappen er i focus i CSSens øyne
document.getElementById("NVIGButton").focus();

function showBox(index) {
    text.innerText = aboutText[index];
    heading.innerText = aboutHeading[index];
    about.appendChild(heading);
    about.appendChild(text);
}
//henter info om NVIG når bruker åpner siden
showBox(0);

