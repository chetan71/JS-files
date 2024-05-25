function compare(a, b) {
    return a-b;
}
function decreaseIt(arr, N) {
//write your code here
    let count = 0;
    arr.sort(compare);
    for (let i = 1; i < N; i++) {
        const curr = arr[i];
        for (let j = i-1; j >= 0; j--) {
                // if (i!=j) {
                    if (curr ==arr[j]) {
                       
                            arr[j]--;
                            count++;
                        
                    }
                // } 
        }
    }
    return count;
}