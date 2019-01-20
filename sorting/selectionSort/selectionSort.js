const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
  }

  return arr;
};

console.log(selectionSort([5, 2, 4, 29, 39, 23, 12, 90, 21, 100]))