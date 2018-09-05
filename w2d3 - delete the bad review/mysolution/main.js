"use strict";
const allReviews = document.querySelectorAll("ul li");
window.addEventListener("DOMContentLoaded", allReviews.forEach(removeBadOnes));

function removeBadOnes(review) {
  if (review.querySelector("span").textContent < 8) {
    review.remove();
  }
}
