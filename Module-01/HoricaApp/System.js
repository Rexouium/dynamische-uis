totaal = 0;
receipt = {}
products = {'fris': 0.50, 'bier': 1.00, 'wijn': 1.50}
let ordering = true;
function getNum(text) {
    while (true) {
        let retrieveNum = parseInt(prompt(text))
        if (!isNaN(retrieveNum)) {
            return retrieveNum
        } else {
            alert("We hebben een getal nodig.")
        }
    }
}
while (ordering) {
    userInput = prompt(`Welk product? U kunt kiezen tussen ${Object.keys(products)}`).toLowerCase()
    if (userInput === "stop") {
        ordering = false;
        console.log("stopping...")
    } else {
        if (!(userInput in products)) {
            alert("Wij kunnen dit product niet aanbieden. U hebt de keuze uit " + Object.keys(products))
        } else {
            productAmount = getNum(`Hoeveel wilt u van ${userInput}?: `)
            userInput in receipt ? receipt[userInput] += productAmount : receipt[userInput] = productAmount
            totaal += productAmount * products[userInput]
        }
    }
}
for (const [key, value] of Object.entries(receipt)) {
    let display = `${value}x ${key} - €${(value*products[key]).toFixed(2).replace(".", ",")}`
    document.getElementById("bon").innerText = "Uw bon - bedankt voor het bestellen!"
    document.getElementById("bon-producten").innerText += display + '\n';
}
if (totaal > 0) {
    document.getElementById("totaalprijs").innerText = "totaal: €" + totaal.toFixed(2).replace(".", ",")
}
