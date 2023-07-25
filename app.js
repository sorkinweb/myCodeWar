'use strict';

/*
    8kyu. Convert a Number to a String!

We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

function numberToString(num) {
    if (Number.isInteger(num) === true) {
        return String(num);
    } else {
        return;
    }
}

console.log(numberToString(22)); // 22
console.log(numberToString(1231)); // 1231
console.log(numberToString('44')); // undefined
console.log(numberToString('asfasfa')); // undefined

// return num.toString();
