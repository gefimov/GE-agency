let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = {
    licensePlate: "1-fre-324",
    destination: "budapest",
    seats: 52,
    reservedSeats: 43,
    seatsAvailable: function(){
        return this.seats - this.reservedSeats;
    }
};

showText(bus.destination,"mainHeading");
showText("Er zijn nog " + bus.seatsAvailable() + " zetels vrij.", "subText");