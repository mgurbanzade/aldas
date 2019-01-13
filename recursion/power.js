/*
  Write a function called power which accepts a base and
  an exponent. The function should return the power of the base
  to the exponent. This function should mimic the functionality
  of Math.pow() - do not worry about negative bases and exponents.
*/

// One-liner
const power = (base, exp) =>
  exp === 0 ? 1 : base * power(base, exp - 1)

// Obvious
// const power = (base, exp) => {
//   if (exp === 0) return 1;
//   let res = 1;

//   const helper = (exp) => {
//     if (exp === 0) return;
//     res *= base;
//     return helper(exp - 1);
//   };

//   helper(exp);
//   return res;
// };



console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
