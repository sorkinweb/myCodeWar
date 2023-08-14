'use strict';

/*
    7kyu. Highest and Lowest

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
    const resultArr = numbers.split(' ').sort((a, b) => a - b);
    let firstNum = resultArr[0];
    let lastNum = resultArr[resultArr.length-1];
    return `${lastNum} ${firstNum}`;
}

console.log(highAndLow('1 2 3 4 5 6 8 12 22 7')) // 22 1

// or   numbers = numbers.split(' '); return `${Math.max(...numbers)} ${Math.min(...numbers)}`;