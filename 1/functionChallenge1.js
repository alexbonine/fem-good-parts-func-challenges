const add = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);

const sub = (...args) => args.reduce((accumulator, current, index) => {
  if (index > 0) {
    return accumulator - current;
  }

  return accumulator;
}, args[0]);

const mul = (...args) => args.reduce((accumulator, current, index) => {
  // console.log(accumulator, 'current')
  if (index > 0) {
    return accumulator * current;
  }

  return accumulator;
}, args[0]);

const identityf = (arg) => () => arg;

const addf = (...args1) => (...args2) => add(...args1, ...args2);

const liftf = (func) => (...args1) => (...args2) => func(...args1, ...args2);

module.exports = {
  add,
  sub,
  mul,
  identityf,
  addf,
  liftf,
};
