function binarySearch(heystack, n) {
    let low = 0;
    let high = heystack.length;

    do {
        const m = Math.floor(low + (high - low) / 2)
        const v = heystack[m]

        if (v === n) {
            return true
        } else if (v > n) {
            high = m;
        } else {
            low = m + 1;
        }
    } while (low < high);

    return false
}

//  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 11))

//  Crystal Balls Problem
function twoCrystalBalls(breaks) {
    const jumpPoint = Math.floor(Math.sqrt(breaks.length));
    let i = 0;

    for (; i < breaks.length; i += jumpPoint) {
        // Check if a break occurs at the current index
        if (breaks[i]) {
            // Start a linear search from the last jump point or from the beginning
            let start = i - jumpPoint;
            // Ensure we don't start before the array
            start = start < 0 ? 0 : start;
            for (let j = start; j < i && j < breaks.length; j++) {
                if (breaks[j]) {
                    return j; // Return the first index where a break occurs
                }
            }
        }
    }

    return -1;
}

let breaks = new Array(100).fill(false).fill(true, 37);
console.log(twoCrystalBalls(breaks)); // This should correctly print 37
