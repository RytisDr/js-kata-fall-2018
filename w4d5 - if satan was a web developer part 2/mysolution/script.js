"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  let numberPlace = document.querySelector("h2");

  numberPlace.textContent = "";
  ///HIGHLY unlikely to show same number twice
  for (let i = 0; i < 10; i++) {
    numberPlace.textContent += Math.floor(Math.random() * 10);
  }
  document.querySelector("#no").addEventListener("click", init);
}
