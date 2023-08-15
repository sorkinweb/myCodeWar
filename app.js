'use strict';

/*
    7kyu. Jaden Casing Strings

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

function toJadenCase (str) {
    return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real")); // How Can Mirrors Be Real If Our Eyes Aren't Real