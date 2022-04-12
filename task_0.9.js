function getVowels(str) {
    const vowelsInStr = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const newStr = str.toLowerCase();
    for (let vowel of vowels) {
        if (newStr.includes(vowel)) {
            vowelsInStr.push(vowel);
        }
    };
    console.log('Vowels: ' + vowelsInStr.join(', '));
};
