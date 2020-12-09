function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}
let randomNumber = 6, number;

while(number != randomNumber){
    number = prompt("geef getal tss 1 en 10 in");
}
showText("Je hebt het juiste getal geraden", "mainHeading");
