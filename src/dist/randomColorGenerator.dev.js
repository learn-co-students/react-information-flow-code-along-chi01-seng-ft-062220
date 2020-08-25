"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomColor = getRandomColor;

// Nothing in this file needs to be altered (but it is your solution so feel free to!)
function getRandomColor() {
  // this function generates a random hex color from the letters below
  var letters = '123456789AB'; // <-- cutting off top end so we can lighten the color twice with 'reduceColor'

  var color = '#';

  for (var i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }

  return color;
}