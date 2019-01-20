**Bubble sort**

1. Create loop and start iterating from the end of the array.
2. Create a variable noSwap.
3. We're going to compare current element with the element that goes before it. (i with i-1)
4. Set noSwap to true before the inner loop
5. Create an inner loop and set its breakpoint to i-1. Compare arr[j] with arr[j+1] and swap them.
6. Set noSwap to false.
7. Outside of the inner loop write a conditional statement: if noSwaps then break.
8. Return array.

We need to check if there were swaps or not with noSwap boolean.
You stop the iteration when the array is already sorted. It's most needed when the input array is nearly sorted.