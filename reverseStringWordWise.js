let S = "how are you";
let arr = S.split(" ");
arr = arr.reverse();
let nstr = "";

for (const word of arr) {
    nstr += word + " ";
}
console.log(nstr);