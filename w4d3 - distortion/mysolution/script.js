"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  //creates 25 divs with transparent background
  appendDivs();
  //begin the loop
  fetchEndP();
}

function fetchEndP() {
  let endP = "https://kea-alt-del.dk/kata-distortion/";
  fetch(endP)
    .then(e => e.json())
    .then(colorDivs);
}
function appendDivs() {
  for (let a = 0; a < 25; a++) {
    let transpDiv = document.createElement("div");
    document.querySelector("main").appendChild(transpDiv);
  }
}
function colorDivs(data) {
  let peopleInQueue = data.inQueue;
  document.querySelector("h2 span").textContent = peopleInQueue;
  let allDivs = document.querySelectorAll("main div");
  for (let b = 0; b < peopleInQueue; b++) {
    allDivs[b].style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 40%)`;
    allDivs[b].style.transitionDelay = `${b / 6}s`;
  }
  setTimeout(removeColor, 10000);
  function removeColor() {
    allDivs.forEach(e => (e.style.backgroundColor = "transparent"));
    ///fetch again
    fetchEndP();
  }
}
