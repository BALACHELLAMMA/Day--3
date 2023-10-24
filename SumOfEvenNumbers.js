// 6. Find the sum of even numbers in an array. find all the even numbers in an array and add them
// For example
// findEvenSum([38, 3, 2, 8, 31])
// output -  48

function sumOfEvenNumbers(array){
    if(array.length == 0) return 'Invalid Array'
    let sum =0;

    for (let index=0; index<array.length; index++){
        const currentValue = array[index];
        
        if (typeof currentValue =='number' && currentValue %2 == 0) sum+=array[index]


    }

    return sum;
}

const array = [38, 3, 2, 8, 31,-4];
console.log(sumOfEvenNumbers(array));