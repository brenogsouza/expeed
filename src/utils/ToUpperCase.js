function ToUpperCase(fileName) {
    const fileNameArray = [...fileName];
    fileNameArray.splice(0, 1, fileNameArray[0].toUpperCase());

    if (fileNameArray[-1] === 's')
        return fileNameArray.pop().join(''); 

    return fileNameArray.join('');
}

module.exports = ToUpperCase;



