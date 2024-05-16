let str = "Race, a car";
str = str.toLowerCase();
let nstr = "";

for (const char of str) {
    if ("a".charCodeAt(0)<=char.charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0)) {
        nstr += char;
    }
}
rnstr = nstr.split("").reverse("").join("");
if (rnstr === nstr) {
    console.log(1);
}else console.log(0);
