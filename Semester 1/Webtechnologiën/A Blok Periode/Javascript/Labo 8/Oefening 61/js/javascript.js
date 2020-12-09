function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let ww = prompt("Voer de ww in");

if (ww == "Wireshark"){
    showText("u mag binnen", "mainHeading");
}else{
    showText("geweigerd","mainHeading")
}