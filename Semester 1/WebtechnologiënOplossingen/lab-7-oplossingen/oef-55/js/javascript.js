let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus(licensePlate, destination, seats, reservedSeats) {
    this.licensePlate = licensePlate;
    this.destination = destination;
    this.seats = seats;
    this.reservedSeats = reservedSeats;
    this.seatsAvailable = function(){
        return this.seats - this.reservedSeats;
    }
};

let bus1 = new Bus("1-bla-321", "Parijs", 40, 23);
let bus2 = new Bus("1-alb-123", "Brussel", 30, 9);

function showBus(bus,id1,id2){
    showText(bus.destination,id1);
    showText("Er zijn nog " + bus.seatsAvailable() + " zetels vrij.", id2);
}

showBus(bus1,"mainHeading1", "subText1");
showBus(bus2,"mainHeading2", "subText2");
