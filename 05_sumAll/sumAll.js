const sumAll = function (a, b) {
    let result = 0;
    const er = "ERROR";

    console.log(typeof a)

    if (typeof a != 'number' || typeof b != 'number') return "ERROR";
    if (a < 0 || b < 0) return er;
    if (b < a) [a, b] = [b, a];

    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
