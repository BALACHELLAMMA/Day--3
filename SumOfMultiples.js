// 5. Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

function sumOfMultiples(number, mutlipleCount){

    if (typeof number!=='number' || typeof mutlipleCount!=='number') return 'Invalid Number or mutliple count'
    if (number <=0 || mutlipleCount <=0) return 'number or mutliple count should not be less than zero or equal to zero'
    let sum = 0;
    
    for (let multiple=1; multiple<=mutlipleCount; multiple++){
        sum += (number * multiple); 
    }

    return sum;
}

console.log(sumOfMultiples(5,5));
console.log(sumOfMultiples(8,3));

console.log(sumOfMultiples(5,'5'));
console.log(sumOfMultiples(true,'5'));

console.log(sumOfMultiples(5,0));
console.log(sumOfMultiples(5,-5));


