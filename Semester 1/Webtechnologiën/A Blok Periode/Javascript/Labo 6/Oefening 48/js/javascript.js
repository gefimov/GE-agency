let price=5; 
let name = "Georgiy";
let total = name.length * price;

let mainHeading = document.getElementById("mainHeading");
mainHeading.textContent = total;


let message = "Dag "+name+" jou naamplaatje zal "+total+" eu kosten";

let content = document.getElementById("content");
content.textContent = message;