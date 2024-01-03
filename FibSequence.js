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