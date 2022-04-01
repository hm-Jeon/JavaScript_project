import * as root from "./root.js";

const API_KEY = "1ef5279831e294aefc64dfb9b55f20a1";
const METRIC_KEY = "metric";

function weatherOpen() {
  root.dailyWeather.classList.remove(root.HIDDEN_CLASSNAME);
  root.dailyWeather.classList.toggle(root.ANIMATE_REVERSE_CLASSNAME);
}

function weatherClose(event) {
  const weatherElements = [
    ...root.dailyWeather.querySelectorAll("*"),
    ...root.weather.querySelectorAll("*"),
  ];
  console.log(weatherElements);
  let find;
  if (!root.dailyWeather.classList.contains(root.ANIMATE_REVERSE_CLASSNAME)) {
    weatherElements.forEach((element) => {
      if (event.target === element) {
        find = true;
      }
    });
  }
  if (find !== true) {
    root.dailyWeather.classList.add(root.ANIMATE_REVERSE_CLASSNAME);
  }
}

document.body.addEventListener("click", weatherClose);
root.weather.addEventListener("click", weatherOpen);

export function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Current Weather data
  currentWeather(lat, lon);

  // 5 Days Weather Data
  dailyWeather(lat, lon);
}

function currentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${METRIC_KEY}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      root.weatherIcon.appendChild(icon);
      const currentTemp = Math.round(data.main.temp);

      root.weatherTemp.innerText = `${currentTemp}°`;
      root.weatherCity.innerText = data.name;

      // dailyWeather - Current
      root.dailyWeatherCurrentCity.innerText = data.name;
      root.dailyWeatherCurrentStatus.innerText = data.weather[0].main;
      const dailyIcon = root.weatherIcon.cloneNode(true);
      root.dailyWeatherCurrentIconAndTemp.prepend(dailyIcon);
      root.dailyWeatherCurrentTemp.innerText = `${currentTemp}°`;
    });
}

function dailyWeather(lat, lon) {
  const exclude = "current,minutely,hourly,alerts";
  const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=${METRIC_KEY}`;

  fetch(dailyUrl)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      data.daily.forEach((value, index) => {
        if (index < 5) {
          const dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
            weekday: "short",
          });

          const weatherOfDay = {
            dayOfWeek: dayname,
            minTemp: Math.round(value.temp.min),
            maxTemp: Math.round(value.temp.max),
            icon: value.weather[0].icon,
          };

          const div = document.createElement("div");
          div.className = "weatherOfDay";

          const dayOfWeek = document.createElement("span");
          dayOfWeek.className = "dayOfWeek";
          dayOfWeek.innerText = weatherOfDay.dayOfWeek;
          div.appendChild(dayOfWeek);

          const iconDiv = document.createElement("div");
          iconDiv.className = "weatherOfDayIcon";
          const icon = document.createElement("img");
          icon.src = `http://openweathermap.org/img/wn/${weatherOfDay.icon}@2x.png`;
          iconDiv.appendChild(icon);
          div.appendChild(iconDiv);

          const tempDiv = document.createElement("div");
          tempDiv.className = "weatherOfDayTemp";
          const minTemp = document.createElement("span");
          const maxTemp = document.createElement("span");
          maxTemp.className = "maxTemp";
          maxTemp.innerText = `${weatherOfDay.maxTemp}°`;
          tempDiv.appendChild(maxTemp);
          minTemp.className = "minTemp";
          minTemp.innerText = `${weatherOfDay.minTemp}°`;
          tempDiv.appendChild(minTemp);
          div.appendChild(tempDiv);

          root.dailyWeatherDaily.appendChild(div);
        }
      });
    });
}

export function onGeoError() {
  alert("Can't find you. no weather for you.");
}
