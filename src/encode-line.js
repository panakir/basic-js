const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1
  const res = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else {
      res.push( counter > 1 ? counter + str[i] : str[i])
      counter = 1
    }
  }

  return res.join('')
}

module.exports = {
  encodeLine
};
