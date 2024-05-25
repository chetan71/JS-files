function compare(a, b) {
    return a - b;
}

function solve(N, arr) {
    // Write your code here
    const sortedarr = [...arr];
    sortedarr.sort(compare);


    const subarray = [];
    for (let start = 0; start < N; start++) {
        let rows = [];
        for (let ends = start + 1; ends < N; ends++) {
            rows.push(arr.slice(start, ends));
            console.log()
            arr.splice(start, ends, ...rows.reverse())
            if () {

            }
        }
    }
}