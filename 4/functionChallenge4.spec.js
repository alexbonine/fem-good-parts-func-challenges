const {
  from, to, fromTo, element,
} = require('./functionChallenge4');

describe('Function Challenge 4', () => {
  describe('from', () => {
    it('should increment from initial value', () => {
      const index = from(0);
      expect(index()).toEqual(0);
      expect(index()).toEqual(1);
      expect(index()).toEqual(2);
    });
  });

  describe('to', () => {
    it('should increment from initial value', () => {
      const index = to(from(1), 3);
      expect(index()).toEqual(1);
      expect(index()).toEqual(2);
      expect(index()).toEqual(undefined);
    });
  });

  describe('fromTo', () => {
    it('should increment a range', () => {
      const index = fromTo(0, 3);
      expect(index()).toEqual(0);
      expect(index()).toEqual(1);
      expect(index()).toEqual(2);
      expect(index()).toEqual(undefined);
    });
  });

  describe('element', () => {
    it('should increment a range', () => {
      const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
      expect(ele()).toEqual('b');
      expect(ele()).toEqual('c');
      expect(ele()).toEqual(undefined);
    });

    it('should increment entire array when no generator passed', () => {
      const ele = element(['a', 'b', 'c', 'd']);
      expect(ele()).toEqual('a');
      expect(ele()).toEqual('b');
      expect(ele()).toEqual('c');
      expect(ele()).toEqual('d');
      expect(ele()).toEqual(undefined);
    });
  });
});
