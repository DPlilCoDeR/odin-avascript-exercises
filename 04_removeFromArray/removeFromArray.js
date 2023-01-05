const removeFromArray = function (numArray, ...deleteNum) {
    for (let i = 0; i < deleteNum.length; i++) {
        if (numArray.some((element) => element == deleteNum[i])) {
            let index = numArray.indexOf(deleteNum[i]);
            numArray.splice(index, 1);
        }
    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
