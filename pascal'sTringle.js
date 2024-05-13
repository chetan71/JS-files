const numRows=7;
const arr = [];
for (let i = 0; i < numRows; i++) {
            arr[i] = [];
    for (let j = 0; j <= i; j++) {
        
        if (j==0||i==j) {
            arr[i][j] = 1;
        }
        else {
            for (let r = 0; r <arr[i-1].length; r++) {
                let p1=i;
                let p2 = j;

                arr[p1][p2] = arr[p1-1][p2-1] + arr[p1-1][p2] ;
                //console.log( `position of i-1 is ${i-1} & j is ${j}. so here is number we are adding together ${arr[i-1][j]} & ${arr[i-1][j+1]}`);
                p1++;
                p2++;
            }
        }
    }
    console.log(arr[i]);
}
console.log(arr);