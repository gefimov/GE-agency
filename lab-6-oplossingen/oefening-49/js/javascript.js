let name = "Joske";
let price = 5;
let total = name.length * price;
let message = "Dag " + name + " je naamplaatje zal " + total + " euro kosten";

let mainHeading = document.getElementById("mainHeading");
mainHeading.textContent = message;