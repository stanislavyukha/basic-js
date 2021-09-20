import { NotImplementedError } from '../extensions/index.js';

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
  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }) {

  if(typeof str !== 'string') {
    str += '';
  }
  if(typeof addition !== 'string' && addition !== undefined) {
    addition += '';
  }
  let result = str;
  if(addition) {
    if(additionRepeatTimes) {
      let additionPart = '';
      let separatorAddition = additionSeparator || '|';
      if(additionRepeatTimes >1 ) {
        for(let i = 0; i <additionRepeatTimes; i++ ) {
          if(i === additionRepeatTimes - 1) {
            additionPart += addition;
          } else {
            additionPart += addition + separatorAddition;
          }
        }
      } else if (additionRepeatTimes === 1) {
        additionPart = addition;
      }
        result += additionPart;
     
    } else {
      result += addition;
    }
  }
    
  let separatorMain = separator || '+';
  let mainPart = result;
  result = '';
  if(repeatTimes) {
    for(let i = 0; i <repeatTimes; i++) {
      if(i === repeatTimes - 1) {
        result += mainPart + '';
      } else {
        result += mainPart + separatorMain;
      }
    }
  } else {
    result = mainPart;
  }

  return result;

}


// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });
//'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
//'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'

// repeater('REPEATABLE_STRING',{ repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })
// -REPEATABLE_STRINGADDITION+REPEATABLE_STRINGADDITION
//'REPEATABLE_STRINGADDITION+REPEATABLE_STRINGADDITION'
//'+REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
// +REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION




// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 });
//  'la+sla+sla+';

//'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
//'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// (STR__Addition * (addition repeat times)__Addition-Separator__Separator ) * (repeat times)