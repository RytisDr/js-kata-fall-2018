"use strict";
let urlParams = new URLSearchParams(window.location.search);
let hashtag = urlParams.get("hashtag");
const template = document.querySelector(".tweetTemp").content;
let tweetCount = 50;

const tweetBox = document.querySelector(".tweetSection");
function fetchTweets() {
  let endP = "https://kea-alt-del.dk/twitter/api/?_embed&count=" + tweetCount;
  if (hashtag) {
    endP =
      "https://kea-alt-del.dk/twitter/api/?_embed&count=" +
      tweetCount +
      "&hashtag=" +
      hashtag;
  }
  fetch(endP)
    .then(e => {
      return e.json();
    })
    .then(showTweets);
}
function showTweets(data) {
  data.statuses.forEach(showSingleTweet);
}
function showSingleTweet(aTweet) {
  let clone = template.cloneNode(true);
  clone.querySelector(".time").textContent = aTweet.created_at;
  clone.querySelector(".tweetText").textContent = aTweet.text;

  aTweet.entities.hashtags.forEach(function(hashtagInTweet) {
    let a = document.createElement("a");
    a.textContent = hashtagInTweet.text;
    a.href = "?hashtag=" + hashtagInTweet.text;
    clone.querySelector(".hashtags").appendChild(a);
  });
  tweetBox.appendChild(clone);
}

fetchTweets();
