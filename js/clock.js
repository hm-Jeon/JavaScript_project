import * as root from "./root.js";

function getClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  root.clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
