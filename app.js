'use strict';

/*
    8kyu. Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.
Note: input will never be an empty string
*/


let fake = '45385593107843568';

function fakeBin(x) {
    return x.split('').map(el => el < 5 ? el = 0 : el = 1).join('');
}

console.log(fakeBin(fake));

// or return x.split('').map(el => el < 5 ? 0 : 1).join('');
