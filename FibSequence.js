// iterative solution
function getNthFib(value) {
    if (value <= 1) {
        return 1
    }

    let last = 1;
    let secondLast = 0;
    let sum = 0;

    for (let i = 1; i < value; i++) {
        sum = secondLast + last;
        secondLast = last;
        last = sum
    }

    return sum

}

console.log(getNthFib(10))

// Recursive solution
function getNthFibRescursive(value) {
    if (value <= 1) {
        return value
    } else {
        return getNthFibRescursive(value - 1) + getNthFibRescursive(value - 2)
    }

}

console.log(getNthFibRescursive(10))

// Recursive better solution
function  getNthFibBetter(value, secondLast, last) {
    if (value == 0) {
        return secondLast
    }

    if (value == 1) {
        return last
    }
6
    return getNthFibBetter(value -1, last, secondLast + last)
}


console.log(getNthFibBetter(10, 0, 1))
