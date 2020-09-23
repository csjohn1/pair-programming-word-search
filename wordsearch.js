//Pair programmed by Rajdeep Ghatore and Chris John


const transpose = function(matrix) {
    const rows = matrix.length; // 0
    if (matrix[0]) {
        const columns = matrix[0].length; // undefined
        const newArray = [];
        for (let i = 0; i < columns; i++) { // error
          newArray[i] = new Array(rows);
        }
          for (let i = 0; i < rows; i++) {
          for (let j = 0; j < columns; j++) {
            newArray[j][i] = matrix[i][j];
          }
        }
        return newArray;
    }
  };

const wordSearch = (letters, word) => {
    if (letters.length === 0 || word === '') {
        return false;
    }
    const lettersTranspose = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''));
    const horizontalJoin2 = lettersTranspose.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        // console.log(l.includes(word));
        if (l.includes(word)) {
            return true;
        }
    }
    
    for (l of horizontalJoin2) {
        // console.log(l.includes(word));
        if (l.includes(word)) {
            return true;
        }
    }

return false;
};

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK');

module.exports = wordSearch;




    
    
//     //Do not edit this function.
//     const printMatrix = (matrix) => {
//         for (const row of matrix) {
//             for (const el of row) {
//                 process.stdout.write(el + " ");
//             }
//             process.stdout.write('\n')
//         }
//     }
    
//     printMatrix(transpose([
//       [1, 2, 3, 4],
//       [1, 2, 3, 4],
//       [1, 2, 3, 4],
//       [1, 2, 3, 4]
//     ]));
    
//     console.log('----')
    
//     printMatrix(transpose([
//       [1, 2],
//       [3, 4],
//       [5, 6]
//     ]));
    
//     console.log('----')
    
//     printMatrix(transpose([
//       [1, 2, 3, 4, 5, 6, 7]
//     ]));