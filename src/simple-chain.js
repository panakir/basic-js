const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    value === undefined ? this.chainArr.push('( )') : this.chainArr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position > this.chainArr.length) {
      this.chainArr = []
      throw new Error ("You can't remove incorrect link!")
    }else {
      this.chainArr.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chainArr.reverse()
    return this
  },
  finishChain() {
    let chain = this.chainArr.join('~~')
    this.chainArr = []
    return chain
  }
};

module.exports = {
  chainMaker
};
