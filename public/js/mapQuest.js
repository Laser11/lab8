function initMap() {
	// add your code here
	L.mapquest.key = 'R1eZ6JhGZ4MJ8ZBDDUjxtOATR89d5JUa';

	//'map' is a div element with the map ID
	var map = L.mapquest.map('map', {
		center: [32.878839, -117.235909],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false

	});

	//Add marker
	L.marker([32.878839, -117.235909]).addTo(map);
}