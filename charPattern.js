const n = 78;
let ch = 65;
for (let k = 0; k < n; k++) {
    if (ch<=90) {
            
    } 
    else {
        ch = 65;
    }
    for (let i = 0; i <= k; i++) {
        process.stdout.write(String.fromCharCode(ch));
        if (ch>90) {
            ch = 65;
        } 
        
        ch++
        if (ch>90) {
            ch=65;
        }
    }
    if (k!=0) {
        ch--;
    }
    else if (ch>90) {
        ch=65;
    }
    
    console.log();
}