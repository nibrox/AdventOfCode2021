var common = require('../common.js');

async function main() {
    let inputArr = await common.importInputToArray('01/', 'input.txt');
    // convert array values to integers
    inputArr = inputArr.map((item) => {return parseInt(item)});

    let depthIncreaseCount = 0;
    for (let i = 1; i < inputArr.length; i++)
        if (inputArr[i] > inputArr[i-1])
            depthIncreaseCount ++;

    console.log('answer', depthIncreaseCount)
}

main();