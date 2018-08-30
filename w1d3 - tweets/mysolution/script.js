"use strict";
const template = document.querySelector(".tweetTemp").content;
const tweetCount = 10;
const hashtag = "";
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
  /* clone.querySelector(".time").textContent = statuses. */
  clone.querySelector(".tweetText").textContent = aTweet.text;
  tweetBox.appendChild(clone);
}
fetchTweets();
