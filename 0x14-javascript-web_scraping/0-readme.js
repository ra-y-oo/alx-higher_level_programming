#!/usr/bin/node
const fs = require('fs');
let filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', function(error, data) {
    console.log(error || data);
});
