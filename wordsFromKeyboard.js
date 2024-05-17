const arr = ["glad", "monkey"];
const rowNoArr =[];
let first = 0;

const row1 = "qwertyuiop";
const row2 = "asdfghjkl";
const row3 = "zxcvbnm";

function areAllElementSame (row){
    for (const j of row) {
        if (j !==first) return false;
    }
    return true;
}

function getRowNo(ch) {
    if (row1.includes(ch)){
        return 1;
    }else if (row2.includes(ch)) {
        return 2;
    }else if (row3.includes(ch)) {
        return 3;
}
    } 

for (let i = 0; i < arr.length; i++) {
    const row = [];
    for (const j of arr[i]) {
        row.push(getRowNo(j));
    }
    first = row[0];
    if (areAllElementSame(row)) {
        rowNoArr.push(arr[i]);
    }
}
for (const iterator of rowNoArr) {
    console.log(iterator);
}
