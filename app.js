'use strict';

/*
    8kyu. Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
    let sheepCount = 0;
    for (const el of arrayOfSheep) {
        if (el === true) {
            sheepCount += 1;
        }
    }
    return sheepCount;
}

// or return arrayOfSheeps.filter(Boolean).length;
