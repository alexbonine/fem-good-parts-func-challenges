const {
  mul,
} = require('../1/functionChallenge1');
const {
  addg, liftg, arrayg, continuize,
} = require('./functionChallenge10');

describe('Function Challenge 10', () => {
  describe('addg', () => {
    it('should add up returning when see empty invocation', () => {
      expect(addg()).toEqual(undefined);
      expect(addg(2)()).toEqual(2);
      expect(addg(2)(7)()).toEqual(9);
      expect(addg(3)(0)(4)()).toEqual(7);
      expect(addg(4)(8)(15)(16)(23)(42)()).toEqual(108);
    });
  });

  describe('liftg', () => {
    it('should multiple up returning when see empty invocation', () => {
      expect(liftg(mul)()).toEqual(undefined);
      expect(liftg(mul)(3)()).toEqual(3);
      expect(liftg(mul)(3)(0)()).toEqual(0);
      expect(liftg(mul)(4)(8)(15)(16)(23)(42)()).toEqual(7418880);
    });

    it('should default to adding up returning when see empty invocation', () => {
      expect(liftg()()).toEqual(undefined);
      expect(liftg()(3)()).toEqual(3);
      expect(liftg()(3)(0)()).toEqual(3);
      expect(liftg()(4)(8)(15)(16)(23)(42)()).toEqual(108);
    });
  });

  describe('arrayg', () => {
    it('should add up returning when see empty invocation', () => {
      expect(arrayg()).toEqual([]);
      expect(arrayg(3)()).toEqual([3]);
      expect(arrayg(3)(4)(5)()).toEqual([3, 4, 5]);
      expect(arrayg(4)(8)(15)(16)(23)(42)()).toEqual([4, 8, 15, 16, 23, 42]);
    });
  });

  describe('continuize', () => {
    it('should add up returning when see empty invocation', () => {
      const catcher = () => {
        let args = [];

        return {
          setArgs: (...newArgs) => {
            args = args.concat(newArgs);
          },
          getArgs: () => args,
        };
      };
      const cont = catcher();

      const sqrtc = continuize(Math.sqrt);
      sqrtc(cont.setArgs, 81);
      expect(cont.getArgs()).toEqual([9]);
    });
  });
});
