// 3. Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
// Output [“a”, “d”, 1, “cd”, 33];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
// Output [1, true, 33];

function filterOutInvalidItemsInArray(inputArray,type){
    const result =[];

    for (let index=0; index<inputArray.length; index++){

        const currentCharacter = inputArray[index];
        if (typeof currentCharacter!== type) result.push(currentCharacter);
    }
    return result;
}

const type ='boolean';
const array = ["a", "d", 1, true, "cd",33];
console.log(filterOutInvalidItemsInArray(array,type));