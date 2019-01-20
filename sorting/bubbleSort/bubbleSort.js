const bubbleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwaps = false
      }
    }

    if (noSwaps) break;
  }

  return arr;
};

console.log(bubbleSort([5,2,4,29,39,23,12,90,21,100]))