'use strict';

/*
    7kyu. Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
    const resultArr = str.toLowerCase().split('').sort();
    for (let i = 0; i <= resultArr.length-1; i++) {
        if (resultArr[i] === resultArr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isIsogram('mossa')); // false

// or return new Set(str.toUpperCase()).size == str.length;
// or  return !/(\w).*\1/i.test(str)