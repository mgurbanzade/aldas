const areThereDuplicates = (...arr) => {
  let a = {};
  let duplicatePresents = false;

  for (let i of arr) {
    a[i] = (a[i] || 0) + 1;

    if (a[i] > 1) {
      duplicatePresents = true;
      break;
    }
  }

  return duplicatePresents;
};

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2, 3)) // true

