"use strict";

window.addEventListener("DOMContentLoaded", function() {
  makeDivs();
  let div = document.querySelectorAll("body section div");
  let i = 0;
  setInterval(function() {
    div.forEach(colorSwitch, i);
  }, 2000);
});
function colorSwitch(divElement, i) {
  i++;
  //is this random enough or should it be more random?
  divElement.style.backgroundColor = `hsl(${Math.random() * 360 +
    i * Math.random()}, 60%, 50%)`;
}

function makeDivs() {
  //make as many divs as necessary to fill the height of the window on load, could try with resize, but am too lazy
  let screenHeight = window.innerHeight;
  let sectionHeight = document.querySelector("section").clientHeight;
  while (sectionHeight < screenHeight) {
    let div = document.createElement("div");
    sectionHeight = document.querySelector("section").clientHeight;
    document.querySelector("section").appendChild(div);
  }

  /*  if (screenHeight - sectionHeight < div.clientHeight) {
    document.querySelector("section").removeChild(div);
  } */
  //window.addEventListener("resize", makeDivs);
}
