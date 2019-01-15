/*
  Write a function called stringifyNumbers which takes in an
  object and finds all of the values which are numbers and
  converts them to strings.
*/

const stringifyNumbers = (obj) => {
  let newObj = Object.assign({}, obj);

  for (let key in newObj) {
    let isObject = typeof newObj[key] === 'object';
    let isNumber = typeof newObj[key] === 'number';

    if (isObject && !Array.isArray(newObj[key])) newObj[key] = stringifyNumbers(newObj[key])
    else if (isNumber) newObj[key] = String(newObj[key])
    else continue;
  }

  return newObj;
};


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj))

/* output

{
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}

*/