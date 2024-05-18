const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let n;
  let arr = [];
  
  readline.question('', num => {
    n = parseInt(num);
    readArray(0);
  });
  
  function readArray(i) {
    if(i < n) {
      readline.question('', word => {
        arr.push(word);
        readArray(i+1);
      });
    } else {
      let result = getStrings(arr);
      for(let i = 0; i < result.length; i++){
        console.log(result[i]);
      }
      readline.close();
    }
  }
  const rowNoArr =[];
  
  
  const row1 = "qwertyuiop";
  const row2 = "asdfghjkl";
  const row3 = "zxcvbnm";
  
  function areAllElementSame (row){
      const first = row[0];
      for (const j of row) {
          if (j !==first) return false;
      }
      return true;
  }
  function getStrings(arr) {
  
  for (let i = 0; i < arr.length; i++) {
      const row = [];
      for (const j of arr[i]) {
          if (row1.includes(j)){
              row.push(1);
          }else if (row2.includes(j)) {
              row.push(2);
          }else if (row3.includes(j)) {
              row.push(3);
          }
      }
      // first = row[0];
      
      if (areAllElementSame(row)) {
          rowNoArr.push(arr[i]);
      }
  }
  for (const iterator of rowNoArr) {
      console.log(iterator);
  }
  
  }