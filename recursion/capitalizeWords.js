/*
  Write a recursive function called capitalizeWords.
  Given an array of words, return a new array containing each word
  capitalized.

  * add whatever parameters you deem necessary
*/

const capitalizeWords = (arr) =>
  arr.length > 0 ? [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1))) : arr

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']