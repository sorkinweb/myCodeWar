'use strict';

/*
    8kyu. Bin to Decimal

Complete the function which converts a binary number (given as a string) to a decimal number.
*/

function binToDec(bin) {
    return parseInt(bin, 2);
}

console.log(binToDec('1001001')); // 73