// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Solutions-3
 const number = [1,2,2]
 let sum = 0;
 for(let i =0; i < number.length; i++){
   sum += number[i] * number[i]
 }

 console.log(sum);
