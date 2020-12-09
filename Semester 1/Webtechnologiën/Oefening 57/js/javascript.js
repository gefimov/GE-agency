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
};

function Passagier(naam,nationaliteit,leeftijd){
    this.naam = naam;
    this.nationaliteit = nationaliteit;
    this.leeftijd = leeftijd;
}

let bus = new Bus("ergens","nummer",53,30);
bus.passagiers[0] = new Passagier("jose","rus",16);
bus.passagiers[1] = new Passagier("andor","erg",28);

showText(bus.bestemming,"mainHeading");
showText(bus.passagiers[0].naam,"passagier1");
showText(bus.passagiers[1].naam,"passagier2");