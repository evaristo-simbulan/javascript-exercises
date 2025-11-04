const removeFromArray = function (arr, ...arrToRemove) {
    return arr.filter((value) => !arrToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
