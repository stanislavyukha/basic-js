import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  n = n + "";
  let arr = [];
  for(let i=0; i < n.length; i++) {
    arr.push(n.replace(n[i],''));
  }
  return Math.max(...arr);
}

