#!/usr/bin/node
const x = process.argv[2];
const parsedInt = Math.floor(parseInt(x));

if (Number.isNaN(parsedInt)) {
    console.log('Missing number of occurences');
} else {
    let x = parsedInt;
    let count = 0;

    while (x > 0){
        count++;
        x--;
    }

    console.log('Number of occurences: ${count}');
}
