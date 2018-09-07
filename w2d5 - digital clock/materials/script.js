"use strict";

document.addEventListener("DOMContentLoaded", init);
let allDigitPlaces;
let currentTime;
let allTimeUnits;
let timeUnit;
function init() {
  allDigitPlaces = document.querySelectorAll(".digit");

  setTimeout(getTime, 1000);
}
function getTime() {
  currentTime = new Date();
  allTimeUnits = [
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds()
  ];
  allTimeUnits.forEach(formatTime);
  //cuts out the initial time
  allTimeUnits.splice(0, 3);
  //concatenates sub arrays
  allTimeUnits = allTimeUnits.concat(
    allTimeUnits[0],
    allTimeUnits[1],
    allTimeUnits[2]
  );
  //cuts out array declarations
  allTimeUnits.splice(0, 3);
  displayTime();

  setTimeout(getTime, 1000);
}

/* turns each allTimeUnit array item into a string, 
pads it if it is lover than 2 in length,
 pushes the new string into the array */
function formatTime(timeUnit) {
  timeUnit = timeUnit.toString();

  if (timeUnit.length < 2) {
    timeUnit = timeUnit.padStart(2, "0");
  }
  //splits numbers into an array with 2 items
  timeUnit = timeUnit.split("");
  allTimeUnits.push(timeUnit);
}

function displayTime() {
  for (let i = 0; i < 6; i++) {
    allDigitPlaces[i].className = "digit digit" + allTimeUnits[i];
  }
}
