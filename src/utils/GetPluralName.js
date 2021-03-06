function GetPluralName(fileName) {
    const nameArray = [...fileName];
    const firstLetterLowerCased = nameArray[0].replace(nameArray[0], nameArray[0].toLowerCase());

    let getPluralArray = [];
    let pluralName = [];

    nameArray.map(item => {
        getPluralArray.push(item.replace(nameArray[0], firstLetterLowerCased));
    });

    if (getPluralArray[getPluralArray.length - 1] === 's')
        return pluralName.join('');

    pluralName.push(...getPluralArray, 's');

    return pluralName.join('');
}

module.exports = GetPluralName;
