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
function twoCrystalBall(breaks) {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jumpAmount
    for (; i < breaks.length; i += jumpAmount){
        if (breaks[i]) {
            break;
        }

        i -= jumpAmount;

        for (let j = 2; j <= jumpAmount && i < breaks.length; ++j, i++) {
            if (breaks[i]) {
                return i
            }
        }
    }
    return -1
}
