"use strict";
const promptBox = document.querySelector("#promptBox");
const agreeBtn = document.querySelector("#btn1");
const agreeNicelyBtn = document.querySelector("#btn2");
const promptText = document.querySelector("#mainH1");
window.addEventListener("load", function drop() {
  promptBox.classList.add("show");
  agreeBtn.addEventListener("click", agreed);
  agreeNicelyBtn.addEventListener("click", agreed);
});
function agreed(e) {
  if (e.currentTarget == agreeBtn) {
    promptText.textContent = "More enthusiasm next time!";
  } else {
    promptText.textContent = "That-a-boy!";
  }
}
