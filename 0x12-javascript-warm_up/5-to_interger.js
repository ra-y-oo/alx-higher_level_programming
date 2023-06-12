#!/usr/bin/node
const [, , argument] = process.argv;
const integer = parseInt(argument);

if (isNaN(integer)) {
    console.log('Not a number');
} else {
    console.log('My number: ${integer}');
}
