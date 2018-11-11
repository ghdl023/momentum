const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `./images/${imageNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRadom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = getRadom();
  paintImage(randomNumber);
}

init();
