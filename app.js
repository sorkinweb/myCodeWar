'use strict';

/*
    8kyu. Reversed sequence
    
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]

*/

function getNumber(num) {
    let resultArr = [];
    for(let i = 0; i <= num; i++) {
        resultArr.push(i);
    }
    return resultArr.reverse();
}
console.log(getNumber(5));

// or return Array(n).fill(0).map((e, i) => n - i );