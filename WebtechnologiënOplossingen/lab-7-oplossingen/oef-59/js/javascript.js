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

let busArray = new Array();
busArray.push(new Bus("1-ert-435", "Amsterdam", 50));
busArray.push(new Bus("1-ert-445", "Londen", 30));
busArray[0].addPassenger(new Passenger("Joske", "BE", 30));
busArray[0].addPassenger(new Passenger("Jefke", "NL", 23));
busArray[1].addPassenger(new Passenger("Jantje", "NL", 24));
busArray[1].addPassenger(new Passenger("kwak", "FR", 22));

function logBus(bus){
    console.log(bus.destination);
    console.log(bus.passengers[0].name);
    console.log(bus.passengers[1].name);
}

logBus(busArray[0]);
logBus(busArray[1]);


