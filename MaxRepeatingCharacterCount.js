// 4. Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// since a has more repeating simaltaneously

function findMaxRepeatingCharacter(inputArray){
    const result='';

    let maxCount = 0;
    let currentCount =0;
    let maxCharacter ='';
    let currentCharacter = '';
     

    for (let index=0; index < inputArray.length; index++){
        currentCharacter = inputArray[index];

        if (currentCharacter === maxCharacter){
            currentCount++;
        }
        else{
            maxCharacter = currentCharacter;
            maxCount = 1;
            currentCount =1;
        }

        maxCount = maxCount < currentCount ? currentCount : maxCount;
    }

    return result;
}

const array = "traaainngfornewbie";
console.log(findMaxRepeatingCharacter(array));