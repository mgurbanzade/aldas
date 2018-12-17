/*
Given two strings, write a function to determine
if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman

You may assume the string contains only lowercase alphabets.
Time Complexity - O(n)
*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const freqCounter1 = {}
  const freqCounter2 = {}

  for (let i of str1) {
    freqCounter1[i] = (freqCounter1[i] || 0) + 1;
  }

  for (let i of str2) {
    freqCounter2[i] = (freqCounter2[i] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpanama')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
