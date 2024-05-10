const numRows=5;
const arr = [];
for (let i = 0; i < numRows; i++) {
            arr[i] = [];
    for (let j = 0; j <= i; j++) {
        
        if (j==0||i==j) {
            arr[i][j] = 1;
        }
        else {
            for (let r = 0; r <arr[i-1].length; r++) {
                arr[i][j] = arr[i-1][r] + arr[i-1][r+1] ;
                console.log( arr[i-1].length);
            }
        }
    }
    console.log(arr[i]);
}
console.log(arr);