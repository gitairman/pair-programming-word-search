const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => {
  if (!word) throw new Error('No search word provided!');
  if (!letters || letters.length === 0 || letters[0].length === 0)
    throw new Error('Matrix not provided or empty!');

  // reverse the search term in order to find in matrix
  const reversed = word.split('').reverse().join('');
  const horizontalJoin = letters.map((ls) => ls.join(''));

  // alternative short form of transpose
  // const transpose = (matrix) => matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));

  // transpose matrix to check for vertical
  const verticalJoin = transpose(letters).map((ls) => ls.join(''));

  // check horizontal
  for (l of horizontalJoin) {
    // forwards
    if (l.includes(word) || l.includes(reversed)) return true;
    // backwards
  }

  // check vertically
  for (const l of verticalJoin) {
    // top down
    if (l.includes(word) || l.includes(reversed)) return true;
  }

  // check diagonals helper function
  const checkDiag = (matrix, word, idx, fwd) => {
    if (word.length === 0) return true;
    if (matrix.length === 0) return false;
    if (idx >= matrix[0].length || idx < 0) return false;
    if (matrix[0][idx] === word[0]) {
      const nextIdx = fwd ? idx + 1 : idx - 1;
      return checkDiag(matrix.slice(1), word.slice(1), nextIdx, fwd);
    }
    return false;
  };

  // iterate through letters matrix one letter at a time checking for diagonal matches
  for (const [i, row] of letters.entries()) {
    for (const [j, letter] of row.entries()) {
      if (letter === word[0]) {
        if (checkDiag(letters.slice(i + 1), word.slice(1), j + 1, true))
          return true;
        if (checkDiag(letters.slice(i + 1), word.slice(1), j - 1, false))
          return true;
      }
      if (letter === reversed[0]) {
        if (checkDiag(letters.slice(i + 1), reversed.slice(1), j + 1, true))
          return true;
        if (checkDiag(letters.slice(i + 1), reversed.slice(1), j - 1, false))
          return true;
      }
    }
  }

  return false;
};

module.exports = wordSearch;
