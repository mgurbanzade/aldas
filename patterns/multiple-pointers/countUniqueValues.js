// complexity = O(n^2)

const countUniqueValues = (arr) => {
  // set first and second indices
  let first = 0
  let second = 1;

  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      // if first value equals to second increment second
      second += 1;
    } else {
      // if they are not equal, then we should increment first and copy second value to first
      // by doing this, we make sure that all unique values are on the left side of the array
      first += 1;
      arr[first] = arr[second];
    }
  }

  // return the number of unique values
  return arr.indexOf(arr[first]) + 1;
};


// better solution

// complexity = O(n)
const countUniqueValues1 = (arr) => {
  let a = 0

  for (let b = 1; b < arr.length; b += 1) {
    if (arr[a] !== arr[b]) {
      a += 1;
      arr[a] = arr[b];
    }
  }

  return a + 1;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
