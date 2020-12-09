let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = new Object();
    bus.nummerplaat = 'Be978',
    bus.bestemming = 'Brussel',
    bus.aantalZetels = 52,
    bus.gereserveerdeZetels=43,

    bus.vrijeZetels = function(){
       return this.aantalZetels - this.gereserveerdeZetels;
    };




showText(bus.bestemming,"mainHeading");
showText("Er zijn nog " + bus.vrijeZetels() + " zetels vrij", "subText");