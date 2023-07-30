'use strict';

/*
    8kyu. Convert a string to an array

"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

function stringToArray(string) {
    return string.split(' ');
}

console.log(stringToArray('Robin Singh')); // ['Robin', 'Singh']