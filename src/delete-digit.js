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
  const res = []
  const numberToString = n.toString() 
  for(let i = 0; i < numberToString.length; i++) {
    res.push(numberToString.slice(0, i) + numberToString.slice(i + 1))
  }
   
  return Math.max(...res.map(el => Number(el)))
}

module.exports = {
  deleteDigit
};
