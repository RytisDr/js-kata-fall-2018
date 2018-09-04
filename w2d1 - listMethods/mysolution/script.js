"use strict";

function displayElement(element) {
  for (let i = 0; i < element.length; i++) {
    console.log(element[i]);
  }
}

listMethods("modify");
listMethods("info");
listMethods("newarray");

function listMethods(idParam) {
  let foundElement = document.getElementById(idParam);
  if (foundElement.id == idParam) {
    let liItemsFound = foundElement.querySelectorAll("ul li");
    displayElement(liItemsFound);
  }
}

// TODO: Create listMethods function
