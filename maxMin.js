const arr = [1, 4, 3, 5, 5, 9, 7, 2, 9, 8, 4];

let max = -Infinity;
let maxPos = -1;
let min = Infinity;
let minPos = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]> max) {
        max = arr[i];
        maxPos=i;
    }
    if (arr[i] < min) {
        min = arr[i];
        minPos=i;
    }
    
}
console.log(`max, maxPos, min, minPos are ${max} ${maxPos} ${min} ${minPos}`);