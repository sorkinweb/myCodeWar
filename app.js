'use strict';

/*
    7kyu. Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let el of str) {
        if(vowels.includes(el)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getCount('abracadabra')); // 5

// or regex return (str.match(/[aeiou]/ig)||[]).length;