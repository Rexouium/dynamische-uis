let uitleg = "Breken hoe veel poten totaal via het aantal dieren.\n"+
    "Vraag het gewenste aantal dieren en bereken het aantal poten.";

alert(uitleg);

let Giraffen = prompt("Hoeveel Giraffen?");
let Struisvogels = prompt("Hoeveel Struisvogels?");
let Zebras = prompt("Hoeveel Zebras?");

potenPerGiraf = 4
potenPerStruisvogel = 2
potenPerZebra = 4

totalpoten = ((Giraffen * potenPerGiraf) + (Struisvogels * potenPerStruisvogel) + (Zebras * potenPerZebra))

console.log(totalpoten)
document.getElementById("antwoord").innerText = totalpoten;