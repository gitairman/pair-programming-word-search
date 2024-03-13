const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe('#wordSearch()', function () {
  it('should return false if the word is not present', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'FRANK'
    );

    assert.isFalse(result);
  });

  it('should return true if the word is present horizontally and forwards', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'SEINFELD'
    );

    assert.isTrue(result);
  });

  it('should return true if the word is present vertically and forwards', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'L', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LILY'
    );

    assert.isTrue(result);
  });
  it('throws an error if the matrix is empty', function () {
    const result = () => wordSearch([[]], 'LILY');

    assert.throws(result, Error);
  });
  it('throws an error if no search term is provided', function () {
    const result = () =>
      wordSearch([
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Z', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'Y', 'L', 'I', 'L', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ]);

    assert.throws(result, Error);
  });
  it('returns true if the word is present horizontally and backwards', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Z', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'Y', 'L', 'I', 'L', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LILY'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present vertically and backwards', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Z', 'E', 'Y', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'L', 'B'],
        ['U', 'B', 'A', 'L', 'C', 'L', 'I', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'L', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LILY'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present diagonally and forwards down', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'L', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'I', 'Z', 'E', 'Y', 'L'],
        ['B', 'F', 'R', 'E', 'L', 'E', 'N', 'B'],
        ['U', 'B', 'A', 'L', 'C', 'Y', 'I', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'V', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LILY'
    );

    assert.isTrue(result);
  });
});
