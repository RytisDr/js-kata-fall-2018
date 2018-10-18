"use strict";
//https://i.imgur.com/iCycnne.gif

//counter
let count = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  //interval time
  let intervalTiming = 100;
  //first div first
  let divNumber = 1;
  //set interval, pass div number (1) as an argument
  let interval = setInterval(function() {
    counter(divNumber);
  }, intervalTiming);
  //my set button
  let setBtn = document.querySelector("#set");
  //my reset button
  let resetBtn = document.querySelector("#reset");
  //upon set button click
  setBtn.addEventListener("click", function switchDiv() {
    //clear initial interval
    clearInterval(interval);
    //if there are divs left to switch...
    if (divNumber < document.querySelectorAll("body div").length) {
      //...increment div number...
      divNumber++;
      //...and reset interval (with new div number)
      interval = setInterval(function() {
        counter(divNumber);
      }, intervalTiming);
    } else {
      //this removal is not neccesary, but lets clean up
      setBtn.removeEventListener("click", switchDiv);
    }
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
