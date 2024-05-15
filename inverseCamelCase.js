let str = "IAmAJavaProgrammer";
const sArr = [];
let chStr = "";

for (let i = 0; i < str.length; i++) {
    chStr += str[i];

    if (i === str.length - 1 || str[i+1] === str[i+1].toUpperCase()) {
        sArr.push(chStr);
        chStr = "";
    }
}

console.log(sArr);
for (const iterator of sArr) {
    console.log(iterator);
}