const startOz = (str) =>{
    let newString = '';

    if (str.charAt(0) === 'o') {
        newString += 'o';
    }

    if (str.charAt(1) === 'z') {
        newString += 'z';
    }

    return newString;
}

module.exports = startOz;