'use strict';

/*
    8kyu. Even or Odd
    Create a function that takes an integer as an argument 
    and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(num) {
    if (num % 2 !== 0) {
        return 'Odd';
    } else {
        return 'Even';
    }
}
console.log(evenOrOdd(1)); // odd

// or return num % 2 ? 'Odd' : 'Even'
