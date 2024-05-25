function minOperations(grid, x) {
    // your code here
      const diff = Math.max(...grid.flat()) - Math.min(...grid.flat());
      let count = 0;
      for (let i = 0; i < grid.length; i++) {
          for (let j = 0; j < grid[0].length; j++) {
              let curr = grid[i][j];
              while (curr != diff) {
                  if (curr>diff) {
                      curr = curr - x;
                  }else{
                      curr = curr + x;
                  }
                  count++;
              }
          }
      }
      return count;
  }