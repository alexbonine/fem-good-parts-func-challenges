const { add, liftf } = require('../1/functionChallenge1');

// const curry = (func, ...base) => (...arg) => func(...base, ...arg);
const curry = (func, ...base) => liftf(func)(...base);

const inc = curry(add, 1);
// const inc = addf(1);
// const inc = liftf(add)(1);

module.exports = {
  curry,
  inc,
};
