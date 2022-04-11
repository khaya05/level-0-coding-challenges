function getCommonChars(str1, str2) {
    const commonLetters = [];
    newStr2 = str2.split('');
    for (let letter of newStr2) {
        if (str1.includes(letter)) {
            commonLetters.push(letter)
        };
    };
    return `Common letters: ${commonLetters.join(', ')}`;
};
