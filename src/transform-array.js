import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr) || typeof arr === 'number') {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(arr.length === 0) {
    return [];
}

  let result = arr.slice();

  if (result.indexOf('--double-next') >= 0) {
      let index = result.indexOf('--double-next');
    if(result[index+1] !== undefined) {
        result[index] = result[index+1];
    } else {
      result.pop();
    }
  }

  
  if (result.indexOf('--double-prev') >= 0) {
    let index = result.indexOf('--double-prev');
    if(result[index-1] !== undefined && result[index-2] !== '--discard-next'){
      result[index] = result[index-1];
    } else if (result[index-2] === '--discard-next') {
      result[index-2] = 0;
      result[index-1] = 0;
      result[index] = 0;
      result = result.filter(el => el !== 0);
    }
     else {
      result.shift();
    }
    

  }

  if (result.indexOf('--discard-prev') >= 0) {
    let index = result.indexOf('--discard-prev');
    if(result[index-2] !== '--discard-next') {
      let partBefore = [];
      let partAfter = [];
      for(let i=0; i < index-1; i++) {
        partBefore.push(result[i]);
      }
      for(let i=index+1; i < result.length; i++) {
        partAfter.push(result[i]);
      }
      result = partBefore.concat(partAfter);
    } else {
      result[index-2] = 0;
      result[index-1] = 0;
      result[index] = 0;
      result = result.filter(el => el !== 0);
    }
    
  }

  if (result.indexOf('--discard-next') >= 0) {
    let index = result.indexOf('--discard-next');
    let partBefore = [];
    let partAfter = [];
    for(let i=0; i < index; i++) {
      partBefore.push(result[i]);
    }
    for(let i=index+2; i < result.length; i++) {
      partAfter.push(result[i]);
    }
    result = partBefore.concat(partAfter);
  }
 return result;

}



