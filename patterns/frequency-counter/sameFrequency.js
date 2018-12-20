const sameFrequency = (num1, num2) => {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const str1Frequency = {};
  const str2Frequency = {};

  for (let i = 0; i < str1.length; i += 1) {
    str1Frequency[str1[i]] = (str1Frequency[str1[i]] || 0) + 1;
    str2Frequency[str2[i]] = (str2Frequency[str2[i]] || 0) + 1;
  }

  for (let i in str1Frequency) {
    if (str1Frequency[i] !== str2Frequency[i]) return false;
  }

  return true;
};

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

// shorter way
const sameFrequency2 = (num1, num2) => {
  if (String(num1).length !== String(num2).length) return false;
  const digits = String(num1) + String(num2);
  let repeatingDigits = 0;

  digits.split('').map(el => {
    if (digits.replace(el, '').includes(el)) repeatingDigits += 1;
  })

  return digits.length === repeatingDigits;
};
