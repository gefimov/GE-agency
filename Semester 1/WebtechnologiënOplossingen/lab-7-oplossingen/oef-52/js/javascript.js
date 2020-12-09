let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

showText("Universal function", "mainHeading");
showText("To put text on the screen", "subText");