"use strict";

const fullName = "Marcus Folmer Jaes";

let lastIndex = fullName.lastIndexOf(" ");
let startIndex = fullName.indexOf(" ");

console.log(fullName.substring(0, startIndex));
console.log(fullName.substring(startIndex+1, lastIndex));
console.log(fullName.substring(lastIndex+1));
