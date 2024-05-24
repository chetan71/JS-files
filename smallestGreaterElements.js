function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
    }

    function swap(arr, maxIn, minIn) {
        let temp = arr[maxIn];
        arr[maxIn] = arr[minIn];
        arr[minIn] = temp;
    }

}

function smallestGreaterElements(arr) {
    const minSmGt = [];
    let flag = true;
    bubbleSort(arr);
    for (let i = 0; i < arr.length; i++) {
        const smGt = [];
        for (let j = 0; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                smGt.push(arr[j]);
                flag = false;
            }
        }
        if (flag) {
            smGt.push(Number(-10000000));
        }
        minSmGt.push(Math.min(...smGt));
    }
    return minSmGt;
}
