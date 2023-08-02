'use strict';

/*
    8kyu. All Star Code Challenge #18

Create a function that accepts a string and a single character, 
and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

function strCount(str, letter) {
    let resultArr = [];
    for(const el of str) {
        if(el === letter) {
            resultArr.push(el);
        }
    }
    return resultArr.length;
}

console.log(strCount('Hello', 'o')) // 1
console.log(strCount('Hello', 'l')); // 2

// or return str.split(letter).length-1  or return str.split('').filter(c => c == letter).length;