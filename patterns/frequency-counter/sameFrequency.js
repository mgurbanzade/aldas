const sameFrequency = (num1, num2) => {
  let first = String(num1).split('');
  let second = String(num2).split('');

  if (first.length !== second.length) return false;

  let firstFreq = {};
  let secondFreq = {};

  for (let i = 0; i < first.length; i += 1) {
    firstFreq[first[i]] = (firstFreq[first[i]] || 0) + 1;
    secondFreq[second[i]] = (secondFreq[second[i]] || 0) + 1;
  }

  let isSame;

  for (let i in firstFreq) {
    isSame = firstFreq[i] === secondFreq[i];
    if (!isSame) break;
  }

  return isSame;
};

console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(34, 14)); // false
