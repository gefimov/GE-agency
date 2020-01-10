let showText = function(text,id){
    let element = document.getElementById(id);
    element.textContent = text;
}

function Bus (bestemming,nummerplaat,aantalZetels,gereserveerdeZetels){
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.aantalZetels = aantalZetels;
    this.gereserveerdeZetels = gereserveerdeZetels;
    this.vrijeZetels = function(){
        return this.aantalZetels - this.gereserveerdeZetels;
    }
};

function Passagier(naam,nationaliteit,leeftijd){
    this.naam = naam;
    this.nationaliteit = nationaliteit;
    this.leeftijd = leeftijd;
}

let passagier1 = new Passagier ("jos","rus",22);
let passagier2 = new Passagier ("anton","belg",25);

function showPassagier(passagier, id){
    showText("Naam: "+ passagier.naam+" , nationaliteit: "+passagier.nationaliteit+" , leeftijd: "+passagier.leeftijd,id);

}
showPassagier(passagier1,"passagier1")
showPassagier(passagier2,"passagier2")
