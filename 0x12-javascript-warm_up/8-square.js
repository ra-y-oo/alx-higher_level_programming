#!/usr/bin/node
const sizeArgument = process.argv[2];
const size = Math.floor(parseInt(sizeArgument));

if (Number.isNaN(size)) {
  console.log('Missing size');
} else{
    let square = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square += 'X';
        }
        square += '\n';
    }

    console.log(square);
}
