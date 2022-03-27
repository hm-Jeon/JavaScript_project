const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login #login-form");
const loginSpan = document.querySelector(".login span");
const loginInput = document.querySelector(".login #login-form input");
const greeting = document.querySelector("#greeting");
const clockH2 = document.querySelector("#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Have a good day! ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clockH2.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginSpan.classList.add(HIDDEN_CLASSNAME);
  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  paintGreetings(inputUsername);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginSpan.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
}
