#!/usr/bin/node
const argument = parseInt(process.argv[2]);

function factorial(n) {
    if (Number.isNaN(n)) {
        return 1;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const result = factorial(argument);
console.log(result);
