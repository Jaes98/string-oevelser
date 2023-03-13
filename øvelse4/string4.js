"use strict";

const tekst = "Mit navn er Marcus";

let navn = "Marcus";

let startIndex = tekst.lastIndexOf(" ");
let lastWord = tekst.substring(startIndex+1);
console.log(lastWord);

let myName = tekst.substring(startIndex);

console.log(myName);