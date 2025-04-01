function reverseArray(arr) {
    let arrCopy = [...arr];
    for(let i = 0; i < arr.length / 2; i++) {
        [arrCopy[i], arrCopy[arr.length - 1 - i]] = [arrCopy[arr.length - 1 - i], arrCopy[i]];
    }
    return arrCopy;
}

// Example usage
const inputArray = [3, 6, 9, 12];
console.log(reverseArray(inputArray));
