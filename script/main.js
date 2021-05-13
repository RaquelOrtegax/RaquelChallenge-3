mapboxgl.accessToken='pk.eyJ1IjoicmFxdWVsaGhzOTkiLCJhIjoiY2tuMzJxb3FxMDR6cjJ2bzBkd2N5amJpcSJ9.zLNyz6b18G7orncHQpmS3g';

var openweathermapUrl= 'http://api.openweathermap.org/data/2.5/weather';//?q=rotterdam&appid=//
var openweathermapUrlApiKey='6ae79127a84b62401fdcb17d0227da0c';

var cities = [ //2.10 uur//
  {
    name: 'Amsterdam',
    coordinates:[4.895168, 52.370216]
  },
  {
    name: 'Rotterdam',
    coordinates: [4.47917, 51.9225]
  },
  {
    name: 'Nijmegen',
    coordinates: [5.85278, 51.8425]
  },
  {
    name: 'Maastricht',
    coordinates: [5.68889, 50.84833]
  },
  {
    name: 'Groningen',
    coordinates:[6.56667, 53.21917]
  },
  {
    name: 'Enschede',
    coordinates: [6.89583, 52.21833]
  },
  {
    name: 'Tilburg',
    coordinates: [5.0913, 51.55551]
  },
  {
    name: 'Zwolle',
    coordinates: [6.09444, 52.5125]
  },
  {
    name: 'Terschellingen',
    coordinates: [5.31527, 53.391354]
  },
  {
    name: 'Middelburg',
    coordinates: [3.610998, 51.4987962]
  },
  {
    name: 'Sneek',
    coordinates: [5.6589, 53.03297]
  },
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [5.508852, 52.142480],
  zoom: 7
});

map.on('load', function(){
  cities.forEach(function(city){
    var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + openweathermapUrlApiKey + '&lon=' + city.coordinates[0] + '&lat=' + city.coordinates[1];

    fetch(request)
    .then(function(response){
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })

    .then(function(response){
      plotImageOnMap(response.weather[0].icon, city)
    })
    .catch(function(error){
      console.log('ERROR:', error);
    });
  });
});






// fox
// function fox(){
//   var request ='https://randomfox.ca/floof/?ref=apilist.fun';

//   fetch(request)

//   .then(function(response){
//     return response.json();
//   })

//   .then(function(response){
//     console.log(response.image); //.sprites toegevoegd
//     var weatherBox = document.getElementById('fox');
//     weatherBox.innerHTML = response.image;
//   });

// }

// fox();







function getAPIdata() {

  // construct request
  var request = 'https://api.thecatapi.com/v1/images/search';

  // get current kitty
  fetch(request)

  // parse response to JSON format
  .then(function(response) {
    return response.json();
  })

  // do something with response
  .then(function(response) {
    // show full JSON object
    console.log(response);
    document.getElementById('foto').src= response[0].url;

  });
}

// init data stream
getAPIdata();


























function plotImageOnMap(icon, city){
  map.loadImage(
    'https://openweathermap.org/img/w/' + icon + '.png',
    function (error, image){
      if(error) throw error;
      map.addImage("weatherIcon_" + city.name, image);
      map.addSource("point_" + city.name, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: city.coordinates
            }
          }]
        }
      });

      map.addLayer({
        id: "points_" + city.name,
        type: "symbol",
        source: "point_" + city.name,
        layout: {
          "icon-image": "weatherIcon_" + city.name,
          "icon-size": 2
        }
      });
    }
  );
}



// tot hier


// // Formulier
// function getAPIdata(){
//   var url = 'https://api.openweathermap.org/data/2.5/weather';
//   var apiKey = 'e5fdd0b38a3046a1a45710f16ad20907';
//   var city = document.getElementById('city').value;

//   var request = url + '?' + 'appid' + apiKey + '&' + 'q=' + city;
//   // &q=the%20Hague,nl

//   fetch(request)

//   .then(function(response){
//     if(!response.ok) throw Error(response.statusText);
//     return response.json();
//   })

//   .then(function(response){
//     onAPISucces(response);
//   })

//   .catch(function (error){
//     onAPIError(error);
//   });
// }

// function onAPISucces(response){
//   var type = response.weather[0].description;

//   var degC = Math.floor(response.main.temp - 273.15);

//   var weatherBox = document.getElementById('weather');
//   weatherBox.innerHTML = degC + '&#176;C' + type;
// }

// function onAPIError(error){
//   console.error('Fetch request failed', error);
//   var weatherBox = document.getElementById('weather');
//   weatherBox.innerHTML = 'No weather data available. Did you enter a valid city?';
// }


// // Graden
// document.getElementById('getWeather').onclick = function(){
//   getAPIdata();
// };


// function getAPIdata(){
//   var city = 'Rotterdam';
//   var request ='https://api.openweathermap.org/data/2.5/weather?appid=e5fdd0b38a3046a1a45710f16ad20907&q=' + city; 
//   // &q=the%20Hague,nl

//   fetch(request)

//   .then(function(response){
//     return response.json();
//   })

//   .then(function(response){
//     console.log(response);
//     var weatherBox = document.getElementById('weather');
//     // weatherBox.innerHTML = response;
//     weatherBox.innerHTML = response.weather[0].description;

//     var degC = Math.floor(response.main.temp - 273.15);
//     // var weatherBox = document.getElementById('weather');
    
//     // graden
//     weatherBox.innerHTML = degC + '&#176;C';

//     // broken clouds bijv: 
//     // weatherBox.innerHTML = response.weather[0].description; 
//   });

// }

// getAPIdata();