const sChar = "abc";
const A = ["ab", "abd", "cacb", "cabef"];
let count =0;

for (let i = 0; i < A.length; i++) {
    const element = A[i];
    for (let k = 0; k < element.length; k++) {
        if (sChar.includes(element[k])) {
            count++;
            break;
        }
    }
        
    
}
console.log(count);
