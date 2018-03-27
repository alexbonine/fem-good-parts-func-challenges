const pubsubHackable = () => {
  const subscribers = [];

  return {
    subscribe: (subr) => {
      subscribers.push(subr);
    },
    publish: (pub) => {
      for (let i = 0; i < subscribers.length; i += 1) {
        subscribers[i](pub);
      }
    },
  };
};

const pubsub = () => {
  const subscribers = [];

  return Object.freeze({
    subscribe: (subr) => {
      if (typeof subr === 'function') {
        subscribers.push(subr);
      }
    },
    publish: (pub) => {
      subscribers.forEach((subr) => {
        if (typeof subr === 'function') {
          setTimeout(() => {
            subr(pub);
          }, 0);
        }
      });
    },
  });
};

module.exports = {
  pubsubHackable,
  pubsub,
};
