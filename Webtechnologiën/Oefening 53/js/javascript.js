let showText = function(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bus = {
    nummerplaat : 'Be978',
    bestemming : 'Brussel',
    aantalZetels : 52,
    gereserveerdeZetels:43,

    vrijeZetels: function(){
       return this.aantalZetels - this.gereserveerdeZetels;
    }

};


showText(bus.bestemming,"mainHeading");
showText("Er zijn nog " + bus.vrijeZetels() + " zetels vrij", "subText");