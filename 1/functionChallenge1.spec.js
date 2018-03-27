const {
  add, sub, mul, identityf, addf, liftf,
} = require('./functionChallenge1');

describe('Function Challenge 1', () => {
  describe('add', () => {
    it('should add lost numbers', () => {
      expect(add(4, 8, 15, 16, 23, 42)).toEqual(108);
    });

    it('should add numbers', () => {
      expect(add(1, 2, 4, 8)).toEqual(15);
    });

    it('should handle no params', () => {
      expect(add()).toEqual(0);
    });
  });

  describe('sub', () => {
    it('should subtract lost numbers', () => {
      expect(sub(42, 23, 16, 15, 8, 4)).toEqual(-24);
    });

    it('should subtract numbers', () => {
      expect(sub(8, 4)).toEqual(4);
    });

    it('should handle no params', () => {
      expect(sub()).toEqual(undefined);
    });
  });

  describe('mul', () => {
    it('should multiply lost numbers', () => {
      expect(mul(4, 8, 15, 16, 23, 42)).toEqual(7418880);
    });

    it('should multiply numbers', () => {
      expect(mul(4, 8)).toEqual(32);
    });

    it('should handle no params', () => {
      expect(mul()).toEqual(undefined);
    });
  });

  describe('identityf', () => {
    it('should return arg passed in when called', () => {
      const call = identityf(42);
      expect(call()).toEqual(42);
    });

    it('should handle no params', () => {
      const call = identityf();
      expect(call()).toEqual(undefined);
    });
  });

  describe('addf', () => {
    it('should add numbers across invocations', () => {
      expect(addf(40)(2)).toEqual(42);
    });

    it('should handle no params', () => {
      expect(addf()()).toEqual(0);
    });
  });

  describe('liftf', () => {
    it('should add numbers across invocations', () => {
      expect(liftf(add)(40)(2)).toEqual(42);
    });

    it('should multiply numbers across invocations', () => {
      expect(liftf(mul)(4)(8)).toEqual(32);
    });
  });
});
