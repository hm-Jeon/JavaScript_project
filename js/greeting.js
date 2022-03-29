import * as root from "./root.js";

function greetingMent() {
  const hour = new Date().getHours();
  let ment;
  if (hour > 5 && hour <= 10) {
    ment = "Good mourning,";
  } else if (hour > 10 && hour <= 17) {
    ment = "Good afternoon,";
  } else if (hour > 17 && hour <= 21) {
    ment = "Good evening,";
  } else {
    ment = "Good night,";
  }
  return ment;
}

function paintGreetings(username) {
  root.greeting.innerText = `${greetingMent()} ${username}.`;
  root.greeting.classList.remove(root.HIDDEN_CLASSNAME);
  root.clock.classList.remove(root.HIDDEN_CLASSNAME);
  root.quote.classList.remove(root.HIDDEN_CLASSNAME);
  root.author.classList.remove(root.HIDDEN_CLASSNAME);
  root.todoOpen.classList.remove(root.HIDDEN_CLASSNAME);
}

function loginSubmit(event) {
  event.preventDefault();
  root.loginForm.classList.add(root.HIDDEN_CLASSNAME);
  root.loginSpan.classList.add(root.HIDDEN_CLASSNAME);
  const inputUsername = root.loginInput.value;
  localStorage.setItem(root.USERNAME_KEY, inputUsername);
  paintGreetings(inputUsername);
}

const savedUsername = localStorage.getItem(root.USERNAME_KEY);

if (savedUsername === null) {
  root.loginDiv.classList.remove(root.HIDDEN_CLASSNAME);
  root.loginForm.classList.remove(root.HIDDEN_CLASSNAME);
  root.loginSpan.classList.remove(root.HIDDEN_CLASSNAME);
  root.loginInput.classList.remove(root.HIDDEN_CLASSNAME);
  root.loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
}
