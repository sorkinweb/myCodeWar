'use strict';

/*
    7kyu. Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    return true;
}

console.log(validatePIN('a234')); // false
console.log(validatePIN('111111')); // true

// or regex return /^(\d{4}|\d{6})$/.test(pin)
