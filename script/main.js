

// Formulier
function getAPIdata(){
  var url = 'https://api.openweathermap.org/data/2.5/weather';
  var apiKey = 'e5fdd0b38a3046a1a45710f16ad20907';
  var city = document.getElementById('city').value;

  var request = url + '?' + 'appid' + apiKey + '&' + 'q=' + city;
  // &q=the%20Hague,nl

  fetch(request)

  .then(function(response){
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })

  .then(function(response){
    onAPISucces(response);
  })

  .catch(function (error){
    onAPIError(error);
  });
}

function onAPISucces(response){
  var type = response.weather[0].description;

  var degC = Math.floor(response.main.temp - 273.15);

  var weatherBox = document.getElementById('weather');
  weatherBox.innerHTML = degC + '&#176;C' + type;
}

function onAPIError(error){
  console.error('Fetch request failed', error);
  var weatherBox = document.getElementById('weather');
  weatherBox.innerHTML = 'No weather data available. Did you enter a valid city?';
}


// Graden
document.getElementById('getWeather').onclick = function(){
  getAPIdata();
};


function getAPIdata(){
  var city = 'Rotterdam';
  var request ='https://api.openweathermap.org/data/2.5/weather?appid=e5fdd0b38a3046a1a45710f16ad20907&q=' + city; 
  // &q=the%20Hague,nl

  fetch(request)

  .then(function(response){
    return response.json();
  })

  .then(function(response){
    console.log(response);
    var weatherBox = document.getElementById('weather');
    // weatherBox.innerHTML = response;
    weatherBox.innerHTML = response.weather[0].description;

    var degC = Math.floor(response.main.temp - 273.15);
    // var weatherBox = document.getElementById('weather');
    
    // graden
    weatherBox.innerHTML = degC + '&#176;C';

    // broken clouds bijv: 
    // weatherBox.innerHTML = response.weather[0].description; 
  });

}

getAPIdata();