function convertToF(celsius) {
    const fahrenheit = 32 + (celsius * 9 / 5);
    return fahrenheit;
};

function convertToC(fahrenheit) {
    const celsius = 5 / 9 * (fahrenheit - 32);
    return celsius;
};
