
var common = require('../common.js');



function getItemPriority(char) {
    if (!char || !char.length === 1) {
        return 0;
    }
    let offset = 'abcdefghijklmnopqrstuvwxyz'.includes(char) ? 96 : 38;

    return char.charCodeAt(0) - offset;
}

async function part1() {
    let inputArr = await common.importInputToArray('03/', 'input.txt');

}

async function part2() {
}

(async() => {
    await part1();
    await part2();
})();

console.log(getItemPriority('z'))