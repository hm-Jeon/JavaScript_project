const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement("img");

document.body.style.backgroundImage = `url(img/${chosenImage})`;
