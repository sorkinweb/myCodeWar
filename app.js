'use strict';

/*
    8kyu. Sum of positive

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    const resultArr = arr.filter((el) => el > 0);
    for (const el of resultArr) {
        sum += el;
    }
    return sum;
}

// or return arr.filter(element => element > 0).reduce((acc, el) => acc + el, 0);
