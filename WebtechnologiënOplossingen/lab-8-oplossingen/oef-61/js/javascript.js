function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let wachtwoord = prompt("Geef je wachtwoord in");

if (wachtwoord == "Wireframe"){
    showText("Toegang toegestaan", "mainHeading");
} else {
    showText("Toegang geweigerd", "mainHeading");
}