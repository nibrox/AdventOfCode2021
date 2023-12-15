var common = require('../../common/common.js');

async function part1() {
    let inputArr = await common.importInputToArray('2021/02/', 'input.txt', ' ');
    // convert 2nd array values to integers
    inputArr = inputArr.map((item) => { return [ item[0], parseInt(item[1]) ] });

    let posH = 0;
    let posD = 0;
    
    for (let i = 0; i < inputArr.length; i++) {
        switch(inputArr[i][0]) {
            case 'down':
                posD += inputArr[i][1];
                break;
            case 'up':
                posD -= inputArr[i][1];
                break;
            case 'forward':
                posH += inputArr[i][1];
                break;
        }
    }

    console.log('02-1 Answer:', posH * posD);
}

part1();


async function part2() {
    let inputArr = await common.importInputToArray('2021/02/', 'input.txt', ' ');
    // convert 2nd array values to integers
    inputArr = inputArr.map((item) => { return [ item[0], parseInt(item[1]) ] });

    let posH = 0;
    let posD = 0;
    let aim = 0;
    
    for (let i = 0; i < inputArr.length; i++) {
        switch(inputArr[i][0]) {
            case 'down':
                aim += inputArr[i][1];
                break;
            case 'up':
                aim -= inputArr[i][1];
                break;
            case 'forward':
                posH += inputArr[i][1];
                posD += aim * inputArr[i][1];
                break;
        }
    }

    console.log('02-2 Answer:', posH * posD);
}

part2();