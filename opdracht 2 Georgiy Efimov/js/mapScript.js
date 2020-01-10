/* OEFENING 4: Zet met behulp van de bibliotheek Leaflet de marker ‘geenParking.png‘ op de map met de volgende coördinaten
 * [51.2153, 4.4185] en met een grootte van 100 op 100px.
 */

 //map initialiseren (coördinatenlaag)
let adresMap = L.map('adresMap', { // gebruik id "mapje" in HTML
center: [51.2153, 4.4185], // middelpunt van map
zoom: 14 // schaal van de map
});

//map initialiseren (kaartlaag)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(adresMap);

// create custom icon
let geenParkingIcon = L.icon({
    iconUrl: "images/geenParking.png",
    iconSize: [100, 100], // size of the icon
});

L.marker([51.2153, 4.4185], {icon: geenParkingIcon}).addTo(adresMap);

