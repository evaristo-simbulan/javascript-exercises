const findTheOldest = function (arr) {
    return arr.reduce((current, item) => {

        let itemYOD;
        let currentYOD;
        if ("yearOfDeath" in item) {
            itemYOD = item.yearOfDeath;
        } else {
            itemYOD = new Date().getFullYear();
        }

        if ("yearOfDeath" in current) {
            currentYOD = current.yearOfDeath;
        } else {
            currentYOD = new Date().getFullYear();
        }

        let itemAge = itemYOD - item.yearOfBirth;
        let currentAge = currentYOD - current.yearOfBirth;

        if (itemAge > currentAge) {
            return item;
        }
        return current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
