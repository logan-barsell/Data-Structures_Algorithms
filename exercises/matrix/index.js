// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
  const results = [];
  
  for(i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    // top row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter ++;
    }
    startRow++;
    // right column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++
    }
    endColumn --;
    // bottom row 
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter ++;
    }
    endRow --;
    // start column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter ++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;



// function matrix(n) {
//   const results = [];

//   for(let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startRow = 0
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;

//   while(startRow <= endRow && startColumn <= endColumn) {
//     // start row 
//     for(let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     // end column
//     for(let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     // end row
//     for(let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     // start column
//     for(let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return results;
// }




function matrix(n) {
  const results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    // start row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++
    }
    startRow++;
    // end column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow --;
    // start column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
    
}










function matrix(n) {
  const results = [];
  for(i = 0; i < n; i++) {
    results.push([]);
  }
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let counter = 1;

  while(startRow <= endRow && startColumn <= endColumn) {
    // top row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // end column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}





























// function matrix(n) {
//   const results = [];
//   for(let row = 0; row < n; row++){
//     let subArray = [];
//     if (row < 1) {
//       for(let num = 1; num <= n; num++) {
//         subArray.push(num);
//       }
//       results.push(subArray);
//     } else if (row < n - 1) {
//       subArray.push(n + row);
//       results.push(subArray);
//       // for(let num = n + 1; num < 2 * n - 1; num++) {
//       //   subArray.push(num);
//       //   results.push(subArray);
//       //   subArray = [];
//       // }
//     } else if (row === n - 1) {
//       for(let num = 2 * n - 1; num < row + 2 * n; num++) {
//         subArray.unshift(num);
//       }
//       results.push(subArray);
//     }
//   } 
//   return results;
// }