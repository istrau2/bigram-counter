const readline = require('readline');
const fs = require('fs');
const {countBigrams} = require('./src');

function handleArg(arg) {
    const split = arg.split('=');
    switch(split[0]) {
        case 'text':
            return console.log(JSON.stringify(countBigrams(split[1])));
        case 'file':
            return countEachFileLine(split[1]);
        default:
            return;
    }
}

function countEachFileLine(filePath) {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        //output: process.stdout,
        console: false
    });
    readInterface.on('line', function(line) {
        console.log(JSON.stringify(countBigrams(line)));
    });
}

// get cl args and count for each arg
const args = process.argv.slice(2);
args.forEach(handleArg);
