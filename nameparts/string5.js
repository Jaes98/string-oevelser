"use strict";

const fullName = "Marcus Folmer Jaes";

let startIndex = fullName.lastIndexOf(" ");
let lastWord = fullName.substring(startIndex + 1);

let firstSpace = fullName.indexOf(" ");
let firstsSpace = fullName.substring(firstSpace + 1);

console.log(fullName.substring(0, firstSpace))
console.log(fullName.substring(firstsSpace, startIndex))
console.log(lastWord);