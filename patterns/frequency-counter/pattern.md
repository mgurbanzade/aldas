**Frequency Counter**

Challenge:
Find out whether second array includes squared elements of the first array

Bad:

```javascript
const same = (arr1, arr2) => {
  // return false if arrays don't match
  if (arr1.length !== arr2.length) return false;

  for (let i of arr1) {
    // // check if all elements has their correspondent squared value
    let correctIndex = arr2.indexOf(i ** 2);

    // // return false if at least one element has not its squared value
    if (correctIndex === -1) return false;

    // get rid of the element from second array if all checks passed
    arr2.splice(correctIndex, 1);
  }

  return true
}
```

Good:
```javascript
const same = (arr1, arr2) => {
  // return false if arrays don't match
  if (arr1.length !== arr2.length) return false;

  // create two empty objects. We will populate them with element and its appearance frequency (key: value)
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // get the frequency count of each item in arr1
  for (let val of arr1) {     // get the count of value in object and add +1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // the same goes for second array and object
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // check if the key in first object has its squared key in second object
    if (!(key ** 2 in frequencyCounter2)) return false;
    // check if the frequency of the key in first object matches the frequency of the key in second object
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
```
Although the first solution is shorter than the second one, its time complexity is O(n2) because of nested loop (indexOf). The second solution has a time complexity of O(n).
