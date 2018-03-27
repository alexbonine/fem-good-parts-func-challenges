const {
  limit,
} = require('../3/functionChallenge3');
const {
  pubsubHackable, pubsub,
} = require('./functionChallenge12');

describe('Function Challenge 12', () => {
  describe('pubsubHackable', () => {
    let catcher1;
    let catcher2;
    let ps;
    let text;

    const catcher = () => {
      const args = [];

      return {
        get: () => args,
        func: (content) => {
          args.push(content);
        },
      };
    };

    beforeEach(() => {
      ps = pubsubHackable();
      catcher1 = catcher();
      catcher2 = catcher();
      text = 'published text';

      ps.subscribe(catcher1.func);
      ps.subscribe(catcher2.func);
    });

    afterEach(() => {
      catcher1 = null;
      catcher2 = null;
      ps = null;
      text = '';
    });

    it('should blow up when passed null', () => {
      ps.subscribe();
      const catcher3 = catcher();
      ps.subscribe(catcher3.func);

      try {
        ps.publish(text);
      } catch (e) {
        expect(catcher1.get()).toEqual([text]);
        expect(catcher2.get()).toEqual([text]);
        expect(catcher3.get()).toEqual([]);
      }
    });

    it('should be able to overwrite publish', () => {
      ps.publish = null;

      try {
        ps.publish(text);
      } catch (e) {
        expect(catcher1.get()).toEqual([]);
        expect(catcher2.get()).toEqual([]);
      }
    });

    it('should have access to this', () => {
      let stash;
      ps.subscribe(function hack () {
        stash = this;
      });
      ps.publish(text);

      expect(catcher1.get()).toEqual([text]);
      expect(catcher2.get()).toEqual([text]);
      expect(Array.isArray(stash)).toBeTruthy();
    });

    it('should publish to subscribers out of order', () => {
      const badText = 'Out of Order';
      const catcher3 = catcher();
      function hack () {
        ps.publish(badText);
      }

      ps.subscribe(limit(hack, 1));
      ps.subscribe(catcher3.func);
      ps.publish(text);

      expect(catcher1.get()).toEqual([text, badText]);
      expect(catcher2.get()).toEqual([text, badText]);
      expect(catcher3.get()).toEqual([badText, text]);
    });
  });

  describe('pubsub', () => {
    let catcher1;
    let catcher2;
    let ps;
    let text;

    const catcher = () => {
      const args = [];

      return {
        get: () => args,
        func: (content) => {
          args.push(content);
        },
      };
    };

    beforeEach(() => {
      ps = pubsub();
      catcher1 = catcher();
      catcher2 = catcher();
      text = 'published text';

      ps.subscribe(catcher1.func);
      ps.subscribe(catcher2.func);
    });

    afterEach(() => {
      catcher1 = null;
      catcher2 = null;
      ps = null;
      text = '';
    });

    it('should not blow up when passed null', async () => {
      ps.subscribe();
      const catcher3 = catcher();
      ps.subscribe(catcher3.func);

      ps.publish(text);

      setTimeout(() => {
        expect(catcher1.get()).toEqual([text]);
        expect(catcher2.get()).toEqual([text]);
        expect(catcher3.get()).toEqual([text]);
      }, 0);
    });

    it('should not be able to overwrite publish', async () => {
      try {
        ps.publish = null;
        expect(ps.publish).not.toBeNull();
      } catch (e) {
        ps.publish(text);
        setTimeout(() => {
          expect(catcher1.get()).toEqual([text]);
          expect(catcher2.get()).toEqual([text]);
        }, 0);
      }
    });

    it('should not have access to this', async () => {
      let stash;
      ps.subscribe(function hack () {
        stash = this;
      });
      ps.publish(text);

      setTimeout(() => {
        expect(catcher1.get()).toEqual([text]);
        expect(catcher2.get()).toEqual([text]);
        expect(stash).toBeUndefined();
      }, 0);
    });

    it('should not publish to subscribers out of order', async () => {
      const badText = 'Out of Order';
      const catcher3 = catcher();
      function hack () {
        ps.publish(badText);
      }

      ps.subscribe(limit(hack, 1));
      ps.subscribe(catcher3.func);
      ps.publish(text);

      setTimeout(() => {
        expect(catcher1.get()).toEqual([text, badText]);
        expect(catcher2.get()).toEqual([text, badText]);
        expect(catcher3.get()).toEqual([text, badText]);
      }, 0);
    });
  });
});
