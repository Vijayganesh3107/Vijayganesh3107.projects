"use strict";

var str = "";

var generateno = function generateno() {
  for (var i = 0; i < 8; i++) {
    str += (Math.floor(Math.random() * (9 - 0)) + 0).toString();
  }

  return str;
};

var uniqueno = generateno();
console.log("The unique 8 digit cod egenrated is ".concat(uniqueno));