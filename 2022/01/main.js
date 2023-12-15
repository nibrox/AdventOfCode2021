
var common = require('../common.js');

const elves = []

async function part1() {
    let inputArr = await common.importInputToArray('01/', 'input.txt');

    let elf = null
    for (let i = 0; i < inputArr.length; i++) {
        if (elf === null) elf = []

        if (inputArr[i] !== '') { 
            elf.push(inputArr[i]);
            continue;
        }

        elves.push({ totalCalories: elf.reduce((partialSum, a) => partialSum + parseFloat(a), 0), foodCalories: elf });
        elf = null;
    }

    elves.push({ totalCalories: elf.reduce((partialSum, a) => partialSum + parseFloat(a), 0), foodCalories: elf });
    elf = null;

    elves.sort((a,b) => a.totalCalories > b.totalCalories ? -1 : 1)


    console.log('Part 1 answer:', elves[0].totalCalories);
}

async function part2() {
    const topThreeElves = elves.splice(0, 3);
    const totalCalories = topThreeElves.reduce((partialSum, a) => partialSum + parseFloat(a.totalCalories), 0);

    console.log('Part 2 answer:', totalCalories);
}

(async() => {
    await part1();
    await part2();
})();