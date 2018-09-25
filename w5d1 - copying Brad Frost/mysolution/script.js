"use strict";

window.addEventListener("DOMContentLoaded", init);
const NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

function init() {
  createBubbles();
  const allCircles = svg.querySelectorAll("circle");
  allCircles.forEach(e => e.addEventListener("mouseover", changeColor));
}

function createBubbles() {
  for (let i = 0; i < 50; i++) {
    const circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", Math.ceil(Math.random() * 100));
    circle.setAttribute("cy", Math.ceil(Math.random() * 50));
    circle.setAttribute("r", Math.ceil(Math.random() * 10));
    svg.appendChild(circle);
  }
}
function changeColor(e) {
  e.target.style.fill = `hsl(${Math.ceil(Math.random() * 360)}, 50%, 40%)`;
}
