const convertToCelsius = function (temp) {
    // Formula
    // (75F - 32) x 0.5556 = 23.6C
    let converted = (temp - 32) * 0.5556;
    return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function (temp) {
    //Formula
    // (50C x 1.8) + 32 = 122F
    let converted = temp * 1.8 + 32;
    return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
