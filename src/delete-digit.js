const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('')
  let resArr = []
  for (let i = 0;  i < arr.length; i++) {
  let number = ''
  for (let j = 0; j < arr.length; j++) {
      if(arr[j] !== arr[i]) {
          number = number + arr[j]
      }
      resArr.push(+number)
  }
  }
  let maxNumber = resArr[0]
  for (let i = 1; i < resArr.length; i++) {
      if(resArr[i] > maxNumber) {
          maxNumber = resArr[i]
      }
  }
  return maxNumber
}

module.exports = {
  deleteDigit
};
