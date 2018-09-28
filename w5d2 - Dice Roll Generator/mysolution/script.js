"use strict";
/* var myChart = new Chart(ctx, {...}); */
import Chart from "chart.js";
const values = {
  totalRolls: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};
window.addEventListener("DOMContentLoaded", init);

function init() {
  let numberOfRolls = 700000;
  values.totalRolls = numberOfRolls;

  for (let i = 0; i < numberOfRolls; i++) {
    let roll = Math.ceil(Math.random() * 6);

    assign(roll);
    //console.log(roll);
    //for (let a = 0; a < 6; a++) {

    //let numberArr = Array.from(values[a]);
    //roll.push(numberArr);
  }
  console.table(values);
}
//}
function assign(roll) {
  values[roll]++;
}
