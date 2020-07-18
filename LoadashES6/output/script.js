"use strict";

var floorNo = function floorNo(no) {
  return Math.floor(no);
};

var number = floorNo(23.45);

var concat1 = function concat1(number) {
  return console.log("The rounded number is ".concat(number));
};

concat1(number);

var sliceArray = function sliceArray(array, start, end) {
  var arr = [];

  for (var i = start; i < end; i++) {
    arr.push(array[i]);
  }

  console.log(arr);
};

var array = [1, 2, 3, 4, 5];
sliceArray(array, 2, 5);

var foreach1 = function foreach1(array) {
  array.forEach(function (item) {
    console.log(item);
  });
};

foreach1(array);

var lowerCase = function lowerCase(str) {
  return str.toLowerCase();
};

var str = lowerCase("HELLO");
console.log(str);

var filterArray = function filterArray(array) {
  var op = array.filter(function (item) {
    return item > 2;
  });
  console.log(op);
};

filterArray(array);