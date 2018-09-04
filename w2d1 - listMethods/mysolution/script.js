"use strict";

function displayElementForEachLoop(element) {
  //shows up with bullet points as optional
  console.log("\u2022" + element.innerHTML);
}
function displayElementForLoop(element) {
  for (let i = 0; i < element.length; i++) {
    console.log("\u2022" + element[i].innerHTML);
  }
}
listMethods("modify", "for");
listMethods("info", "forEach");
listMethods("newarray", "fo");

function listMethods(idParam, loopArg) {
  let foundElement = document.getElementById(idParam);
  if (foundElement.id == idParam) {
    let liItemsFound = foundElement.querySelectorAll("ul li");
    let h2 = foundElement.querySelector("h2");
    console.log(h2.textContent);
    if (loopArg == "for") {
      console.log("with for loop method");
      displayElementForLoop(liItemsFound);
    } else if (loopArg == "forEach") {
      console.log("with forEach loop method");
      liItemsFound.forEach(displayElementForEachLoop);
    } else {
      console.log(
        "undefined or incorrectly defined loopArg, goes to forEach loop method"
      );
      liItemsFound.forEach(displayElementForEachLoop);
    }
  }
}

// TODO: Create listMethods function
