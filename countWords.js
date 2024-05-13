const s = "gear five";

let count=1;
for (let i = 0; i < s.length; i++) {
    if (s[i]===" "&& s[i+1]!=undefined) {
        count+=1
    }
}
console.log(count);

