function getMaximum(...numbers) {
    let count = 0;
    const numbersArr = [...numbers];
    for (let number of numbersArr) {
        if (number > count) {
            count = number;
        };
    };
    return count;
};
