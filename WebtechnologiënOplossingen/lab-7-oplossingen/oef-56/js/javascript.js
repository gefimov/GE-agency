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

function Passenger(name, nationality, age){
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let passenger1 = new Passenger("Joske", "BE", 30);
let passenger2 = new Passenger("Jefke", "NL", 23);

// Dubbele code vermijden door functie te schrijven.
function showPassenger(passenger, id){
    showText("Naam: " + passenger.name + ", Nationaliteit: " + passenger.nationality + ", Leeftijd: " + passenger.age, id);
}

showPassenger(passenger1, "passenger1");
showPassenger(passenger2, "passenger2");

