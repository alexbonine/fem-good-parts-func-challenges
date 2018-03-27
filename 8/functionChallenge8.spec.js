const {
  add, mul,
} = require('../1/functionChallenge1');
const {
  m, addm, liftm, // 8
} = require('./functionChallenge8');

describe('Function Challenge 8', () => {
  describe('m', () => {
    it('should return object', () => {
      const value = 42;
      expect(m(value)).toEqual({ source: `${value}`, value });
    });

    it('should return object with source', () => {
      const value = Math.PI;
      const source = 'pi';
      expect(m(value, source)).toEqual({ source, value });
    });
  });

  describe('addm', () => {
    it('should default sources from two objects', () => {
      const first = 3;
      const second = 4;
      expect(addm(m(first), m(second))).toEqual({
        source: `(${first}+${second})`,
        value: first + second,
      });
    });

    it('should return custom sources from three objects', () => {
      const first = 3;
      const second = 4;
      const third = Math.PI;
      const secondSource = 'deux';
      const thirdSource = 'pi';
      expect(addm(m(first), m(second, secondSource), m(third, thirdSource))).toEqual({
        source: `(${first}+${secondSource}+${thirdSource})`,
        value: first + second + third,
      });
    });
  });

  describe('liftm', () => {
    it('should default sources from two objects', () => {
      const first = 2;
      const second = 4;
      const newAddM = liftm(add);
      expect(newAddM(m(first), m(second))).toEqual({
        source: `(${first}+${second})`,
        value: first + second,
      });
    });

    it('should return custom sources from three objects', () => {
      const first = 2;
      const second = 4;
      const third = Math.PI;
      const secondSource = 'deux';
      const thirdSource = 'pi';
      const newMulM = liftm(mul, '*');
      expect(newMulM(m(first), m(second, secondSource), m(third, thirdSource))).toEqual({
        source: `(${first}*${secondSource}*${thirdSource})`,
        value: first * second * third,
      });
    });

    it('should return custom sources from three objects with mix of numbers and objects', () => {
      const first = 2;
      const second = 4;
      const third = Math.PI;
      const fourth = 8;
      const secondSource = 'deux';
      const thirdSource = 'pi';
      const newMulM = liftm(mul, '*');
      expect(newMulM(first, m(second, secondSource), m(third, thirdSource), fourth)).toEqual({
        source: `(${first}*${secondSource}*${thirdSource}*${fourth})`,
        value: first * second * third * fourth,
      });
    });
  });
});
