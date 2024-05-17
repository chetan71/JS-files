const se = new set();
let s = "abccbc";
const arr = [];
const palinArr = [];

for (let i = 0; i < s.length; i++) {
  // const rows = [];
  for (let j = i; j < s.length; j++) {
      arr.push(s.slice(i, j+1));
  }
}

for (let k = 0; k < arr.length; k++) {    
  if (arr[k]==arr[k].split("").reverse("").join("")) {
      palinArr.push(arr[k])
  }
}
for (const substr of palinArr) {
  se.add(substr);
}
  const ans = Array.from(se);
  for (let name of ans.sort()) {
      console.log(i);
  }
