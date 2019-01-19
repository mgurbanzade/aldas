/*
  Write a function called naiveStringSearch which accepts a main string and a substring
  and returns the count of substring matches in main string
*/

const naiveStringSearch = (str, substr) => {
  let matches = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== substr[0]) continue;

    for (let j = 0; j < substr.length; j += 1) {
      if (str[i+j] !== substr[j]) break;
      if (j === substr.length - 1) matches += 1;
    }
  }

  return matches;
}


console.log(naiveStringSearch('shiko riko eko piko chiko', 'iko')) // 4
console.log(naiveStringSearch('forget the pickles', 'the')) // 1
console.log(naiveStringSearch('Lord of the rings', 'then')) // 0
