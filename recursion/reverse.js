/*
  Write a recursive function called reverse  which accepts a string
  and returns a new string in reverse.

  * add whatever parameters you deem necessary
*/

const reverse = (str) => {
  let substr = str.split('').slice(1, str.length - 1).join('')
  return str.length > 1 ? str[str.length-1] + reverse(substr) + str[0] : str;
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'