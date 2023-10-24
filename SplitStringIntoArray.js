// . Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];2

function splitStringByCount(inputString, count) {

    if (typeof inputString !=='string' || inputString.length == 0) return 'Invalid String';
    if (typeof count!=='number' || count<=0) 'Invalid count';
    if (count >= inputString.length) return "count is either equal to string's length or greater than string's length,so String can't be split";
  
    const result = [];
    for (let i = 0; i < inputString.length; i += count) {
      result.push(inputString.slice(i, i + count));
    }
  
    return result;
  }
  
  const inputString = "numenticaui";
  const count = 2;
  const splitArray = splitStringByCount(inputString, count);
  console.log(splitArray);
  