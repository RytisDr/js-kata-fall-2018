"use strict";
import Chart from "chart.js";
//this is my polar area chart variable, it will be filled with a function and reused globally.
let polarArea;
//these are the initial values for the data that I am going to fill
let values = {
  totalRolls: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};
///creates empty graph on DOM loaded
window.addEventListener("DOMContentLoaded", init);
///add event listener on roll button, check the value before proceeding
document
  .querySelector("#roll")
  .addEventListener("click", function checkValue() {
    if (document.querySelector("input").value > 0) {
      let numberOfRolls = document.querySelector("input").value;
      init(numberOfRolls);
    }
  });

function init(numberOfRolls) {
  /////initiates with number of rolls(if provided)
  values.totalRolls = numberOfRolls;
  ///rolls the dice specified number of times
  for (let i = 0; i < numberOfRolls; i++) {
    let roll = Math.ceil(Math.random() * 6);
    ///assign the rolled number to the object
    createAndAssign(roll);
  }
  /* For the first time the function runs,
  creates empty chart as values are empty at first */
  if (polarArea == undefined) {
    createChart();
  } else {
    ///if passed the input, inject data into graph
    polarArea.data.datasets[0].data = [
      values[1],
      values[2],
      values[3],
      values[4],
      values[5],
      values[6]
    ];
    ///chart.js function to update the graph(animated)
    polarArea.update();
    //if the graph is not empty (as we are in else statement), clear data upon btn click.
    document.querySelector("#clear").addEventListener("click", clearData);
  }
}

function createAndAssign(roll) {
  values[roll]++;
}

function createChart() {
  let myChart = document.querySelector("#myChart");
  let data = {
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          "hsl(40, 50%, 50%)",
          "hsl(260, 50%, 50%)",
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

  /* create chart(grab DOM canvas, input data and set the chart.js type)
  store this in a variable, as it will be reused for updating and clearing data */
  polarArea = new Chart(myChart, {
    data: data,
    type: "polarArea"
  });
}
function clearData() {
  //reset stored values
  for (let obj in values) {
    values[obj] = 0;
  } //^this is the loop version of the one below
  /* values = {
    totalRolls: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }; */
  //reset graph values
  polarArea.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
  polarArea.update();
}
