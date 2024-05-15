let str = "aBC1";
const arr = [];
let nstr = "";

for (const i of str) {
    arr.push(i);
}
for (let i = 0; i < arr.length; i++) {
    if ((arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) || (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122)) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else arr[i] = arr[i].toUpperCase();
    
    }
}
for (const i of arr) {
    nstr+=i;
}
console.log(nstr);

