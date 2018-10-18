"use strict";
//https://i.imgur.com/iCycnne.gif
let count = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  let divNumber = 1;
  let interval = setInterval(function() {
    counter(divNumber);
  }, 100);
  let setBtn = document.querySelector("#set");
  setBtn.addEventListener("click", function() {
    clearInterval(interval);
    divNumber++;
    interval = setInterval(function() {
      counter(divNumber);
    }, 100);
  });
}

function counter(divNumber) {
  count++;
  if (count == 10) {
    count = 0;
  }
  document.querySelector(
    `div:nth-of-type(${divNumber}) h2`
  ).textContent = count;
}
