// this function receives the Length for subarray (num)
// and returns max sum of subarray items

// complexity = O(n)

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    // sum of elements from 0 to num index
    maxSum += arr[i];
  }

  // temporarily save the sum of subarray items
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    /* in order to iterate over an array effectively,
       we don't sum every fucking value.
       instead, we subtract previous value from a
       tempSum and add next value to it */
    tempSum = tempSum - arr[i - num] + arr[i];
    // if tempSum is bigger than maxSum then we update maxSum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
