"use strict";
let btn = document.querySelector("button");
let divSection = document.querySelector("#generatedColors");
window.addEventListener("DOMContentLoaded", init);

function init() {
  btn.addEventListener("click", start);
}
function start() {
  while (divSection.firstChild) {
    divSection.removeChild(divSection.firstChild);
  }
  let numberInput = document.querySelector("input").value;

  if (numberInput != "") {
    btn.textContent = "Again!";
    for (let i = 0; i < numberInput; i++) {
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let randomHue = Math.floor(Math.random() * 360);
      //no same colors
      randomHue += i;

      div.style.backgroundColor = `hsl(${randomHue}, 52%, 60%)`;
      div.style.height = "200px";
      div.style.width = "200px";
      h2.style.marginBottom = "50px";

      h1.textContent = div.style.backgroundColor;
      h2.textContent = `CSS: background-color:${div.style.backgroundColor}`;
      divSection.appendChild(div);
      divSection.appendChild(h1);
      divSection.appendChild(h2);
    }
  }
}
