const arr = [2, 0, -4, 5, -7, 1, -20, 10];
// let result = arr.filter((num) => { return num > 0 });

// console.log(result);


// Reduce Method for array
// let sum = arr.reduce((accumulator, num) => {
//     console.log("accumulator is " + accumulator);
//     console.log("num is " + num);
//     return accumulator + num
// }, 0);
// console.log(sum);


// Reducer Function with initial value
let product = arr.reduce((accumulator, num) => num * num);
console.log(product);