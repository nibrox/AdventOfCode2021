
var common = require('../common.js');

const part1MatchOutputs = []
const part2MatchOutputs = []

const moveScore = {
    X: 1,
    Y: 2,
    Z: 3,
    A: 1,
    B: 2,
    C: 3,
}

const resultMap = {
    AX: 'draw',
    AY: 'win',
    AZ: 'loss',
    BX: 'loss',
    BY: 'draw',
    BZ: 'win',
    CX: 'win',
    CY: 'loss',
    CZ: 'draw',
}

// A = Rock
// B = Paper
// C = Scissors
// X = Rock
// Y = Paper
// Z = Scissors

const part2ResponseMap = {
    AX: 'C',
    BX: 'A', 
    CX: 'B',
    AY: 'A',
    BY: 'B',
    CY: 'C',
    AZ: 'B',
    BZ: 'C',
    CZ: 'A',
}

const part2ResultMap = {
    AA: 'draw',
    AB: 'win',
    AC: 'loss',
    BB: 'draw',
    BC: 'win',
    BA: 'loss',
    CC: 'draw',
    CB: 'loss',
    CA: 'win',
}

const resultScore = {
    win: 6,
    draw: 3,
    loss: 0,
}
const desiredResultMap = {
    X:'loss',
    Y:'draw',
    Z:'win',
}

async function part1() {
    let inputArr = await common.importInputToArray('02/', 'input.txt');

    inputArr.forEach(match => {
        const moves = match.split(' ');

        part1MatchOutputs.push({
            play: moves[0],
            response: moves[1],
            result: resultMap[moves[0]+moves[1]],
            score: resultScore[resultMap[moves[0]+moves[1]]] + moveScore[moves[1]]
        })
    });

    const totalScore = part1MatchOutputs.reduce((partialSum, a) => partialSum + parseFloat(a.score), 0);

    console.log('Part 1 answer:', totalScore);
}

async function part2() {
    let inputArr = await common.importInputToArray('02/', 'input.txt');

    inputArr.forEach(match => {
        const moves = match.split(' ');

        const correctResponse = part2ResponseMap[moves[0]+moves[1]];

        part2MatchOutputs.push({
            play: moves[0],
            desiredResult: desiredResultMap[moves[1]],
            response: correctResponse,
            result: part2ResultMap[moves[0]+correctResponse],
            score: resultScore[part2ResultMap[moves[0]+correctResponse]] + moveScore[correctResponse]
        })
    });

    console.log(part2MatchOutputs)
    const totalScore = part2MatchOutputs.reduce((partialSum, a) => partialSum + parseFloat(a.score), 0);

    console.log('Part 2 answer:', totalScore);
}


(async() => {
    await part1();
    await part2();
})();