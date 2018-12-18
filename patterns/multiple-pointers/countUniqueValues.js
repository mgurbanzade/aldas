/*
  Implement a function called countUniqueValues,
  which accepts a sorted array, and counts the unique values
  in the array. There can be negative numbers in the array,
  but it will always be sorted.

  Time Complexity - O(n)
  Space Complexity - O(n)
*/

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let pt1 = 0;

  for (let pt2 = 1; pt2 < arr.length; pt2 += 1) {
    if (arr[pt1] !== arr[pt2]) {
      pt1 += 1;
      arr[pt1] = arr[pt2];
    }
  }

  return pt1 + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([])); // 0
