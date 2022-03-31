import * as root from "./root.js";

const API_KEY = "1ef5279831e294aefc64dfb9b55f20a1";

export function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      root.weatherIcon.appendChild(icon);

      root.weatherStatus.innerText = `${data.weather[0].main}`;
      root.weatherTemp.innerText = `${parseInt(data.main.temp)}°`;
      root.weatherCity.innerText = data.name;
    });
}

export function onGeoError() {
  alert("Can't find you. no weather for you.");
}
