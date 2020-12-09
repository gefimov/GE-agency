function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let randomNumber = 5, number, helpText="";
let attemptCounter = 0;

while(number != randomNumber){
    number = prompt("Geef een getal tussen 1 en 10 in " + helpText);
    if(number > randomNumber){
        helpText = "tip: lager";
    } else {
        helpText = "tip: hoger";
    }
    attemptCounter++;
}

showText("u hebt juist geraden en u hebt zoveel geraden: "+attemptCounter,"mainHeading");

