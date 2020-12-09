function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let randomnumber = 5;
let number = prompt("geef een nummer in");

while(number != randomnumber){
    number = prompt("blijf raden tot u de juiste getal invoert")
}

    showText("u hebt juist geraden","mainHeading");

