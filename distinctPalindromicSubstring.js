/* A substring is a subset or part of another string,
 or it is a contiguous sequence of characters within
 a string. */
 // A lexicographic order means Alphabetic order
 //Chetan Bhange
 let s = "tfzchqecdnbawmiufficftjcycbitzaibepaohhchpfizkxjvp";
const arr = [];
const palinArr = [];

for (let i = 0; i < s.length; i++) {
    // const rows = [];
    for (let j = i; j < s.length; j++) {
        arr.push(s.slice(i, j+1));
    }
}

for (let k = 0; k < arr.length; k++) {    
    if (arr[k]==arr[k].split("").reverse("").join("")) {
        palinArr.push(arr[k])
    }
}
for (const substr of palinArr) {
    console.log(substr);
}


// ----------------------------ACCIO sir's code--------------
// let str = "ABCBA";
// const size = str.length;

// let arr = [];
// for (let i = 0; i < size; i++) {
//     let row = [];
//     for (let j = 0; j < size; j++) {
//         row.push(false);
//     }
//     arr.push(row);
// }
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         let d = i;

//         if(d===0){
//             arr[i][j] = true;
//         }else if (d==1){
//             arr[i][j] = str[i]===str[j]
//         }else {
//             arr[i][j] = (str[i]===str[j]) && (arr[i+1][j-1]);
//         }
//         if(arr[i][j]){
//             console.log(str.substring(i,j+1));
//         }
//     }
    
// }
