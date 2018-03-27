const {
  add, mul,
} = require('../1/functionChallenge1');
const {
  curry, inc,
} = require('./functionChallenge2');

describe('Function Challenge 2', () => {
  describe('curry', () => {
    it('should add numbers across invocations', () => {
      const add40 = curry(add, 40);
      expect(add40(2)).toEqual(42);
      expect(add40(-40)).toEqual(0);
    });

    it('should multiply numbers across invocations', () => {
      const mul4 = curry(mul, 4);
      expect(mul4(8)).toEqual(32);
      expect(mul4(4)).toEqual(16);
    });
  });

  describe('inc', () => {
    it('should add numbers across invocations', () => {
      expect(inc(5)).toEqual(6);
      expect(inc(inc(5))).toEqual(7);
    });
  });
});
