const transpose = function (matrix) {
  // declare constants for rows and columns using the input matrix,  matrix.length = rows  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const rows = matrix.length;
  const columns = matrix[0].length;

  // declare an new empty array to hold results
  const transposed = [];

  // push a new empty array for each column of the input matrix
  for (let j = 0; j < columns; j++) {
    transposed.push([]);
  }

  // loop through the input matrix
  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    // for every row in the matrix
    // loop over each item in the row (aka column)
    // push each item in the row to the new array
    for (let colIdx = 0; colIdx < columns; colIdx++) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
};

module.exports = transpose;
