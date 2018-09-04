"use strict";
function findAll(arr, search) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === search) indexes.push(i);
  return indexes;
}

const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];
const catsAt = findAll(animals, "cat");
console.log(catsAt);
