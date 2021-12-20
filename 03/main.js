var common = require('../common.js');

async function part1() {
    let inputArr = await common.importInputToArray('03/', 'input.txt');
    // convert strings in array to single character array
    inputArr = inputArr.map(item => { return item.split(''); });
    // parse characters (bits) in the subarray to integers
    inputArr = inputArr.map(item => { return item.map(bit => { return parseInt(bit) } ); });
    
    const inputLength = inputArr.length;
    const subArrLength = inputArr[0].length;

    const summedBits = [];
    for (let i = 0; i < subArrLength; i++) {
        summedBits.push(inputArr.map(item => item[i]).reduce((prev, next) => prev + next));
    }
    // parse the information back into an string of bits for gamma and epsilon
    let gamma = summedBits.map(item => {return item > inputLength / 2 ? '1' : '0'}).join('');
    let epsilon = summedBits.map(item => {return item <= inputLength / 2 ? '1' : '0'}).join('');
    // convert binary string to decimal
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);

    console.log('03-1 Answer:', gamma * epsilon);
}

part1();


async function part2() {
    let inputArr = await common.importInputToArray('03/', 'input.txt');
    // convert strings in array to single character array
    inputArr = inputArr.map(item => { return item.split(''); });
    // parse characters (bits) in the subarray to integers
    inputArr = inputArr.map(item => { return item.map(bit => { return parseInt(bit) } ); });
    
    const inputLength = inputArr.length;
    const subArrLength = inputArr[0].length;
    // create copies of the input array to filter independently
    let filteredO2Rating = inputArr.map(item => { return item } );
    let filteredCO2Rating = inputArr.map(item => { return item } );

    for (let i = 0; i < subArrLength; i++) {
        if (filteredO2Rating.length > 1) {
            const bitCount = filteredO2Rating.map(item => item[i]).reduce((prev, next) => prev + next);
            
            if (bitCount >= filteredO2Rating.length / 2)
                filteredO2Rating = filteredO2Rating.filter(item => item[i] === 1);
            else
                filteredO2Rating = filteredO2Rating.filter(item => item[i] === 0);
        }
        
    }
    for (let i = 0; i < subArrLength; i++) {
        if (filteredCO2Rating.length > 1) {
            const bitCount = filteredCO2Rating.map(item => item[i]).reduce((prev, next) => prev + next);
            
            if (bitCount < filteredCO2Rating.length / 2) {
                filteredCO2Rating = filteredCO2Rating.filter(item => item[i] === 1);
            }
            else {
                filteredCO2Rating = filteredCO2Rating.filter(item => item[i] === 0);
            }
        }
    }
    
    filteredO2Rating = filteredO2Rating[0].map(item => { return item.toString(); } );
    filteredCO2Rating = filteredCO2Rating[0].map(item => { return item.toString(); } );
    
    o2Rating = parseInt(filteredO2Rating.join(''), 2);
    co2Rating = parseInt(filteredCO2Rating.join(''), 2);

    console.log('03-2 Answer:', o2Rating * co2Rating);   
}

part2();
