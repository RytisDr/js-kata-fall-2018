"use strict";

//BETTER DO THIS WITH SOMETHING ELSE THAN TEXTAREA, AS IT IS NOT FLEXIBLE ENOUGH

const textArea = document.querySelector("textarea");
textArea.addEventListener("keydown", resizeOnKeystroke);
function resizeOnKeystroke() {
  const inputLength = textArea.value.length;
  /* This is the ternary operator '?'; https://javascript.info/ifelse#ternary-operator, */
  //text scales down, but the text are does as well
  const textSize =
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
                      : "0.5em";

  textArea.style.fontSize = textSize;
  console.log(textSize);
}
