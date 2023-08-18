'use strict';

/*
    7kyu. Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords('this is an example!')) // siht si na !elpmaxe