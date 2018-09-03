"use strict";

function displayElement(element) {
  console.log(element.textContent);
}

listMethods("modify");
/* listMethods("info");
listMethods("newarray"); */

function listMethods(idParam) {
  let foundElement = document.getElementById(idParam);
  if (foundElement.id == idParam) {
    let liItems = foundElement.querySelectorAll("ul li");
    console.log(liItems);
  }
}
// TODO: Create listMethods function
