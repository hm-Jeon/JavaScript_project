import * as root from "./root.js";

function greetingMent() {
  const hour = new Date().getHours();
  let ment;
  if (hour > 5 && hour <= 10) {
    ment = "Good mourning,";
  } else if (hour > 10 && hour <= 17) {
    ment = "Good afternoon,";
  } else if (hour > 17 && hour <= 20) {
    ment = "Good evening,";
  } else {
    ment = "Good night,";
  }
  return ment;
}

export function paintGreetings(username) {
  root.greeting.innerText = `${greetingMent()} ${username}.`;
  root.greeting.classList.remove(root.HIDDEN_CLASSNAME);
  root.clock.classList.remove(root.HIDDEN_CLASSNAME);
  root.quote.classList.remove(root.HIDDEN_CLASSNAME);
  root.author.classList.remove(root.HIDDEN_CLASSNAME);
  root.todoOpen.classList.remove(root.HIDDEN_CLASSNAME);
}
