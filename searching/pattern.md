**Binary Search**

This algorithm works only for sorted arrays.

1. Create 3 pointers: start, end and middle. Start is 0, end is arr.length - 1 and mid is average of start + end

2. Loop until your arr[mid] value eq to element, or start pointer is <= end.
3. If the element is greater than your arr[mid] value, increment it by 1 and assign it to start.
4. Else if the element is less than your arr[mid] value, decrement it by 1 and assign it to end.
5. Recalculate the average of start + end.
6. At some point the loop will stop and you have to return either the element you've found or -1.