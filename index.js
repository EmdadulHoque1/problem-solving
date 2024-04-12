// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// -Solutions-6

function squreSum(number) {
    return number.reduce((acc,cv)=> acc + Math.pow(cv,2),0);

}

// Test the function

const number =[1,2,2]
const result = squreSum(number);
console.log(result);