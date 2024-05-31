function compare(a, b) {
    return a - b;
}

function combination(arr, temp, start, end, index, r) {
    if (index == r) {
        for (let j = 0; j < r; j++)
            console.log(temp[j]);
        console.log("");
        return;
    }

    if (start > end)
        return;

    temp[index] = arr[start];

    // "index is not included". Here we increment start
    combination(arr, temp, start + 1, end, index + 1, r);

    // "index is included". Here we do not increment start
    combination(arr, temp, start + 1, end, index, r);
}

function printCombination(N, arr, r) {
    arr = arr.sort(compare);
    let temp = new Array(r);
    temp = temp.fill(0);
    combination(arr, temp, 0, N - 1, 0, r);


}