'use strict';

/*
    8kyu. Calculate average

Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

const newArr = [0, 0, 0];
const newArr1 = [1, 1, 1];

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((acc, el) => acc + el, 0) / array.length; 
}

console.log(findAverage(newArr)); // 0
console.log(findAverage(newArr1)) // 1