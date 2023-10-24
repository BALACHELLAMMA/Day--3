// 3. Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
// Output [“a”, “d”, 1, “cd”, 33];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
// Output [1, true, 33];

function filterOutInvalidItemsInArray(inputArray,type){
    if(inputArray.length==0 || type.length == 0) return 'Empty array or type not accepted'
    const result =[];
    // const typeArray = ['boolean','number','string','bigint','object','undefined','function']

    for (let index=0; index<inputArray.length; index++){

        const currentCharacter = inputArray[index];
        if (typeof currentCharacter!== type) result.push(currentCharacter);
    }

    return result;
}

const type ='boolean'
const array = ["a", "d", 1, true, "cd", 33, undefined, null, ()=>{let name="bala"}, [1,2,3]];
console.log(filterOutInvalidItemsInArray(array,type));
console.log(filterOutInvalidItemsInArray(array,'object'));
console.log(filterOutInvalidItemsInArray(array,'function'));


