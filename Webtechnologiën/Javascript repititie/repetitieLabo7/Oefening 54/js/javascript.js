function showText(text,id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = new Object();
bus.bestemming = "Brussel";
bus.nummerplaat = "khgkhg";
bus.zetels = 50;
bus.bezetz = 40;
bus.vrijez = function(){
    return bus.zetels - bus.bezetz;
};

showText(bus.bestemming,"mainHeading");
showText("Er zijn nog "+bus.vrijez()+" zetels vrij","subText");