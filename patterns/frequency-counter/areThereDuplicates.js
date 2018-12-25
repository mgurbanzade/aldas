/*
  Implement a function called, areThereDuplicates which accepts a variable
  number of arguments, checks whether there are any duplicates among
  the arguments passed in.  You can solve this using the frequency
  counter pattern OR the multiple pointers pattern.

  Restrictions:

  Time - O(n)
  Space - O(n)
*/

const areThereDuplicates = (...args) => {
  const freq = {}

  for (let i of args) {
    freq[i] = (freq[i] || 0) + 1
  }

  for (let i in freq) {
    if (freq[i] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c','a')) // true
