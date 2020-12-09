function showText(text,id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = {  
    bestemming = "Brussel",
    nummerplaat = "jhgjg",
    zetels = 53,
    bezetz = 3,
    vrijez = function(){
    return zetels - bezetz;
    }
};

showText(bus.bestemming,"mainHeading");
showText("Er zijn nog "+bus.vrijez()+" zetels vrij","subText");