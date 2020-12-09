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

function Passenger(naam, nationaliteit,leeftijd){
    this.naam = naam;
    this.nationaliteit = nationaliteit;
    this.leeftijd = leeftijd;
}

let passenger1 = new Passenger("jos","belg",22);
let passenger2 = new Passenger("andre","rus",33);

let bus1 = new Bus("Brussel","khgkhg",50,40);
let bus2 = new Bus("Buda","khghga",60,42);

function showPassenger(passenger, id){
    showText("Naam: " + passenger.naam + ", Nationaliteit: " + passenger.nationaliteit + ", Leeftijd: " + passenger.leeftijd, id);
}

function showBus(bus, id1, id2){
    showText(bus.bestemming,id1);
    showText("Er zijn nog "+bus.vrijez()+" zetels over.",id2);
}

showBus(bus1,"mainHeading1","subText1");
showBus(bus2,"mainHeading2", "subText2");

showPassenger(passenger1, "passenger1");
showPassenger(passenger2, "passenger2");