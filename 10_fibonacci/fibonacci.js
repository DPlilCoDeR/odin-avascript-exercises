const fibonacci = function (number) {
    if(number <= 0){
        return "OOPS"
    }
    if (number == "1") {
        return 1
    }
    let list = [0, 1];
    for (let i = 2; i < number; i++) {
        list[i] = list[i - 2] + list[i - 1];
    }
    return list[number - 1] + list[number - 2];
};

// Do not edit below this line
module.exports = fibonacci;
