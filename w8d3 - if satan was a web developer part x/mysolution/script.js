"use strict";
//https://i.imgur.com/iCycnne.gif

//counter
let count = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  //all number divs
  let allDivs = document.querySelectorAll("body div");
  //my set button
  let setBtn = document.querySelector("#set");
  //my reset button
  let resetBtn = document.querySelector("#reset");
  //interval timing
  let intervalTiming = 100;
  //first div first
  let divNumber = 1;
  /* Creates interval with passed parameters (counter function, div number, interval timing timing),
  then asigns that interval to variable (to clear later)*/
  let interval = createInterval(counter, divNumber, intervalTiming);

  //upon set button click
  setBtn.addEventListener("click", switchDiv);

  function switchDiv() {
    //clear initial interval
    clearInterval(interval);
    //if there are divs left to switch...
    if (divNumber < allDivs.length) {
      //...increment div number...
      divNumber++;
      //...and re-create interval (with new div number)
      interval = createInterval(counter, divNumber, intervalTiming);
    }

    //upon reset button click(note: only when switchDiv started)
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
      //...and re-create interval (with new div number)
      interval = createInterval(counter, divNumber, intervalTiming);
    }
  }
}

function createInterval(f, numberOfDiv, interval) {
  //return interval (to clear it later)
  return setInterval(function() {
    f(numberOfDiv);
  }, interval);
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
/* with help from https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
and  https://stackoverflow.com/questions/40414792/disable-timer-within-setinterval-function-with-dynamic-parameters*/
/* function createInterval(f, dynamicParameter, interval) {
  return setInterval(function() {
    f(dynamicParameter);
  }, interval);
} //Then call it as createInterval(counter, divNumber, intervalTiming); */
