let s = "abbbccd";

for (let i = 0; i < s.length; i++) {
    let com = s[i];
    console.log();
    for (let j = 0; j < s.length; j++) {
        if (s[j]==com) {
            count++;
        }else break;
        
    }
    
}