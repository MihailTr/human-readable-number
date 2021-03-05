module.exports = function toReadable(number) {
    let numOneArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numTwoArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'];
    let numArr = ('' + number).split('');

    if (number == 0) {
        return "zero";
    }
    if (number >=1 && number <=9){
        return numOneArr[number];
    }
    if (number >=10 && number <=19){
        return numOneArr[number];
    }
    if (numArr.length == 2){
        if (parseInt(numArr[1]) ==0){
            return numTwoArr[parseInt(numArr[0])]
        }else{
            return numTwoArr[parseInt(numArr[0])] + ' ' + numOneArr[parseInt(numArr[1])];
        }
    }
    if (numArr.length == 3){
        if (parseInt(numArr[1]) ==0 && parseInt(numArr[2]) ==0){
            return numOneArr[parseInt(numArr[0])]  + ' hundred';
        }else if (parseInt(numArr[1]) ==0){
            return numOneArr[parseInt(numArr[0])]  + ' hundred ' + numOneArr[parseInt(numArr[2])];
        }else if (parseInt(numArr[2]) ==0){
            return numOneArr[parseInt(numArr[0])]  + ' hundred ' + numTwoArr[parseInt(numArr[1])];
        }else if (parseInt(numArr[1] + numArr[2])>=11 && parseInt(numArr[1] + numArr[2]) <=19){
             return numOneArr[parseInt(numArr[0])]  + ' hundred ' + numOneArr[parseInt(numArr[1] + numArr[2])];
        }else{
            return numOneArr[parseInt(numArr[0])]  + ' hundred ' + numTwoArr[parseInt(numArr[1])] + ' ' + numOneArr[parseInt(numArr[2])];
        }
    }
}

// console.log(toReadable(0));
// console.log(toReadable(1));
// console.log(toReadable(5));
// console.log(toReadable(9));
// console.log(toReadable(10));
// console.log(toReadable(15));
// console.log(toReadable(19));
// console.log(toReadable(25));
// console.log(toReadable(100));
// console.log(toReadable(105));
// console.log(toReadable(111));
// console.log(toReadable(130));
//console.log(toReadable(155));
