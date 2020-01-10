function showText(text,id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus(bestemming,nummerplaat,zetels,bezetz){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetels = zetels;
    this.bezetz = bezetz;
    this.vrijez = function(){
        return this.zetels - this.bezetz;
    }
};

let bus1 = new Bus("Brussel","khgkhg",50,40);
let bus2 = new Bus("Buda","khghga",60,42);

function showBus(bus, id1, id2){
    showText(bus.bestemming,id1);
    showText("Er zijn nog "+bus.vrijez()+" zetels over.",id2);
}

showBus(bus1,"mainHeading1","subText1");
showBus(bus2,"mainHeading2", "subText2");
