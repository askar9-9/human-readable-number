module.exports = function toReadable(number) {
    const nums = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    
    if (number === 0) return nums[0];

    const getBelowHundred = (num) => {
        if (num < 20) return nums[num];
        const tens = Math.floor(num / 10) * 10;
        const units = num % 10;
        return units ? `${nums[tens]} ${nums[units]}` : nums[tens];
    };

    let result = [];

    if (number >= 1000) {
        const thousands = Math.floor(number / 1000);
        result.push(`${nums[thousands]} thousand`);
        number %= 1000;
    }

    if (number >= 100) {
        const hundreds = Math.floor(number / 100);
        result.push(`${nums[hundreds]} hundred`);
        number %= 100;
    }

    if (number > 0) {
        result.push(getBelowHundred(number));
    }

    return result.join(" ");
};
