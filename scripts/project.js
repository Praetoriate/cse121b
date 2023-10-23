// AccuWeather API key: fcHEQHxUxACs3b6E0LCcBGn0ru7Eh0xG

const weatherElement = document.querySelector("#weather");

import locations from './modules/project_module.js';

function selectLocation() {
  reset();
  const selection = document.querySelector("#selectedPlace").value;
  switch (selection) {
    case "sanDiego":
      // location = locationSanDiego;
      getWeather(locations[0]);
      break;
    case "london":
      // location = locationLondon;      
      getWeather(locations[3]);
      break;
    case "sacramento":
      // location = locationSacramento;      
      getWeather(locations[1]);
      break;
    case "saltLake":
      // location = locationSaltLake;
      getWeather(locations[2]);
      break;
  }
}

const displayWeather = (weatherData,location) => {

  const weatherName = document.createElement("h1");
  weatherName.innerHTML = location.name;

  const weatherCondition = document.createElement("h2");
  weatherCondition.innerHTML = weatherData[0].WeatherText;

  const weatherTemp = document.createElement("h2");
  weatherTemp.innerHTML = `${weatherData[0].Temperature.Imperial.Value} °F`;

  weatherElement.appendChild(weatherName);
  weatherElement.appendChild(weatherCondition);
  weatherElement.appendChild(weatherTemp);
};

const reset = () => {
  weatherElement.innerHTML = "";
};

const getWeather = async (location) => {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${location.key}?apikey=fcHEQHxUxACs3b6E0LCcBGn0ru7Eh0xG`
  );
  let weatherData = await response.json();
  if (response.ok) {
    displayWeather(weatherData,location);
  } else {
    console.log("Data access error");
  }
};

document.querySelector("#selectedPlace").addEventListener("change", () => {
  selectLocation();
});

getWeather(locations[2]);
