let str = "abcd";
const arr = [];

for (let i = 0; i < str.length; i++) {
    const rows = [];
    for (let j = 1; j < str.length; j++) {
        rows.push(str.slice(i, j));
    }
    arr.push(rows);
}
for (const i of arr) {
    for (const j of i) {
        if (j!=="") {
            console.log(j);
        }
    }
}
