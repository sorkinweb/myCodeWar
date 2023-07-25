'use strict';

/*
    8kyu. Square(n) Sum

Complete the square sum function so that it squares each number
passed into it and then sums the results together.
*/

function squareSum(numbers) {
    const result = numbers
        .map((el) => el * el)
        .reduce((acc, el) => (acc += el), 0);
    return result;
}

// or return numbers.reduce((sum,num) => sum + (num * num), 0);
