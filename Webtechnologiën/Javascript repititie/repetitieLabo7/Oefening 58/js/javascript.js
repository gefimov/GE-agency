function showText(text,id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus(bestemming,nummerplaat,zetels,bezetz){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetels = zetels;
    this.bezetz = bezetz;
    this.passengers = new Array();
    this.vrijez = function(){
        return this.zetels - this.bezetz;
    }
    this.addPassengers = function()
};

function Passenger(name, nationality, age){
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let bus = new Bus("Brussel","khgkhg",50,40);
bus.passengers[0] = new Passenger("jose","belg",30);
bus.passengers[1] = new Passenger("andre","belg",45);

showText(bus.bestemming,"mainHeading");
showText(bus.passengers[0].name,"passenger1");
showText(bus.passengers[1].name,"passenger2");

