function GetSingularName(fileName) {
    const nameArray = [...fileName];
    const firstLetterLowerCased = nameArray[0].replace(nameArray[0], nameArray[0].toLowerCase());

    let getSingularArray = [];

    nameArray.map(item => {
        getSingularArray.push(item.replace(nameArray[0], firstLetterLowerCased));
    });

    return getSingularArray.join('');
}

module.exports = GetSingularName;