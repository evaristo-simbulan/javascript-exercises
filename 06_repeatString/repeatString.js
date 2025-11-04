const repeatString = function(itemToRepeat, count) {

    if(count < 0) {
        return "ERROR";
    }

    let stringToReturn = "";
    for(let i = 0; i < count; i++) {
        stringToReturn += itemToRepeat;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
