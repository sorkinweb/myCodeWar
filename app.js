'use strict';

/*
    8kyu. Sum Mixed Array

Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

let b = [9, 3, '7', '3'];

function sumMix(x) {
    return x.reduce((acc, el) => acc + Number(el));
}

console.log(sumMix(b)); // 22