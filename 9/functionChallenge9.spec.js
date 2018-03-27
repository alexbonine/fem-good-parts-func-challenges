const {
  add, mul,
} = require('../1/functionChallenge1');
const {
  twice,
} = require('../3/functionChallenge3');
const {
  exp,
} = require('./functionChallenge9');

describe('Function Challenge 9', () => {
  describe('exp', () => {
    it('should evaluate simple array expression', () => {
      expect(exp([mul, 11, 5, 2])).toEqual(110);
    });

    it('should return simple number', () => {
      const value = 42;
      expect(exp(value)).toEqual(value);
    });

    it('should evaluate nested array expression', () => {
      const square = twice(mul);
      expect(exp([Math.sqrt, [add, [square, 3], [square, 4]]])).toEqual(5);
    });
  });
});
