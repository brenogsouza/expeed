function ToUpperCase(fileName) {
    const fileNameArray = [...fileName];
    fileNameArray.splice(0, 1, fileNameArray[0].toUpperCase());

    return fileNameArray.join('');
}

module.exports = ToUpperCase;



