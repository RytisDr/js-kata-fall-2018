"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  buttonPrompt();
}
function buttonPrompt() {
  document.querySelectorAll("#prompt button").forEach(button => {
    button.addEventListener("click", function() {
      if (button.id == "males") {
        fetchMales();
      }
      if (button.id == "females") {
        fetchFemales();
      } else if (button.id == "both") {
        fetchMales();
        fetchFemales();
      }
      document.querySelector("#prompt").style.display = "none";
    });
  });
}

function fetchMales() {
  fetch("json/males.json")
    .then(e => e.json())
    .then(getUsers);
}

function fetchFemales() {
  fetch("json/females.json")
    .then(e => e.json())
    .then(getUsers);
}
function getUsers(data) {
  data.results.forEach(result => showUser(result));
}
function showUser(user) {
  ///creates a div for each user (I am going to fetch all and stack them)
  let userSection = document.querySelector("#user");
  let userDiv = document.createElement("div");
  userSection.appendChild(userDiv);

  let template = document.querySelector("template").content;
  let clone = template.cloneNode(true);
  clone.querySelector("img").src = user.picture.large;
  clone.querySelector("#firstN").textContent = user.name.first;
  clone.querySelector("#age span").textContent = user.dob.age;
  clone.querySelector("#from span").textContent = user.nat;
  userDiv.appendChild(clone);

  //this is hammer.js from http://hammerjs.github.io
  let userDivSwipes = new Hammer(userDiv);
  userDivSwipes.on("swipeleft", function() {
    notInterested(userDiv);
  });
  userDivSwipes.on("swiperight", function() {
    interested(userDiv, user);
  });
}

function notInterested(div) {
  div.classList.add("goLeft");
  div.addEventListener("transitionend", function() {
    div.remove();
  });
}
function interested(div, user) {
  div.classList.add("goRight");
  div.addEventListener("transitionend", function() {
    div.remove();
    if (user.inToYou) {
      document.querySelector(".match").classList.remove("dontDisplay");
      document.querySelector(".match h1").textContent = `You matched with ${
        user.name.first
      }!`;
      setTimeout(function() {
        document.querySelector(".match").classList.add("dontDisplay");
      }, 1000);
    }
  });
}
