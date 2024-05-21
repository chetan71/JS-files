const arr = [1, 4, 3, 5, 5, 9, 7, 2, 9, 8, 4];
let maxValue = Math.max(...arr);
console.log(maxValue);
let i = arr.indexOf(maxValue);
console.log(`index of  max value is ${i}`);