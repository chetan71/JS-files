const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    //Write your code here and print the required output
      function palindrome(n) {
          if (n<10) {
              return true;
          }
          const str = n.toString();
          const l = str.length;
          const arr = [];
          
          if (l%2==0) {
            let m = l/2;
            let j = l-1;

            for (let i = 0; i < m; i++) {
              if (str[i]==str[j]) {
                arr.push(str[i]);                
              } else return false;
              console.log(j);
              j--;
            }
            return true;
          }
          else {
              let m = (l-1)/2;
              let j = l-1;
              for (let i = 0; i < m; i++) {
                if (str[i]==str[j]) {
                    arr.push(str[i]);
                } else return false;
                j--;
              }
            return true;
          }  
        }
        console.log(palindrome(n));
      readline.close();
});