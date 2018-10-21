"use strict";
document.querySelectorAll("input").forEach(input => {
  if (input.focus() && input.checkValidity()) {
    input.nextElementSibling.focus();
  }
});
