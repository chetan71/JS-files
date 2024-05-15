let sentence = "We promptly judged antique ivory buckles for the next prize";
sentence = sentence.toLowerCase();
let str = "";
let arr = new Array(26);
arr = arr.fill(false);
let char = 0;
let pos = 0;
let pangram = true;

for (const i of sentence) {
    if ("a".charCodeAt(0)<=i.charCodeAt(0) && i.charCodeAt(0) <="z".charCodeAt(0) ) {
        str+=i;
    }
}
for (const i of sentence) {
    char = i.charCodeAt(0);
    pos = char - 97;
    arr[pos] = true;

}
if (!arr.includes(false)) {
    console.log("Panagram");
} else console.log("not Pangram")
