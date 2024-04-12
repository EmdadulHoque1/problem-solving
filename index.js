// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// -Solutions-5

const num = [1,2,2]

const sum = num.reduce((acc,cv)=> acc + Math.pow(cv , 2))
console.log(sum);