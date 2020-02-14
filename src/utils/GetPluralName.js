function GetPluralName(fileName) {
    const nameArray = [...fileName];
    const firstLetterLowerCased = nameArray[0].replace(nameArray[0], nameArray[0].toLowerCase());

    let getPluralArray = [];
    let pluralName = [];

    nameArray.map(item => {
        getPluralArray.push(item.replace(nameArray[0], firstLetterLowerCased));
    });

    pluralName.push(...getSingularArray, 's');

    pluralName = pluralName.join('');
}

module.exports = GetPluralName;
