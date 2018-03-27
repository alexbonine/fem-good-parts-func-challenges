const twice = (func) => (...args) => func(...args, ...args);

const reverse = (func) => (...args) => func(...args.reverse());

const composeu = (...funcArgs) => (...args) => funcArgs.reduce((accumulator, func) => {
  if (accumulator) {
    return func(accumulator);
  }

  return func(...args);
}, undefined);
// const composeu = (func1, func2) => (arg) => func2(func1(arg));

const composeb = (func1, func2) => (...args) => func2(func1(args[0], args[1]), args[2]);

const limit = (func, max) => {
  let count = 0;

  return (...args) => {
    if (count >= max) {
      return undefined;
    }

    count += 1;
    return func(...args);
  };
};

module.exports = {
  twice,
  reverse,
  composeu,
  composeb,
  limit,
};
