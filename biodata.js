//Biomap biographical data in JSON format

// Samples
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
// Add linked list data structure properties: head, tail, next
// Faint lines for unhighlighted links, bold for selected nodes?
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

var bioProfessionalData = {
	startNode: 1,
	endNode: 2,
	"1":{
		bioType: "duration",
		eventDate: number,
		startYear: number,
		endyear: number,
		latitude: 3.75,
		longitude: 8.788,
		bioType: "professional",
		bioLinks: {
			"2":{
			url: null,
			title: null,
			urlDescription: null
			},
		locationCountryorState: "Equitorial Guinea" ,
		locationCity: "Malabo",
		jobDescription: "Wireline Field Engineer",
		next: 2,
		previous: null
		}
	},
	"2":{
		bioType: "duration",
		eventDate: "12-12-2005",
		startYear: 2005,
		endyear: 2008,
		latitude: 3.75,
		longitude: 8.788,
		bioType: "professional",
		bioLinks: {
			"2":{
			url: null,
			title: null,
			urlDescription: null
			},
		locationCountryorState: "Alaska" ,
		locationCity: "Prudhoe Bay",
		jobDescription: "Wireline Field Engineer"
		}
	},
};
/* Hardcoded into map for now
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
*/

var bioDataList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

   list.contains = function(target){
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

