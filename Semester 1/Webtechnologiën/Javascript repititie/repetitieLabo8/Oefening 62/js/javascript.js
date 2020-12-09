function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bewerking = prompt("geef een bewerking in + of *");
let getal1 = parseInt(prompt("geef een getal in"));
let getal2 = parseInt(prompt("geef ene tweede getal in"));
let result;

switch(bewerking){
    case "+": result = getal1 + getal2;
    break;
    case "*": result = getal1 * getal2;
    break;
    default: result = "foutieve keuze";
    break;
    
}

showText(result, "mainHeading");