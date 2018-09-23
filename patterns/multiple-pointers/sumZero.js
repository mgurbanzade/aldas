// this function should return two values with sum of 0
// input array must be already sorted. Otherwise algorithm won't work

const sumZero = (arr) => {
  // set left and right indices
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // get sum of current values
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      // if sum is 0, return an array with current values
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // if sum is more than 0, then we should move right index towards center
      right -= 1;
    } else {
      // if sum is less than 0, then we should move left index towards center
      left += 1;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3]
