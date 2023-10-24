// 8. Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”

function convertNumbersIntoString(number){
    if (typeof number!=='number') return 'Invalid Number'

    let result ='';

    number = String(number)

    const digits = number.split("").reduce((accumulator, currentValue) => {
                  accumulator.push(String(currentValue));
                  return accumulator;
                  }, []);

    // console.log(digits);

    for (let index = 0; index < digits.length; index++){

        const currentNumber = digits[index];

        switch (currentNumber){
            case '1' : result+='one'; 
                       break;
            case '2' : result+='two';
                       break;
            case '3' : result+='three';
                       break;
            case '4' : result+='four';
                       break;
            case '5' : result+='five';
                       break;
            case '6' : result+='six';
                       break;
            case '7' : result+='seven';
                       break;
            case '8' : result+='eight';
                       break;
            case '9' : result+='nine';
                       break;
            case '0' : result+='zero';
                       break;
            case '-' : result+='-';
                       break;
            case '.' : result+='.';
                       break;                      
        }
    }

    return result;
}

console.log(convertNumbersIntoString(1));
console.log(convertNumbersIntoString(98));

console.log(convertNumbersIntoString('1'));
console.log(convertNumbersIntoString(true));

console.log(convertNumbersIntoString(-1));
console.log(convertNumbersIntoString(1.5));




