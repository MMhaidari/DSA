function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}



console.log(bubbleSort([1,9,56,48,6,8,4,71,55]))
