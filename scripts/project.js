// AccuWeather API key: fcHEQHxUxACs3b6E0LCcBGn0ru7Eh0xG

const weatherElement = document.querySelector("#weather");

const locationSanDiego = {
  name: "San Diego, CA - USA",
  key: 347628,
};
const locationLondon = {
  name: "London, England - UK",
  key: 328328,
};
const locationSacramento = {
  name: "Sacramento, CA - USA",
  key: 347627,
};
const locationSaltLake = {
  name: "Salt Lake City, UT - USA",
  key: 331216,
};

function selectLocation() {
  reset();
  const selection = document.querySelector("#selectedPlace").value;
  switch (selection) {
    case "sanDiego":
      // location = locationSanDiego;
      getWeather(locationSanDiego);
      break;
    case "london":
      // location = locationLondon;      
      getWeather(locationLondon);
      break;
    case "sacramento":
      // location = locationSacramento;      
      getWeather(locationSacramento);
      break;
    case "saltLake":
      // location = locationSaltLake;
      getWeather(locationSaltLake);
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
  weatherData = await response.json();
  if (response.ok) {
    displayWeather(weatherData,location);
  } else {
    console.log("Data access error");
  }
};

document.querySelector("#selectedPlace").addEventListener("change", () => {
  selectLocation();
});

getWeather(locationSaltLake);
