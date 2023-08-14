'use strict';

/*
    7kyu. Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemVowel(str) {
    const vowels = 'aeiou'
    return str.split('').filter(el => !vowels.includes(el.toLowerCase())).join('');
}

console.log(disemVowel('This website is for losers LoL!')); // Ths wbst s fr lsrs LL!

// or regex return str.replace(/[aeiou]/gi, '');