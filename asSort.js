const mat = [[9, 7, 8, 11, 21], [1, 4, 3, 7, 2], [4, 3, 14, 9, 12]]
// console.log(sortCol(mat, 3, 5));
sortCol(mat, 3, 5)
function sortCol(mat, N, M) {
    // Write your code here
      let pick;
      let flag = true;
      for (let j = 0; j < mat[0].length; j++) {
          let pos;
          for (let i = 0; i < mat.length; i++) {
              pick = mat[i][j];
              let next = 0;
            //   let next = mat[i+1][j];
              console.log(mat[i+1][j]);
              if (pick >next) {
                  pick = next;
                  pos = i+1;
                  flag = false;
              }
          }
          if (!flag) {
                  mat[pos][j] = mat[0][j];
                  mat[0][j] = pick
              }
      }
      return mat;
  }