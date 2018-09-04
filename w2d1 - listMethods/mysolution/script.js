"use strict";

function displayElement(element) {
  //shows up with bullet points as optional
  console.log("\u2022" + element.innerHTML);
  /*   for (let i = 0; i < element.length; i++) {
    //console.log(element[i]);
  } */
}

listMethods("modify");
listMethods("info");
listMethods("newarray");

function listMethods(idParam) {
  let foundElement = document.getElementById(idParam);
  if (foundElement.id == idParam) {
    let liItemsFound = foundElement.querySelectorAll("ul li");
    let h2 = foundElement.querySelector("h2");
    console.log(h2.textContent);
    liItemsFound.forEach(displayElement);
    //displayElement();
  }
}

// TODO: Create listMethods function
