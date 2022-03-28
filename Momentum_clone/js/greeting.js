const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login #login-form");
const loginSpan = document.querySelector(".login span");
const loginInput = document.querySelector(".login #login-form input");
const greeting = document.querySelector("#greeting");
const clockH2 = document.querySelector("#clock");
const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");
const todoOpenBtn = document.querySelector("#todo-open");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function greetingMent() {
  const hour = new Date().getHours();
  let ment;
  if (hour > 5 && hour <= 11) {
    ment = "Good mourning,";
  } else if (hour > 11 && hour <= 17) {
    ment = "Good afternoon,";
  } else if (hour > 17 && hour <= 21) {
    ment = "Good evening,";
  } else {
    ment = "Good night,";
  }
  return ment;
}

function paintGreetings(username) {
  greeting.innerText = `${greetingMent()} ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clockH2.classList.remove(HIDDEN_CLASSNAME);
  quoteSpan.classList.remove(HIDDEN_CLASSNAME);
  authorSpan.classList.remove(HIDDEN_CLASSNAME);
  todoOpenBtn.classList.remove(HIDDEN_CLASSNAME);
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
