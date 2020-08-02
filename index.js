var images = [
  "./images/mago_oscuro.png",
  "./images/craneo.png",
  "./images/dragon_azul.png",
  "./images/exodia.png",
  "./images/kuriboh.png",
  "./images/maga_oscuro.png",
  "./images/Planta.png",
  "./images/zombie.png"
];
var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
