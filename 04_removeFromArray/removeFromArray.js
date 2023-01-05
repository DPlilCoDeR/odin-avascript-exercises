const removeFromArray = function (numArray, ...deleteNum) {
    const index = numArray.indexOf(...deleteNum);
    numArray.splice(index, deleteNum.length);
    console.log(deleteNum.length);
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
