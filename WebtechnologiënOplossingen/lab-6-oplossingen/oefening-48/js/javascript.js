let name = "Joske";
let price = 5;
let total = name.length * price;

let priceSpan = document.getElementById("priceSpan");
priceSpan.textContent = total;

let groeting = "Dag";
let boodschap = "jou bedrag zou";
let zin = "groeting " + "name" + "boodschap" + "total";

console.log(zin);