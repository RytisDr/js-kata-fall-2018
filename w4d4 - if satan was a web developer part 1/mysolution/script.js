"use strict";
let number = 0;
document.querySelector("#plus").addEventListener("click", add);

function add() {
  if (number < 9999999999) {
    number++;
  }
  let nrString = number.toString();
  nrString = nrString.padStart(10, "0");
  nrString = `(+${nrString.slice(0, 2)})${nrString.slice(
    2,
    4
  )} ${nrString.slice(4, 6)} ${nrString.slice(6, 10)}`;
  document.querySelector("h2").textContent = nrString;
}
