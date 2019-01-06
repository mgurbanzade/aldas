/*
  Write a function called isSubsequence which takes in
  two strings and checks whether the characters in the first string
  form a subsequence of the characters in the second string.
  In other words, the function should check whether
  the characters in the first string appear somewhere in the
  second string, without their order changing.

  Your solution MUST have AT LEAST the following complexities:
  Time Complexity - O(N + M)
  Space Complexity - O(1)
*/

const isSubsequence = (str1, str2) => {
  let pt1 = 0;

  for (let pt2 = 0; pt2 < str2.length; pt2 += 1) {
    if (str1[pt1] === str2[pt2]) pt1 += 1;
    if (pt1 === str1.length) return true;
  }

  return false;
}


console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('yo', 'yo')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('aaa', "Madam, I'm Adam")) // true
console.log(isSubsequence('Thqckbrwnfxjmpdvrthlzydg', 'The quick brown fox jumped over the lazy dog')) // true