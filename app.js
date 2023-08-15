'use strict';

/*
    7kyu. Shortest Word

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
    return Math.min(...s.split(' ').map(el => el.length));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3

// or return Math.min.apply(null, s.split(' ').map(w => w.length));