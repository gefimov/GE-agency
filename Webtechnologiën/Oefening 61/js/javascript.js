function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}
let wachtwoord = prompt ("geef ww in");
if (wachtwoord == "Wireframe"){
    showText("toegang toegestaan","mainHeading");
} else {
    showText("niet toegestaan","mainHeading");
};