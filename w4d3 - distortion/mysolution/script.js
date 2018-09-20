"use strict";

function fetchEndP() {
  let endP = "https://kea-alt-del.dk/kata-distortion/";
  fetch(endP)
    .then(e => e.json())
    .then(showData);
}
function showData(data) {
  document.querySelector("h1").textContent = data.inQueue;
}
fetchEndP();
setInterval(fetchEndP, 10000);
