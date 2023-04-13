IdVar = 5
function button_event_handler(IdVar) {
    console.log(IdVar)
    document.getElementById("backgroundimg0").src = `images/bg${IdVar}.jpg`;
    document.getElementById("containerimg0").src = `images/${IdVar}.jpg`
    document.getElementById(`Button${IdVar}`).innerText = parseInt(document.getElementById(`Button${IdVar}`).innerText) + 1
    pressedlast = document.getElementById(`Button${IdVar}`).disabled = true
    pressedlast = document.getElementById(`Button${IdVar}`).style.backgroundColor = "red"
    lastpressedid = document.getElementById(`button`)
    button_handeler(IdVar)
}
function button_handeler(IdVar){
    totalbuttons = 4
    for (let i = 0; i < totalbuttons; i++) {
        document.getElementById(`Button${i}`).style.backgroundColor = "green"
        document.getElementById(`Button${i}`).disabled = false
    }

    pressedlast = document.getElementById(`Button${IdVar}`).disabled = true
    pressedlast = document.getElementById(`Button${IdVar}`).style.backgroundColor = "red"
}