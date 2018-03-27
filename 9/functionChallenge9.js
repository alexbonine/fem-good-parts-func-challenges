const exp = (arg) => {
  if (Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0](...arg.slice(1).map(exp));
  }

  return arg;
};

module.exports = {
  exp,
};
