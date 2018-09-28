"use strict";
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
  let numberOfRolls = 500;
  values.totalRolls = numberOfRolls;
  for (let i = 0; i < numberOfRolls; i++) {
    let roll = Math.ceil(Math.random() * 6);
    createAndAssign(roll);
  }
  createChart();
}
function createAndAssign(roll) {
  values[roll]++;
}
function createChart() {
  let myChart = document.querySelector("#myChart");
  let data = {
    datasets: [
      {
        data: [
          values[1],
          values[2],
          values[3],
          values[4],
          values[5],
          values[6]
        ],
        backgroundColor: [
          "hsl(40, 50%, 50%)",
          "hsl(120, 50%, 50%)",
          "hsl(80, 50%, 50%)",
          "hsl(160, 50%, 50%)",
          "hsl(0, 50%, 50%)",
          "hsl(200, 50%, 50%)"
        ]
      }
    ],
    labels: [
      "Rolled 1",
      "Rolled 2",
      "Rolled 3",
      "Rolled 4",
      "Rolled 5",
      "Rolled 6"
    ]
  };
  new Chart(myChart, {
    data: data,
    type: "polarArea"
  });
}
