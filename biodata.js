//Biomap biographical data in JSON format

// L.marker([34.439, -118.125]).addTo(map)
// 			.bindPopup("<b>Pasadena, California</b><br /> Caltech BS Geology 2003").openPopup();	


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

// Define biodata class in pseudoclassical format
// Keeping data abstract because may wish to change marker types in future
// Store to database?- Relationalship POSTGres?
// Modal pop-ups?
// make the DB a text file? for now?
/* BioType Event & Duration Class

{
	bioType: "event" or "duration",
	eventDate: number,
	startYear: number,
	endyear: number,
	latitude: number,
	longitude: number,
	bioType: "personal" OR "professional",
	bioLinks: {
		randomID:{
		url: urlname,
		title: title
		urlDescription: descriptiontext
		}
	},
	stylingProperties:{
		bioImages: {},
		leafletMarkerType: markerType OR false,
		leafletShapeType: shapeType OR false,
		leafletTypeProperties: {},
	}

}
*/
// Divide DB into Professional and Personal DB
// 

