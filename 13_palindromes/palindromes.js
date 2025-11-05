const palindromes = function (input) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = input
        .toLowerCase()
        .split('')
        .filter(item => alphanumerical.includes(item))
        .join('');

    const reversedString = clean.split('').reverse().join('');

    return reversedString === clean;
};

// Do not edit below this line
module.exports = palindromes;
