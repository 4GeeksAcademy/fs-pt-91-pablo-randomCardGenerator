/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["heart", "spade", "diamond", "club"];
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPaloContent(palo) {
  switch (palo) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "diamond":
      return "♦";
    case "club":
      return "♣";
    default:
      return null;
  }
}

window.generateCard = () => {
  let paloRandom = getRandomItem(palos);
  let numeroRandom = getRandomItem(numeros);

  const paloElements = document.querySelectorAll(".palo");
  const numeroElement = document.querySelector("#numero");

  numeroElement.innerHTML = numeroRandom;

  paloElements.forEach(palo => {
    palo.className = palo.className.includes("invertido")
      ? "palo invertido"
      : "palo";
    palo.classList.add(paloRandom);
    palo.innerHTML = getPaloContent(paloRandom);
  });
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  generateCard();
};

let timer = 10;

window.setInterval(() => {
  if (timer == 0) {
    timer = 10;
    generateCard();
  }
  const temporizadorElement = document.querySelector("#temporizador");
  temporizadorElement.innerHTML = "Siguiente carta generada en " + timer + "s";
  timer--;
}, 1000);

const cartaElement = document.getElementById("carta");
window.cambiarAncho = e => {
  cartaElement.style.width = e.target.value + "px";
  cambiarTamanoTextos();
};

window.cambiarAlto = e => {
  cartaElement.style.height = e.target.value + "px";
  cambiarTamanoTextos();
};

function cambiarTamanoTextos() {
  const spans = document.querySelectorAll("span");

  spans.forEach(span => {
    let anchoContainer = Math.min(
      parseInt(cartaElement.clientWidth),
      parseInt(cartaElement.clientHeight)
    );
    if (parseInt(cartaElement.style.width) <= 35) span.style.padding = "2px";

    switch (true) {
      case anchoContainer >= 400:
        span.style.fontSize = "10em";
        break;
      case anchoContainer >= 200:
        span.style.fontSize = "6em";
        break;
      case anchoContainer >= 150:
        span.style.fontSize = "3em";
        break;
      case anchoContainer >= 100:
        span.style.fontSize = "2em";
        break;
      case anchoContainer >= 50:
        span.style.fontSize = "1em";
        break;
      default:
        span.style.fontSize = "0.5em";
        break;
    }
  });
}
