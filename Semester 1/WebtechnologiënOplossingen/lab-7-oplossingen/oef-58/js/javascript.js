let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus(licensePlate, destination, seats) {
    this.licensePlate = licensePlate;
    this.destination = destination;
    this.seats = seats;
    this.reservedSeats = 0;
    this.passengers = new Array();
    this.seatsAvailable = function(){
        return this.seats - this.reservedSeats;
    }
    this.addPassenger = function(passenger){
        this.passengers.push(passenger);
        this.reservedSeats += 1;
    }
};

function Passenger(name, nationality, age){
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let bus = new Bus("1-ert-435", "Amsterdam", 50);
bus.addPassenger(new Passenger("Joske", "BE", 30));
bus.addPassenger(new Passenger("Jefke", "NL", 23));


showText(bus.destination, "destination");
showText(bus.passengers[0].name, "passenger1");
showText(bus.passengers[1].name, "passenger2");


