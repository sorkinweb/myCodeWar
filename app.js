'use strict';

/*
    8kyu. Remove duplicates from list

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.

*/

// function distinct(a) {
//     return a.filter((el, index) => {
//         a.indexOf(el) !== index
//     });
// }

const arr = [4, 22, 22, 32, 32, 31, 44, 1, 2, 3, 6, 6];

function getNewArrWithoutDublicates(arrOfNum) {
    let newArr = [];
    newArr = arr.filter((el, index) => {
        return arr.indexOf(el) === index; // if !== [22, 32, 6]
    })
    return newArr;
}

console.log(getNewArrWithoutDublicates(arr)); // [4, 22, 32, 31, 44, 1, 2, 3, 6]

// or return [...new Set(a)];