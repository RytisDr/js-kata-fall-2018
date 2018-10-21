"use strict";
document.querySelectorAll("input").forEach(input => {
  if (input.type == "number") {
    input.addEventListener("input", function() {
      if (
        input.checkValidity() &&
        input.value.length == 2 &&
        (input.name == "expiration-month" || input.name == "expiration-year")
      ) {
        if (!input.nextElementSibling) {
          input.parentElement.nextElementSibling.focus();
        } else {
          input.nextElementSibling.focus();
        }
      }
      if (
        input.name == "card-number" &&
        input.checkValidity() &&
        input.value.length == 16
      ) {
        document.querySelector('input[name="expiration-month"]').focus();
      }
    });
  }
});
