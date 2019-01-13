/*
  Write a recursive function called isPalindrome which returns true
  if the string passed to it is a palindrome
  (reads the same forward and backward). Otherwise it returns false.

  * add whatever parameters you deem necessary
*/


const isPalindrome = (str) => {
  let charsEq = str[0] === str[str.length - 1];
  let substr = str.split('').splice(1, str.length - 2).join('')
  return str.length > 0 ? charsEq && isPalindrome(substr) : charsEq;
};

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false