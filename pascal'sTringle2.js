const n = 2;
const arr = [];

for (let i = 0; i < n; i++) {
    const rows = [];
    arr[i] = rows;
    for (let j = 0; j <= i; j++) {
        
        if (j==0 || j==i){
            rows[j] = 1;
        }
        else {
            arr [i][j] = arr [i-1][j-1] + arr [i-1][j];
        }
    }
    console.log();
}
console.log(arr);
console.log(arr[n-1]);
