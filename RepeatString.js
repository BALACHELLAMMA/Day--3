// 7. Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;

function repeatString(inputString, inputCount){
  if (typeof inputString!=='string' || typeof inputCount!=='number') return 'Invalid string or count'

  if (inputString.length ==0 || inputCount<=0) return 'Empty string or if count is less than or equal to zero is not accepted'

  let result='';

  for (let count=1; count<=inputCount; count++){
      result+=inputString;
   }
  return result;
}

const string="arun";
const countValue = 3;

console.log(repeatString(string,countValue));