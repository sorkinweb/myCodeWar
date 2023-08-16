'use strict';

/*
    7kyu. Two to One

Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    return s1.concat(s2).reduce((acc, el) => {
        if (acc.includes(el)) {
            return acc;
        }
        return [...acc, el].sort().join('');
    })
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // abcdefklmopqwxy

// or const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
// or return Array.from(new Set(s1 + s2)).sort().join('');