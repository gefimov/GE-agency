function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}
let score = prompt("geef score in");
if (score > 50){
    showText("geslaagd","mainHeading");
}  else {
    showText("niet geslaagd","mainHeading");
}