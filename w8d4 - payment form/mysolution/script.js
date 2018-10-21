"use strict";
document.querySelectorAll("input").forEach(input => {
  if (input.type == "number") {
    input.addEventListener("input", function() {
      if (input.checkValidity() && input.value.length == 2) {
        if (input.nextElementSibling.tagName != "input") {
          input.nextElementSibling.nextElementSibling.focus();
        }
        if (input.nextElementSibling == null) {
          input.parentElement.nextElementSibling.focus();
        } else {
          input.nextElementSibling.focus();
        }
      }
    });
  }
});
