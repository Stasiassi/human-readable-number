module.exports = function toReadable (number) {
   singleDigit = new Object ({
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
    })

    twoDigit = new Object ({
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    })

    twoDigitRound = new Object ({
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    })

    threeDigit = new Object ({
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    })

    let str = number.toString();
    let redableNumber = '';
    let ostatok = 0;

    if (str.length < 2) { redableNumber = singleDigit[number]; }
    else if (str.length < 3)
    {
        if (number < 20) { redableNumber = twoDigit[number]; }
        else if (number > 20 && str[1] != '0')
        {
            ostatok = number - Number(str[1]);
            redableNumber = twoDigitRound[ostatok] + ' ' + singleDigit[str[1]];
        }
        else if (number >= 20) { redableNumber = twoDigitRound[number]; }
    }
    else if (str.length == 3)
    {
        if (number % 100 == 0) { redableNumber = threeDigit[number]; }
        else if  (str[1] == '0')
        {
            ostatok = number - Number(str[2]);
            redableNumber = threeDigit[ostatok] + ' ' + singleDigit[str[2]];
        } 
        else if (str[2] == '0')
        {
            ostatok = number - Number(str[1] + str[2]);
            redableNumber = threeDigit[ostatok] + ' ' + twoDigitRound[number - ostatok]; 
        }
        else if  (Number(str[1] + str[2]) < 20)
        {
            ostatok = number - Number(str[1] + str[2]);
            redableNumber = threeDigit[ostatok] + ' ' + twoDigit[number - ostatok];
        }
        else if  (Number(str[1] + str[2]) < 100)
        {
            ostatok = number - Number(str[1] + str[2]);
            redableNumber = threeDigit[ostatok] + ' ' + twoDigitRound[number - ostatok - Number(str[2])] + ' ' + singleDigit[str[2]];
        }
    }
    return redableNumber;
}
