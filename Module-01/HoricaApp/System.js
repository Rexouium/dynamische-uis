//tags
Fris = 0
Bier = 0
Wijn = 0
//totals for calculating
totaal = 0.0
FrisTotal = 0.0
BierTotal = 0.0
WijnTotal = 0.0
//vars
let OrderMaking = true;
let UserInputs = '';
let AantalDrinks = 0;
//dictionaries
dictionary = {}
products = {'Fris': 0.5, 'Bier': 1, 'Wijn': 1.5}
//start of system

while (OrderMaking) {
    UserInputs = prompt("Wat wilt u bestellen? Keuze uit Fris, Bier of Wijn, Wilt u stoppen? type Stop: ")
    if (UserInputs === "Stop") {
        OrderMaking = false
    }
    else {
        if (UserInputs !== "Fris" && UserInputs !== "Bier" && UserInputs !== "Wijn") {
            alert("Invalid Argument(s) given!")
        }
        AantalDrinks = parseInt(prompt(`Hoe veel ${UserInputs} wilt u hebben?: `))
        totaal += AantalDrinks * products[UserInputs]
        Object.keys(dictionary).includes(UserInputs) ? dictionary[UserInputs] += AantalDrinks : dictionary[UserInputs] = AantalDrinks
        console.log(totaal)
    }
    dictionary[UserInputs] += AantalDrinks
//  ||Out off first while||
}// ||                   ||
//  ||Out off first while||


for (const [key, value] of Object.entries(dictionary)) { // replace dictionary
    let display = `${value}x ${key} - €${(value * products[key]).toFixed(2).replace(".", ",")}`
    document.getElementById("bon").innerText = "Uw bon - bedankt voor het bestellen!"
    document.getElementById("bon-producten").innerText += display + '\n';

    if (totaal > 0) {
        document.getElementById("totaalprijs").innerText = "totaal: €" + totaal.toFixed(2).replace(".", ",")
    }
}
