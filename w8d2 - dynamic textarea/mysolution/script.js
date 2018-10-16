"use strict";

//BETTER DO THIS WITH SOMETHING ELSE THAN TEXTAREA, AS IT IS NOT FLEXIBLE ENOUGH
//text scales down, but the text are does as well
const textArea = document.querySelector("textarea");
textArea.addEventListener("keydown", resizeOnKeystroke);
function resizeOnKeystroke() {
  const inputLength = textArea.value.length;
  /* This is the ternary operator '?'; https://javascript.info/ifelse#ternary-operator, */
  //The stupid version
  /* const textSize =
    inputLength < 2
      ? "5em"
      : inputLength < 5
        ? "4.5em"
        : inputLength < 10
          ? "4em"
          : inputLength < 15
            ? "3.5em"
            : inputLength < 20
              ? "3em"
              : inputLength < 25
                ? "2.5em"
                : inputLength < 30
                  ? "2em"
                  : inputLength < 35
                    ? "1.5em"
                    : inputLength < 40
                      ? "1em"
                      : "0.5em"; */
  //the less stupid version
  let textSize = 5;
  for (let i = 0; i < inputLength; i++) {
    textSize -= 0.04;
  }
  //this creates one h1 with a text if text is long enough
  if (inputLength > 100 && document.querySelector("h1") == undefined) {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = "You talk too much.";
  }
  textArea.style.fontSize = textSize + "em";
}
