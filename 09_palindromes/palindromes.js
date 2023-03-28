const palindromes = function (string) {
    const processed = string.toLowerCase().replace(/[^a-z]/g, "");
    console.log(processed.split("").reverse().join(""), processed);
    return processed.split("").reverse().join("") == processed;
};

// Do not edit below this line
module.exports = palindromes;
