const fibonacci = function (input) {

    const inputInt = +input;

    if (inputInt < 0) {
        return "OOPS";
    }
    
    if (inputInt == 0) {
        return 0;
    }

    if (inputInt === 1) {
        return 1;
    }

    if (inputInt === 2) {
        return 1;
    }

    return fibonacci(inputInt - 1) + fibonacci(inputInt - 2);
};

// Do not edit below this line
module.exports = fibonacci;
