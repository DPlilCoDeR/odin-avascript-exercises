const repeatString = function (string, number) {
    let result = "";

    for (let i = 0; i < number; i++) {
        result += string;
    }
    return number < 0 ? "ERROR" : result;
};

// Do not edit below this line
module.exports = repeatString;
