// this function should check if second array has squared values of first array

const same = (arr1, arr2) => {
  // if arrays length does not match, return false
  if (arr1.length !== arr2.length) return false;

  // define empty objects to count frequency
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    /* if frequencyCounter1 has current value then increment its count
       else set its count to 1*/
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    /* if frequencyCounter2 has current value then increment its count
       else set its count 1*/
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // if frequencyCounter2 has not the square of key of frequencyCounter1, return false
    if (!(key ** 2 in frequencyCounter2)) return false;

    // if key of frequencyCounter1 !== to square of key of frequencyCounter2, return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
