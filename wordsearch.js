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

  return false;
};

module.exports = wordSearch;
