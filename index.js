// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Solutions-1
const num = [1,2,2]
const sum = num.reduce(function(acc, cv){
    // return acc + (cv * cv)
    return acc + Math.pow(2,cv)
})
console.log(sum);