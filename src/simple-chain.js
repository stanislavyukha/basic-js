import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || !Number.isInteger(position) || position > this.chain.length) {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain[position - 1] = '';
    this.chain = this.chain.filter(el => el !== '');
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain.length = 0;
    return result;
  }
};

          
                