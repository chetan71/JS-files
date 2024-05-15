let str = "hey";
let nstr = "";

let n = ((str.length-2)*2)+2;
let arr = new Array(n);
arr = arr.fill("e", 1, n-1);
arr[0] = "h";
arr[n-1] = "y";
for (const i of arr) {
    nstr+= i;
}
console.log(nstr);

