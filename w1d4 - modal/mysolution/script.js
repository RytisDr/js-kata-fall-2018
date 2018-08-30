"use strict";
const detailsLinks = document.querySelectorAll(".detailsLnk");
const modal = document.querySelector("#modal_container");

detailsLinks.forEach(function(link) {
  link.addEventListener("click", showModal);
});
function showModal() {
  modal.classList.remove("hidden");
  document.querySelector("#closebutton").addEventListener("click", hideModal);
}

function hideModal() {
  modal.classList.add("hidden");
}
