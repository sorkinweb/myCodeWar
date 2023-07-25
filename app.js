'use strict';

/*
    8kyu. Invert values

Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

const newArr = [1, 3, -2, 6, -12, -22, 211];


function findAverage(array) {
    const newArray = array.map(el => -el);
    return newArray;
}

console.log(findAverage(newArr)); // [-1, -3, 2, -6, 12, 22, -211]

// or return array.map(el => -el);