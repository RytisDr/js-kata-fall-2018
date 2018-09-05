"use strict";
//CORE FUNCTION
/*const allReviews = document.querySelectorAll("ul li");
window.addEventListener("DOMContentLoaded", allReviews.forEach(removeBadOnes));

function removeBadOnes(review) {
  if (review.querySelector("span").textContent < 8) {
    review.remove();
  }
}
 */
//FUNCTION WITH 2 ARGUMENTS
window.addEventListener("DOMContentLoaded", removeBadOnes("li", 7));

function removeBadOnes(selector, minScore) {
  let allSelectedReviews = document.querySelectorAll(selector);
  allSelectedReviews.forEach(function(review) {
    if (review.querySelector("span").textContent < minScore) {
      review.remove();
    }
  });
}
