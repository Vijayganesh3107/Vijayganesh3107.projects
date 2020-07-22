"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var obj = {
  title: "Vijay",
  author: "Vijay Ganesh",
  dateofpublish: "23/04/13"
};

function display(obj) {
  var title = obj.title,
      rest = _objectWithoutProperties(obj, ["title"]);

  console.log(title);
  console.log(rest);
}

display(obj);