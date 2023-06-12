#!/usr/bin/node
const [, , argument] = process.argv;
const integer = Math.floor(parseInt(argument));

if (Number.isNaN(integer)) {
    console.log('Not a number');
} else {
    console.log('My number: ${integer}');
}
