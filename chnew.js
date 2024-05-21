const A = [14, 2, 26, 11, 14, 11, 4, 9, 1, 16];
const B = [9, 27, 11, 4, 30, 15,26, 19, 1, 15];



// let size = 0;
// if (A.length<B.length) {
//     size += B.lenght;
// } else if (A.length==B.length) {
//     size += B.lenght;
// }else {
//     size += A.length;
// }
const arr = [];
for (let i = 0; i < A.length; i++) {
    console.log(A[i], B[i]);
    arr.push(A[i] - B[i]);
}
console.log(arr);
// return arr;