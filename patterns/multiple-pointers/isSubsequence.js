const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 <= str1.length) {
    let substr = str1.slice(pointer1, pointer2 + 1);
    if (str2.includes(substr)) return true;
    pointer1 += 1;
    pointer2 += 1;
  }

  return false;
};

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('ab', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false
