function getMaximum(number1, number2, number3) {
    let count = 0;
    const numbers = [number1, number2, number3];
    for (let number of numbers) {
        if (number > count) {
            count = number;
        };
    };
    return count;
};

console.log(getMaximum(3, 7 , 4));