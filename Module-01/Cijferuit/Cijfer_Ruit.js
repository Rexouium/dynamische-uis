var size = prompt("Enter the size of the pyramid");
var list = []
for(var i=1; i<=size; i++) {
    console.log(i);
    document.getElementById('antwoord').innerText += list + "\n"
    list.push(i)}
for(var i=1; i<=size; i++) {
    console.log(i);
    document.getElementById('antwoord').innerText += list + "\n"
    list.pop(i)}
document.getElementById("antwoord").innerText += list + '\n';