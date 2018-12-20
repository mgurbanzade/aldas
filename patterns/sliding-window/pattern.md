**Sliding Window**

This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

Example:
Implement a function called maxSubarraySum which accepts 1 array and a number (num). The function should find maximum sum of (num) consecutive elements in the array.

Bad:

```javascript
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;

  // define max sum
  const max = -Infinity;

  // iterate unless num overflows the array
  for (let i = 0; i < arr.length - num + 1; i += 1) {
    let temp = 0;

    // calculate sum of temp window
    for (let j = 0; j < num; j += 1) {
      temp += arr[i + j];
    }

    // reassign max found value
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

Good:

```javascript
const maxSubarraySum = (arr, num) => {
  // define initial maxSum and tempSum vars
  let maxSum = 0;
  let tempSum = 0;
  // return null if num overflows the array
  if (num > arr.length) return null;

  for (let i = 0; i < num; i += 1) {
    // get sum of window elements
    maxSum += arr[i];
  }

  // assign it to temp var
  tempSum = maxSum;

  for (let i = num; i < arr.length; i += 1) {
    // there's no need to sum every elements in the array
    // all you need is to subtract left value and add right
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
```

First solution has a time complexity of O(n2), the second is O(n)
