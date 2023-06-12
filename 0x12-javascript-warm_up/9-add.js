#!/usr/bin/node
const int1 = process.argv[2];
const int2 = process.argv[3];

function add(a, b) {
    console.log(a + b);
}

const result = add(int1, int2);
console.log(result);
