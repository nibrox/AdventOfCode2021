var fs = require('fs');
const readline = require('readline');

module.exports.importInputToArray = async (filePath, fileName, splitChar) => {
    if (!filePath || !fileName || fileName == '')
        throw error('Please provide a filename')

    var outputArr = []
    
    const fileStream = fs.createReadStream(filePath + fileName);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
        
    for await (const line of rl) {
        if (splitChar && splitChar !== '')
            outputArr.push(line.split(splitChar));
        else
            outputArr.push(line);
    }

    return outputArr;
}