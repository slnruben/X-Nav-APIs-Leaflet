var mymap = L.map('mapid').setView([40.2838, -3.8215], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
L.marker([40.2838, -3.8215]).addTo(mymap).bindPopup('<a href="http://www.etsit.urjc.es">ETSIT</a> (<a href="http://www.urjc.es">URJC</a>)').openPopup();
function onMapClick(e) {
	L.marker(e.latlng).addTo(mymap).bindPopup(e.latlng.toString()).openPopup();
}
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}
function onLocationError(e) {
    alert(e.message);
}

mymap.on('click', onMapClick);
mymap.on("locationfound", onLocationFound);
mymap.on("locationerror", onLocationError);
mymap.locate({setView: true, maxZoom: 16});
