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
        ['Y', 'E', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'I', 'T', 'L', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'N', 'Z', 'I', 'Y', 'L'],
        ['B', 'F', 'L', 'E', 'F', 'E', 'L', 'B'],
        ['U', 'B', 'A', 'I', 'C', 'E', 'I', 'Y'],
        ['O', 'D', 'C', 'A', 'L', 'U', 'L', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'Y', 'A', 'D'],
      ],
      'LILY'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present diagonally and forwards down', function () {
    const result = wordSearch(
      [
        ['A', 'S', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['S', 'E', 'E', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'E', 'C', 'I', 'I', 'U', 'I', 'L'],
        ['H', 'M', 'I', 'T', 'N', 'V', 'R', 'N'],
        ['W', 'H', 'C', 'N', 'Z', 'F', 'Y', 'L'],
        ['B', 'F', 'R', 'E', 'F', 'E', 'E', 'B'],
        ['U', 'B', 'A', 'L', 'C', 'E', 'I', 'L'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'L', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'D'],
      ],
      'SEINFELD'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present diagonally and backwards down', function () {
    const result = wordSearch(
      [
        ['A', 'S', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['S', 'E', 'E', 'N', 'X', 'E', 'L', 'S'],
        ['Y', 'E', 'C', 'I', 'I', 'U', 'E', 'L'],
        ['H', 'M', 'L', 'T', 'N', 'I', 'R', 'N'],
        ['W', 'H', 'C', 'N', 'N', 'F', 'Y', 'L'],
        ['B', 'F', 'R', 'F', 'F', 'E', 'E', 'B'],
        ['U', 'B', 'E', 'L', 'C', 'E', 'I', 'L'],
        ['O', 'L', 'C', 'A', 'K', 'U', 'L', 'S'],
        ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'D'],
      ],
      'SEINFELD'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present diagonally and forwards up', function () {
    const result = wordSearch(
      [
        ['A', 'S', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['S', 'E', 'E', 'N', 'X', 'E', 'L', 'D'],
        ['Y', 'E', 'C', 'I', 'I', 'U', 'L', 'L'],
        ['H', 'M', 'L', 'T', 'N', 'E', 'R', 'N'],
        ['W', 'H', 'C', 'N', 'F', 'F', 'Y', 'L'],
        ['B', 'F', 'R', 'N', 'F', 'E', 'E', 'B'],
        ['U', 'B', 'I', 'L', 'C', 'E', 'I', 'L'],
        ['O', 'E', 'C', 'A', 'K', 'U', 'L', 'S'],
        ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'D'],
      ],
      'SEINFELD'
    );

    assert.isTrue(result);
  });
  it('returns true if the word is present diagonally and backwards up', function () {
    const result = wordSearch(
      [
        ['A', 'S', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['D', 'E', 'E', 'N', 'X', 'E', 'L', 'S'],
        ['Y', 'L', 'C', 'I', 'I', 'U', 'E', 'L'],
        ['H', 'M', 'E', 'T', 'N', 'P', 'R', 'N'],
        ['W', 'H', 'C', 'F', 'N', 'F', 'Y', 'L'],
        ['B', 'F', 'R', 'P', 'N', 'E', 'E', 'B'],
        ['U', 'B', 'E', 'L', 'C', 'I', 'I', 'L'],
        ['O', 'L', 'C', 'A', 'K', 'U', 'E', 'S'],
        ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'S'],
      ],
      'SEINFELD'
    );

    assert.isTrue(result);
  });
});
