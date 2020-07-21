"use strict";

var str = "";
var arr = [];
var count = 0;

function generateRandomNumber() {
  no = (Math.floor(Math.random() * (9 - 0)) + 0).toString();

  if (arr.length == 0) {
    arr.push(no);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == no) break;else {
        count++;
        continue;
      }
    }

    if (count == arr.length) {
      arr.push(no);
    }

    count = 0;
  }

  if (arr.length < 8) generateRandomNumber();
}

generateRandomNumber();
console.log("The Gnerated random number is ".concat(arr.join("")));