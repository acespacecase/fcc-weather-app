var weatherHTML = document.getElementById("weather");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    weatherHTML.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  weatherHTML.innerHTML = position.coords.latitude;
}
