mapboxgl.accessToken = '<your access token here>';
  var map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
  });


// function getAPIdata(){
//   var url = 'https://api.openweathermap.org/data/2.5/weather';
//   var apiKey = 'e5fdd0b38a3046a1a45710f16ad20907';
//   var city = document.getElementById('city').value;

//   var request = url + '?' + 'appid' + apiKey + '&' + 'q=' + city;
//   // &q=the%20Hague,nl

//   fetch(request)

//   .then(function(response){
//     return response.json();
//   })

//   .then(function(response){
//     if(!response.ok) throw Error(response.statusText);
//     return response.json();
//   })

//   .then(function(response){
//     onAPISucces(respponse);
//   })
// }

// function onAPISucces(response){
//   var type = resonse.weather[0].description;

//   var degC = Math.floor(response.main.temp - 273.15);

//   var weatherBox = document.getElementById('weather');
//   weatherBox.innerHTML = degC + '&#176;C <br>' + type;
// }

// function onAPISucces(error){
//   console.error('Fetch request failed', error);
//   var weatherBox = document.getElementById('weather');
//   weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?';
// }


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
//     weatherBox.innerHTML = response.main.temp;

//     var degC = Math.floor(response.main.temp - 273.15);
//     // var weatherBox = document.getElementById('weather');
    
//     // graden
//     weatherBox.innerHTML = degC + '&#176;C';

//     // broken clouds bijv: 
//     // weatherBox.innerHTML = response.weather[0].description; 
//   });

// }

// getAPIdata();