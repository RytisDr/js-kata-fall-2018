"use strict";
function concatNPad(string, number) {
  let numberString = number.toString();
  if (numberString.length < 2) {
    numberString = numberString.padStart(2, "0");
  }
  let allHashtags = string.substring(
    string.indexOf("#"),
    string.lastIndexOf("#") + 1
  );
  let newString = string.replace(allHashtags, numberString);
  return newString;
}
console.log(concatNPad("image#.jpg", 1));
