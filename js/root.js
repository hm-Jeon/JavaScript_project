export const HIDDEN_CLASSNAME = "hidden";
export const INVISIBLE_CLASSNAME = "invisible";

// Login & Greeting
export const USERNAME_KEY = "username";

export const loginDiv = document.querySelector(".login");
export const loginForm = document.querySelector(".login #login-form");
export const loginSpan = document.querySelector(".login span");
export const loginInput = document.querySelector(".login #login-form input");
export const greeting = document.querySelector("#greeting");

// Clock
export const clock = document.querySelector("#clock");

// Todo
export const TRUE_KEY = "true";
export const FALSE_KEY = "false";
export const ANIMATE_REVERSE_CLASSNAME = "animate-reverse";
export const TODOS_KEY = "todos";
export const DONE_KEY = "done";
export const ACTIVE_CLASSNAME = "active";

export const todoOpen = document.querySelector("#todo-open");
export const todoDiv = document.querySelector("#todo");
export const todoForm = document.querySelector("#todo-form");
export const todoInput = todoForm.querySelector("input");
export const todoList = document.querySelector("#todo-list");
export const todoListWrapper = document.querySelector("#todo-list-wrapper");

// Focus
export const FOCUS_KEY = "focus";
export const MIN_HEIGHT_CLASS_NAME = "min-height";

export const focusDiv = document.querySelector(".focus");
export const focusForm = document.querySelector(".focus #focus-form");
export const focusH3 = document.querySelector(".focus h3");
export const focusInput = document.querySelector(".focus #focus-form input");
export const focusListDiv = document.querySelector(".focus-list");
export const focusList = document.querySelector(".focus-list ul");
export const focusListH3 = document.querySelector(".focus-list > h3");
export const focusListSpan = document.querySelector(".focus-list > span");

// Quote
export const quote = document.querySelector("#quote span:first-child");
export const author = document.querySelector("#quote span:last-child");

// Weather
export const weather = document.querySelector(".weather");
export const weatherIcon = document.querySelector(".weather div .icon");
export const weatherTemp = document.querySelector(".weather div .temp");
export const weatherCity = document.querySelector(".weather .city");

export const dailyWeather = document.querySelector(".dailyWeatherWrapper");

export const dailyWeatherCurrent = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current"
);
export const dailyWeatherCurrentCity = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current .city"
);
export const dailyWeatherCurrentStatus = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current .status"
);
export const dailyWeatherCurrentIconAndTemp = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current .iconAndTemp"
);
export const dailyWeatherCurrentIcon = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current .iconAndTemp .icon"
);
export const dailyWeatherCurrentTemp = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .current .iconAndTemp .temp"
);

export const dailyWeatherDaily = document.querySelector(
  ".dailyWeatherWrapper .dailyWeather .daily"
);
