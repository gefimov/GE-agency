let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus (bestemming,nummerplaat,aantalZetels,gereserveerdeZetels){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.aantalZetels = aantalZetels;
    this.gereserveerdeZetels = gereserveerdeZetels;
    this.vrijeZetels = function(){
        return this.aantalZetels - this.gereserveerdeZetels;
    }
};

let bus1 = new Bus('Brussel','9534',53,42);
let bus2 = new Bus('Budapest','6456',53,38);

function showBus(bus,id1,id2){
    showText(bus.bestemming,id1);
    showText("Er zijn nog " + bus.vrijeZetels() + " zetels vrij.", id2);
}

showBus(bus1,"mainHeading1","subText1");
showBus(bus2,"mainHeading2","subText2");