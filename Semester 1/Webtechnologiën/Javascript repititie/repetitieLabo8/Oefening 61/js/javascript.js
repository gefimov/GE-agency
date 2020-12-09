function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let ww = prompt("geef ww in");

if(ww == "wireframe"){
    showText("acces accepted","mainHeading");
}else{
    showText("acces denied","mainHeading");
}