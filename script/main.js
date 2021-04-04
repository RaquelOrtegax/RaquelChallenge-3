mapboxgl.accessToken = 'pk.eyJ1IjoicmFxdWVsaGhzOTkiLCJhIjoiY2tuMzJxb3FxMDR6cjJ2bzBkd2N5amJpcSJ9.zLNyz6b18G7orncHQpmS3g';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/raquelhhs99/ckn3334p50evj17mluogbwlgg',
      center: [-87.661557, 41.893748],
      zoom: 10.7
    });
    

    map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['nederlandmap']
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});

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