function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bewerking = prompt("kies een bewerking + - * of /");
let getal1 = parseInt(prompt("geef een getal in"));
let getal2 = parseInt(prompt("geef een tweede getal in"));
let result;

switch (bewerking){
    case "+": result =  getal1 + getal2;
    break;
    case "-": result = getal1 - getal2;
    break;
    case "*": result = getal1 * getal2;
    break;
    case "/": result = getal1/getal2;
    break;
    default: result = "foutieve keuze";
    break;
}

showText(result,"mainHeading");