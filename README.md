# fcc-weather-app
This project is part of FreeCodeCamp.com. It was built using HTML, CSS, Bootstrap, Javascript, and jQuery. It uses ip-api.com to find the user's location and fetches weather data via openweathermap.org's API.


# learning curve
I had a lot of difficulty getting the API to work with the location. At first, I was using the geolocation interface, which now requires https, paired with Javascript's XMLHttpRequest for the API request. This didn't work because the API wasn't serving across https. To get the API working, I ended up ditching the geolocation tool and using ip-api.com instead, using http instead of https.

#favorite part
Strangely enough, converting Kelvin to C/F and creating the temperature toggle button was my favorite part. There's something comforting about easy math and formulas.
