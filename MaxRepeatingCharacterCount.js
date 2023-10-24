// 4. Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// since a has more repeating simaltaneously

function findMaxRepeatingCharacter(inputArray){
    if(typeof inputArray !=='string' || inputArray.length==0) return 'invalid array';

    let maxCount = 0;
    let currentCount =0;
    let maxCharacter = '';
    let currentCharacter = '';
     

    for (let index=0; index < inputArray.length; index++){

        if (inputArray[index] === currentCharacter){
            currentCount++;
        }
        else{
            currentCount =1;
            currentCharacter = inputArray[index]
        }

        if(maxCount < currentCount){
            maxCount = currentCount;
            maxCharacter = currentCharacter;
        }
    }

    return maxCharacter;
}

const array = "traaainngfornewbie";
console.log(findMaxRepeatingCharacter(array));

// console.log(findMaxRepeatingCharacter(null));
// console.log(findMaxRepeatingCharacter(''));
// console.log(findMaxRepeatingCharacter(true));

