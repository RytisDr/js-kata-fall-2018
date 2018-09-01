"use strict";
const template = document.querySelector(".tweetTemp").content;
const tweetCount = 10;
let hashtag;
const tweetBox = document.querySelector(".tweetSection");
function fetchTweets(hashtag) {
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
  /* clone.querySelector(".hashtags").textContent */
  aTweet.entities.hashtags.forEach(function(hashtagInTweet) {
    let a = document.createElement("a");
    a.textContent = hashtagInTweet.text;

    clone.querySelector(".hashtags").appendChild(a);
    a.addEventListener("click", function() {
      hashtag = hashtagInTweet.text;
      console.log(hashtag);
      fetchTweets(hashtag);
    });
    /* let hashtags = (clone.querySelector(".hashtags").textContent =
      hashtag.text); */
  });
  tweetBox.appendChild(clone);
}
fetchTweets();
