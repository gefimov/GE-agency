function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let score = prompt("Geef je score in");

if (score > 50){
    showText("Geslaagd","mainHeading");
} else {
    showText("Niet geslaagd", "mainHeading");
}