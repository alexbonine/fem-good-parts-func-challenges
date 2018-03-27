const {
  fromTo,
} = require('../4/functionChallenge4');
const {
  collect, filter, concat,
} = require('./functionChallenge5');

describe('Function Challenge 5', () => {
  describe('collect', () => {
    it('should increment a range', () => {
      const array = [];
      const col = collect(fromTo(0, 3), array);
      col();
      col();
      col();
      expect(array).toEqual([0, 1, 2]);
    });
  });

  describe('filter', () => {
    it('should only return values okayed by predicate', () => {
      const fil = filter(fromTo(0, 5), (val) => val % 3 === 0);
      expect(fil()).toEqual(0);
      expect(fil()).toEqual(3);
      expect(fil()).toEqual(undefined);
    });
  });


  describe('concat', () => {
    it('should run multiple generators in a row', () => {
      const con = concat(fromTo(0, 3), fromTo(0, 2), fromTo(0, 1));
      expect(con()).toEqual(0);
      expect(con()).toEqual(1);
      expect(con()).toEqual(2);
      expect(con()).toEqual(0);
      expect(con()).toEqual(1);
      expect(con()).toEqual(0);
      expect(con()).toEqual(undefined);
    });
  });
});
