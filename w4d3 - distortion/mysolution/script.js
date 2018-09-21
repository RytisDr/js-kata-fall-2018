"use strict";

window.addEventListener("DOMContentLoaded", init);
let template = document.querySelector("template").content;
function fetchEndP() {
  let endP = "https://kea-alt-del.dk/kata-distortion/";
  fetch(endP)
    .then(e => e.json())
    .then(appendDivs);
}
function appendDivs(data) {
  let queueNumber = data.inQueue;
  for (let i = 0; i < queueNumber; i++) {
    let clone = template.cloneNode(true);
    let circle = document.createElement("div");
    clone.appendChild(circle);
    document.querySelector("main").appendChild(clone);
  }
}
function removeDivs() {
  while (document.querySelector("main").hasChildNodes()) {
    document
      .querySelector("main")
      .removeChild(document.querySelector("main").firstChild);
  }
}
function init() {
  fetchEndP();
  setInterval(removeDivs, 10000);
  setInterval(fetchEndP, 10000);
}
