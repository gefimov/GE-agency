function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus (bestemming,nummerplaat,aantalZetels,gereserveerdeZetels){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.aantalZetels = aantalZetels;
    this.gereserveerdeZetels = gereserveerdeZetels;
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

let bus = new Bus("ergens","nummer",53,30);
bus.addPassagier (new Passagier("jose","rus",16));
bus.addPassagier (new Passagier("andor","erg",28));

showText(bus.bestemming,"mainHeading");
showText(bus.passagiers[0].naam,"passagier1");
showText(bus.passagiers[1].naam,"passagier2");