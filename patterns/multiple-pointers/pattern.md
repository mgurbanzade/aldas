**Multiple Pointers**

Multiple pointers is a way to match elements in a collection and check them for any purpose using multiple pointers. The idea is to move them in a specific direction so that you can check multiple elements within a single iteration. This helps to optimize time complexity.

Example:

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zeros or undefined if a pair does not exist

Bad:

```javascript
const sumZero = (arr) => {
  // iterate over the array n x n times to check the sum of each elements
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i+1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}
```

Good:

```javascript
const sumZero = (arr) => {
  // create two pointers
  let left = 0;
  let right = arr.length - 1;

  // unless pointers meet each other
  while (left < right) {
    // sum their values to check
    let sum = arr[left] + arr[right];
    // return values if their sum is 0
    if (sum === 0) return [arr[left], arr[right]];
    // if sum is greater than 0, then we move the right pointer towards center
    else if (sum > 0) right -= 1;
    // if sum is lower than 0, then we move the left pointer towards center
    else left += 1;
  }
}
```

The first solution has a time complexity of O(n2), while the second O(n).
