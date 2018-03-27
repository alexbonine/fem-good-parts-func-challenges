const {
  add, sub, mul,
} = require('../1/functionChallenge1');
const {
  twice, reverse, composeu, composeb, limit,
} = require('./functionChallenge3');

describe('Function Challenge 3', () => {
  describe('twice', () => {
    it('should add numbers', () => {
      const double = twice(add);
      expect(double(12)).toEqual(24);
    });

    it('should multiple numbers', () => {
      const square = twice(mul);
      expect(square(12)).toEqual(144);
    });
  });

  describe('reverse', () => {
    it('should subtract numbers', () => {
      const rev = reverse(sub);
      expect(rev(4, 8)).toEqual(4);
      expect(rev(42, 23, 16, 15, 8, 4)).toEqual(-100);
    });
  });

  describe('composeu', () => {
    it('should double then square', () => {
      expect(composeu(twice(add), twice(mul))(5)).toEqual(100);
    });

    it('should handle multiple args', () => {
      expect(composeu(twice(add), twice(mul))(5, 5)).toEqual(400);
    });
  });

  describe('composeb', () => {
    it('should add then multiple', () => {
      expect(composeb(add, mul)(2, 3, 7)).toEqual(35);
    });
  });

  describe('limit', () => {
    it('should only allow two calls', () => {
      const limitedAdd = limit(add, 2);
      expect(limitedAdd(1, 2, 3)).toEqual(6);
      expect(limitedAdd(1, 2, 4, 8)).toEqual(15);
      expect(limitedAdd(4, 8, 15, 16, 23, 42)).toEqual(undefined);
    });
  });
});
