let s = `sssssssgggggggvvvvvvvcccmmjjjjuuuuuudpppppphhhhh`;
let nstr = "";

for (let j=0; j< s.length; j++) {
    let count = 0;
    if (s[j]==s[j-1]){
        continue;
    }
    nstr += s[j];
    for (let i = j; i < s.length; i++) {
        if (s[i]==s[j]) {
            count++;
        }
        else break;
    }
    if (count !== 1){
        nstr +=count.toString();
    }
}
console.log(nstr);
