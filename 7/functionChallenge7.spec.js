const {
  add,
} = require('../1/functionChallenge1');
const {
  counter, revocable,
} = require('./functionChallenge7');

describe('Function Challenge 7', () => {
  describe('counter', () => {
    it('should keep private state, updating with function calls', () => {
      const { down, up } = counter(42);
      expect(up()).toEqual(43);
      expect(down()).toEqual(42);
      expect(down()).toEqual(41);
      expect(up()).toEqual(42);
    });
  });

  describe('revocable', () => {
    it('should keep private state, updating with function calls', () => {
      const { invoke, revoke } = revocable(add);
      expect(invoke(2, 2)).toEqual(4);
      expect(invoke(4, 8, 15, 16, 23, 42)).toEqual(108);
      revoke();
      expect(invoke(4, 8, 15, 16, 23, 42)).toEqual(undefined);
    });
  });
});
