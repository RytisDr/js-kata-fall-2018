"use strict";
function concatNPad(string, number) {
  let allHashtags = string.substring(
    string.indexOf("#"),
    string.lastIndexOf("#") + 1
  );
  let numberString = number.toString();
  if (numberString.length < 2) {
    numberString = numberString.padStart(2, "0");
  }
  if (numberString.length < allHashtags.length) {
    numberString = numberString.padStart(allHashtags.length, "0");
  }
  let newString = string.replace(allHashtags, numberString);
  return newString;
}
console.log(concatNPad("image###.png", 3));
