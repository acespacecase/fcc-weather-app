function getLocation() {
  $.getJSON('http://ip-api.com/json', function(data) {
    $('#city').html(data.city + ", " + data.region);
    var lat = Math.round(data.lat);
    var lon = Math.round(data.long);
    getWeatherData(lat, lon);
  }
)};

function getWeatherData(lat, lon) {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='
            + lat + '&lon=' + lon
            + '&APPID=b56f52d76a95124369f4bf4a2d35bc00', function(weatherData) {
    var forecast = weatherData.weather[0].description;
    var temperature = weatherData.main.temp;
    var icon = weatherData.weather[0].icon;
    setTempToF(temperature);
    setDesc(forecast);
    setIcon(icon);
  });
}

function setTempToF(kelvin) {
  var tempF = 1.8 * (kelvin - 273) + 32;
  tempF = Math.round(tempF);
  $('#temperature').html(tempF + "&#176;F");

  // toggle from F to C
  var clickCounter = 0;
  $('#tempChange').click(function() {
    if(clickCounter % 2 === 0) {
      $('#temperature').html(tempF + "&#176;F");
    } else {
      var tempC = Math.round((tempF - 32) * (5/9));
      $('#temperature').html(tempC + "&#176;C");
    }
    clickCounter++;
  });
};

function setDesc(forecast) {
  // insert desc text into html
  $('#weather-desc').html(forecast);

  //change background
  switch(forecast) {
    case 'scattered clouds':
    case 'few clouds':
    case 'broken clouds':
      document.body.style.background = 'url("http://p1.pichost.me/i/31/1542826.jpg")';
      break;
    case 'clear sky':
      document.body.style.background = 'url("https://snapshotsofwanaka.files.wordpress.com/2013/06/20130606-161727.jpg")';
      break;
    case 'rain':
    case 'shower rain':
      document.body.style.background = 'url("https://i.ytimg.com/vi/ZGHVX6pDVKc/maxresdefault.jpg")';
      break;
    case 'thunderstorm':
      document.body.style.background = 'url("http://s.hswstatic.com/gif/thunderstorm-orig.jpg")';
      break;
    case 'snow':
      document.body.style.background = 'url("http://wallpapercave.com/wp/aSMk3py.jpg")';
      break;
    case 'mist':
      document.body.style.background = 'url("http://www.threepullpa.com/data/uploads/45/437805-mist-over-lake.jpg")';
      break;
    default:
      document.body.style.backgroundColor = "#eee";
  }
}

function setIcon(icon) {
  $('#icontesting').html('<img src="http://openweathermap.org/img/w/' + icon + '.png">');
}

getLocation();
