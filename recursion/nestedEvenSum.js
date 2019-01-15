/*
  Write a recursive function called nestedEvenSum.
  Return the sum of all even numbers in an object which may
  contain nested objects.

  * add whatever parameters you deem necessary
*/

const nestedEvenSum = (obj) => {
  let sumOfEvenNums = 0;

  for (let key in obj) {
    let isInt = Number.isInteger(obj[key]);
    let isEven = obj[key] % 2 === 0;

    if (isInt && isEven) sumOfEvenNums += obj[key]
    else if (typeof obj[key] === 'object') sumOfEvenNums += nestedEvenSum(obj[key])
    else continue;
  }

  return sumOfEvenNums;
}


const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10