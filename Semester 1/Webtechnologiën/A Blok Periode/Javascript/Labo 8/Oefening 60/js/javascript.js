function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let score = prompt("voer je score in");

if (score > 50){
    showText("u bent geslaagd", "mainHeading");
}else{
    showText("u bent gefaald","mainHeading")
}