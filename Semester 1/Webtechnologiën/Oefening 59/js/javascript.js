function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus (bestemming,nummerplaat,aantalZetels,gereserveerdeZetels){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.aantalZetels = aantalZetels;
    this.gereserveerdeZetels = 0;
    this.passagiers = new Array();
    this.vrijeZetels = function(){
        return this.aantalZetels - this.gereserveerdeZetels;
    }
    this.addPassagier = function(passagier){
        this.passagiers.push(passagier);
        this.gereserveerdeZetels += 1;
    } 
};

function Passagier(naam,nationaliteit,leeftijd){
    this.naam = naam;
    this.nationaliteit = nationaliteit;
    this.leeftijd = leeftijd;
}

let busArray = new Array();
busArray.push(new Bus("ergens","nummer",50));
busArray.push(new Bus("India","plaat",60));
busArray[0].addPassagier(new Passagier("Joske", "BE", 30));
busArray[0].addPassagier(new Passagier("Jefke", "NL", 23));
busArray[1].addPassagier(new Passagier("Jantje", "NL", 24));
busArray[1].addPassagier(new Passagier("kwak", "FR", 22));

function logBus(bus){
    console.log(bus.destination);
    console.log(bus.passenger[0].name);
    console.log(bus.passenger[1].name);
}

logBus(busArray[0]);
logBus(busArray[1]);