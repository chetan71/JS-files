const arr = [1, 4, 3, 5, 5, 9, 7, 2, 9, 8, 4];
const n = arr.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        let left = arr[j];
        let right = arr[j+1];

        if (left > right) {
            swap(j, j+1);
        }
    }
}
function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
console.log(arr);
-------------------------------------------------------------------------
function bubbleSort(a, n) {
    //Write your code here
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n-i-1; j++) {
          // Swap adjacent elements if they are in decreasing order
          let left = arr[j];
          let right = arr[j+1];
  
          if (left > right) {
              swap(j, j+1);
          }
      }
  }
  function swap(index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }
  console.log(arr);
  }