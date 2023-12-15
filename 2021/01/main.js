var common = require('../../common/common.js');

async function part1() {
    let inputArr = await common.importInputToArray('2021/01/', 'input.txt');
    // convert array values to integers
    inputArr = inputArr.map((item) => {return parseInt(item)});

    let depthIncreaseCount = 0;
    for (let i = 1; i < inputArr.length; i++)
        if (inputArr[i] > inputArr[i-1])
            depthIncreaseCount ++;

    console.log('answer', depthIncreaseCount)
}

async function part2() {
    let inputArr = await common.importInputToArray('2021/01/', 'input.txt');
    // convert array values to integers
    inputArr = inputArr.map((item) => {return parseInt(item)});

    const parsedArr = [];
    for (let i = 0; i < inputArr.length - 2; i++)
        parsedArr.push(inputArr[i] + inputArr[i+1] + inputArr[i+2]);

    let depthIncreaseCount = 0;
    for (let i = 1; i < parsedArr.length; i++)
        if (parsedArr[i] > parsedArr[i-1])
            depthIncreaseCount ++;

    console.log('answer', depthIncreaseCount);
}

part1();
part2();