const str = " uecni naeji nuaekjb haebju ";

const arr = str.split(" ");
let word = "";
for (const j of arr) {
    if (j!="" && j!=" ") {
        word+= j;
        
        break;
    }
}
    
    for (let i = 0; i < arr.length; i++) {
        
        if (word !="" && word!= " ") {
            continue; 
        } else if (word.length > arr[i].length ) {
            word = arr[i];  
        }
    }
    console.log(word);
    console.log(arr);