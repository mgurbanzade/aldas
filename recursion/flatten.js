/*
  Write a recursive function called flatten which accepts an array of
  arrays and returns a new array with all values flattened.

  * add whatever parameters you deem necessary
*/

const flatten = (arr) => {
  if (arr.length === 0) return arr;
  let tempArr = [];

  const helper = (arr) => {
    if(!Array.isArray(arr[0])) tempArr.push(arr[0]);
    else tempArr = tempArr.concat(flatten(arr[0]));
    return arr.length > 1 ? helper(arr.slice(1)) : tempArr;
  };

  return helper(arr);
}


console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]