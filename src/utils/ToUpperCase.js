function ToUpperCase(fileName) {
    const fileNameArray = [...fileName];
    fileNameArray.splice(0, 1, fileNameArray[0].toUpperCase()).pop();

    return fileNameArray.join('');
}

module.exports = ToUpperCase;



