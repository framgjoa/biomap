 
var map = L.map('map').setView([33.9, -68.2], 3);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);


		// L.marker([33.786, -118.265]).addTo(map)
		// 	.bindPopup("<b>Los Angeles, California</b><br /> Born.").openPopup();

		L.marker([3.75, 8.788]).addTo(map)
			.bindPopup("<b>Malabo, Equitorial Guinea</b><br /> Wireline Field Engineer").openPopup();	

		L.marker([70.2, -148.46]).addTo(map)
			.bindPopup("<b>Prudhoe Bay, Alaska</b><br /> Wireline Field Engineer").openPopup();	
		
		L.marker([61.197, -149.838]).addTo(map)
			.bindPopup("<b>Anchorage, Alaska</b><br /> Wireline Field Engineer").openPopup();	
		
		L.marker([29.96, -90.068]).addTo(map)
			.bindPopup("<b>Houma, Louisiana</b><br /> Wireline Field Engineer").openPopup();	
		
		L.marker([48.8, 2.257]).addTo(map)
			.bindPopup("<b>Paris, France</b><br /> Well Integrity Train-the-Trainer").openPopup();	
		
		L.marker([52.457, 4.606]).addTo(map)
			.bindPopup("<b>Ijmuiden, Netherlands</b><br /> Well Integrity Training").openPopup();	

		L.marker([29.626, -95.610]).addTo(map)
			.bindPopup("<b>Sugar Land, Texas</b><br /> InTouch Engineer").openPopup();	
										
		L.marker([60.398, 5.3097]).addTo(map)
			.bindPopup("<b>Bergen, Norway</b><br /> Field Quality Champion").openPopup();	
		
		L.marker([10.452, -66.859]).addTo(map)
			.bindPopup("<b>Caracas, Venezuela</b><br /> Teenager").openPopup();	
		
		L.marker([34.439, -118.125]).addTo(map)
			.bindPopup("<b>Pasadena, California</b><br /> Caltech BS Geology 2003").openPopup();	
		
		L.marker([37.774, -122.419]).addTo(map)
			.bindPopup("<b>San Francisco, California</b><br /> Here!").openPopup();



		// Samples
		// L.circle([51.508, -0.11], 500, {
		// 	color: 'red',
		// 	fillColor: '#f03',
		// 	fillOpacity: 0.5
		// }).addTo(map).bindPopup("I am a circle.");

		// L.polygon([
		// 	[51.509, -0.08],
		// 	[51.503, -0.06],
		// 	[51.51, -0.047]
		// ]).addTo(map).bindPopup("I am a polygon.");

 		//Creating icon classes
 		var redCircle = L.icon({


 		});

 		L.circle([51.508, -0.11], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(map).bindPopup("I am a circle.");


		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);

