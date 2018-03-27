const {
  inc,
} = require('../2/functionChallenge2');
const {
  gensymf, gensymff, fibonaccif,
} = require('./functionChallenge6');

describe('Function Challenge 6', () => {
  describe('gensymf', () => {
    it('should generate ids off base arg', () => {
      const genG = gensymf('G');
      const genH = gensymf('H');
      expect(genG()).toEqual('G1');
      expect(genH()).toEqual('H1');
      expect(genG()).toEqual('G2');
      expect(genH()).toEqual('H2');
    });
  });

  describe('gensymff', () => {
    it('should generate ids off base arg', () => {
      const genSymFF = gensymff(inc, 0);
      const genG = genSymFF('G');
      const genH = genSymFF('H');
      expect(genG()).toEqual('G1');
      expect(genH()).toEqual('H1');
      expect(genG()).toEqual('G2');
      expect(genH()).toEqual('H2');
    });
  });

  describe('fibonaccif', () => {
    it('should move along sequence', () => {
      const fib = fibonaccif(0, 1);
      expect(fib()).toEqual(0);
      expect(fib()).toEqual(1);
      expect(fib()).toEqual(1);
      expect(fib()).toEqual(2);
      expect(fib()).toEqual(3);
      expect(fib()).toEqual(5);
      expect(fib()).toEqual(8);
    });
  });
});
