'use strict';

/*
    8kyu. Abbreviate a Two Word Name

Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name) {
    name = name.toUpperCase();
    const [firstName, secondName] = name.split(' ');
    return `${firstName[0]}.${secondName[0]}`;
}

// or return name.split(' ').map(i => i[0].toUpperCase()).join('.')
