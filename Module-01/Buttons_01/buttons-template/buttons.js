function button_event_handler(IdVar) {
    console.log(IdVar)
    document.getElementById("backgroundimg0").src = `images/bg${IdVar}.jpg`;
    document.getElementById("containerimg0").src = `images/${IdVar}.jpg`
    document.getElementById(`Button${IdVar}`).innerText = parseInt(document.getElementById(`Button${IdVar}`).innerText) + 1
}