let showText = function (text, id) {
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = new Object();

bus.licensePlate = "1-fre-324";
bus.destination = "budapest";
bus.seats = 52;
bus.reservedSeats = 43;
bus.seatsAvailable = function () {
    return this.seats - this.reservedSeats;
};

showText(bus.destination, "mainHeading");
showText("Er zijn nog " + bus.seatsAvailable() + " zetels vrij.", "subText");