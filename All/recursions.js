const fibonacci = (number, map = {}) => {
    if(number <= 2) return 1;
    if(number in map) return map[number];
    map[number] = fibonacci(number-1, map) + fibonacci(number-2, map);
    return map[number];
}
const factorial = (number) => {
    if(number === 0) return 1;
    return number * factorial(number-1);
}
const power = (base, exp) => {
    if(exp === 0) return 1;
    return base * power(base, exp-1);
}
const productOfArray = (arr) => {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
const recursiveSumOfRange = (number) => {
    if(number === 0) return 0;
    return number + recursiveSumOfRange(number-1);
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    const partition = (arr, start = 0, end) => {
        let pivot = arr[start];
        let swapIdx = start;

        for (let i = start + 1; i <= end; i++) {
            if(pivot > arr[i]) {
                swapIdx++;
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
                console.log(arr);
            }
        }
        [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
        return swapIdx;
    }
    
    if(left < right) {
        const pivotIdx = partition(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return(arr);
}

console.log(quickSort([5,9,6,4,1,3,2]));