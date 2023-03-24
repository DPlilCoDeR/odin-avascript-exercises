const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
};

const multiply = function (array) {
    return array.reduce((partial, a) => partial * a);
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    if (a > 0) {
        return a * factorial(a - 1);
    }
    return 1;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
