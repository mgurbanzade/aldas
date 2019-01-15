/*
  Write a function called collectStrings which accepts an object
  and returns an array of all the values in the object that
  have a typeof string
*/

const collectStrings = (obj) => {
  let newArr = [];

  for (let key in obj) {
    let isObject = typeof obj[key] === 'object';
    let isString = typeof obj[key] === 'string';

    if (isString) newArr.push(obj[key])
    else if (isObject) newArr = newArr.concat(collectStrings(obj[key]))
    else continue;
  }

  return newArr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])