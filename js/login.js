import * as root from "./root.js";
import { paintGreetings } from "./greeting.js";

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
