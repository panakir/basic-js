const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res
  if(options.separator === undefined) {
    options.separator = "+";
  }
  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if(options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if(options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if(options.addition === null) {
    options.addition = "null";
  }
  
  let addArr = []
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition)
  }
  let additionStr = addArr.join(options.additionSeparator)
  
  let unit = str + additionStr
  let unitArr = []
  for(let i = 0; i < options.repeatTimes; i++) {
    unitArr.push(unit)
  }
  res = unitArr.join(options.separator)
  return res
}
  
module.exports = {
  repeater
};
