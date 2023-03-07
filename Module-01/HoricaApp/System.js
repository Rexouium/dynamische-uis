//tags
Fris = 0
Bier = 0
Wijn = 0
//totals for calculating
totaal = 0.0
FrisTotal = 0.0
BierTotal = 0.0
WijnTotal = 0.0
//Prices
FrisPrijs = 0.5
BierPrijs = 1
WijnPrijs = 1.5
//vars
let OrderMaking = true;
let UserInputs = '';
let AantalDrinks = 0;

//start of system

while (OrderMaking) {
    UserInputs = prompt("Wat wilt u bestellen? Keuze uit Fris, Bier of Wijn, Wilt u stoppen? type Stop: ")

    if (UserInputs !== "Fris" && UserInputs !== "Bier" && UserInputs !== "Wijn" && UserInputs !== "Stop") {
        alert("Invalid Argument(s) given!")
    }
    else {
        if (UserInputs === "Stop") {
            OrderMaking = false
        }
        else {
            AantalDrinks = parseInt(prompt(`Hoe veel ${UserInputs} wilt u hebben?: `))
        }
    }

    if (UserInputs === "Fris") {
        Fris += AantalDrinks
    }
    if (UserInputs === "Bier") {
        Bier += AantalDrinks
    }
    if (UserInputs === "Wijn") {
        Wijn += AantalDrinks
    }
//  ||Out off first while||
}// ||                   ||
//  ||Out off first while||


//Calculate part start
FrisTotal = Fris * FrisPrijs
BierTotal = Bier * BierPrijs
WijnTotal = Wijn * WijnPrijs
totaal = (FrisTotal + BierTotal + WijnTotal)
//Calculate part end

alert(`
    Hier is je bonnetje:
    ${Fris} aantal fris, dit komt uit op: ${FrisTotal}
    ${Bier} aantal bier, dit komt uit op: ${BierTotal}
    ${Wijn} aantal wijn, dit komt uit op: ${WijnTotal}
    Je totaal bedraagt: ${totaal}`
)