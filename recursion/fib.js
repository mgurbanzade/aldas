/*
  Write a recursive function called fib which accepts a number
  and returns the Nth number in the Fibonacci sequence.
  Recall that the Fibonacci sequence is the sequence of whole
  numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
  where every number thereafter is equal to the sum of the
  previous two numbers.

  * add whatever parameters you deem necessary
*/

const fib = (pos, temp = [1,1]) => {
  temp.push(temp[0] + temp[1]);
  return pos === 1 ? temp[0] : fib(pos-1, temp.slice(1))
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465