const {
  vectorHackable, vector,
} = require('./functionChallenge11');

describe('Function Challenge 11', () => {
  describe('vectorHackable', () => {
    it('should be hackable by creating local push', () => {
      const v = vectorHackable();
      v.append('a');
      v.append('b');
      let stash;
      v.store('push', function hack () {
        stash = this;
      });
      v.append();

      expect(typeof stash).toEqual('object');
      expect(stash[0]).toEqual('a');
      expect(stash[1]).toEqual('b');
    });
  });

  describe('vector', () => {
    it('should not be hackable by creating local push', () => {
      const v = vector();
      v.append('a');
      v.append('b');
      let stash;
      v.store('push', function hack () {
        stash = this;
      });
      v.append();

      expect(stash).toBeUndefined();
    });
  });
});
