"use strict";

const input = "marcus";

let output =
  input.substring(0, 2).toLowerCase() +
  input.charAt(2).toUpperCase() +
  input.substring(3).toLowerCase();

console.log(output);