"use strict";
//https://i.imgur.com/iCycnne.gif

//counter
let count = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  //all number divs
  let allDivs = document.querySelectorAll("body div");
  //interval time
  let intervalTiming = 100;
  //first div first
  let divNumber = 1;
  //set interval for counter, pass div number (1) as an argument
  let interval = setInterval(function() {
    counter(divNumber);
  }, intervalTiming);

  /*   function counterFunction() {
    counter(divNumber);
  } */

  //my set button
  let setBtn = document.querySelector("#set");
  //my reset button
  let resetBtn = document.querySelector("#reset");
  //upon set button click
  setBtn.addEventListener("click", switchDiv);

  function switchDiv() {
    //clear initial interval
    clearInterval(interval);
    //if there are divs left to switch...
    if (divNumber < allDivs.length) {
      //...increment div number...
      divNumber++;
      //...and reset interval (with new div number)
      interval = setInterval(function() {
        counter(divNumber);
      }, intervalTiming);
    }

    //upon reset button click
    resetBtn.addEventListener("click", resetFields);

    function resetFields() {
      //clear initial interval
      clearInterval(interval);
      //reset div number to first, 1...
      divNumber = 1;
      //...and clear all h2 text content inside each div;
      allDivs.forEach(div => {
        div.querySelector("h2").textContent = "";
      });
      //...and reset interval (with new div number)
      interval = setInterval(function() {
        counter(divNumber);
      }, intervalTiming);
    }
  }
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
/* function createInterval(f, dynamicParameter, interval) {
  setInterval(function() {
    f(dynamicParameter);
  }, interval);
} //Then call it as createInterval(counter, divNumber, intervalTiming); */
