const counter = (init) => {
  let current = init;

  return {
    up: () => {
      current += 1;
      return current;
    },
    down: () => {
      current -= 1;
      return current;
    },
  };
};

const revocable = (func) => {
  let allowed = true;

  return {
    invoke: (...args) => {
      if (allowed) {
        return func(...args);
      }
      return undefined;
    },
    revoke: () => {
      allowed = false;
    },
  };
};

module.exports = {
  counter,
  revocable,
};
