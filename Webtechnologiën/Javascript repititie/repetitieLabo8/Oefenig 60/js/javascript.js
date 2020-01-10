function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let score = prompt("geef u score")

if (score>=50){
    showText("geslaags","mainHeading");
}else{
    showText("niet geslaagd", "mainHeading");
}