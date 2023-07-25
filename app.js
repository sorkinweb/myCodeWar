'use strict';

/*
    8kyu. Reversed Strings

Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
    if (typeof str == 'string') {
        return str.split('').reverse().join('');
    }
}
