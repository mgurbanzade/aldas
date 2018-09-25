// array must be sorted

const averagePair = (arr, targetVal) => {
  if (arr.length === 0) return false;
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let result;

  while (pointer1 < pointer2) {
    result = (arr[pointer1] + arr[pointer2]) / 2;
    if (result === targetVal) return true;
    else if (result < targetVal) pointer1 += 1;
    else pointer2 -= 1;
  }

  return false;
};

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
