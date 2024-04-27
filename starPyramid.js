const n = 3;
let j = n-2;
let k = n-2;
for (let index = 0; index < n; index++) {
        let sum ="";
        let stars ="";
    for (let index = j; index >= 0; index--) {
            sum += " ";
            
    }
        j--;
    for (let index = 0; index < k; index++) {
            stars += "* ";
            
    }
    k++;
    console.log(sum+stars);
}
        