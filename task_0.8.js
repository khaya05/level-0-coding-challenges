 function formatTime(number) {
    if (number < 60 ) {
        return number + `${number !== 1 ? ' minutes' : ' minute'}`
    }
    else if (number === 60) {
        return '1 hour'
     }
    else if (number > 60) {
        const numberOfHrs = Math.floor(number / 60);
        const minutes = number % 60;
        const timeInFull = numberOfHrs + ` hour${numberOfHrs > 1 ? 's' : ''}, ` + minutes + ` minute${minutes !== 1 ? 's' : ''}`;
        return timeInFull;
    }
        
};

console.log(formatTime(0));
console.log(formatTime(1));
console.log(formatTime(2));
console.log(formatTime(120));
console.log(formatTime(121));
console.log(formatTime(122));