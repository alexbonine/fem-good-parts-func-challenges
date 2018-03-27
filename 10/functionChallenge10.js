const { add } = require('../1/functionChallenge1');

const addg = (arg, total) => {
  if (arg === undefined) {
    return total;
  }

  const newTotal = add(arg, total || 0);

  return (nextArg) => addg(nextArg, newTotal);
};
// const addg = (first) => {
//   let total = first;
//   const more = (next) => {
//     if (next === undefined) {
//       return total;
//     }

//     total += next;
//     return more;
//   };

//   if (first !== undefined) {
//     return more;
//   }

//   return undefined;
// };

const liftg = (func = add) => (first) => {
  let total = first;
  if (first === undefined) {
    return total;
  }

  const more = (next) => {
    if (next === undefined) {
      return total;
    }

    total = func(total, next);
    return more;
  };

  return more;
};

const arrayg = (arg) => {
  const array = [];

  const more = (nextArg) => {
    if (nextArg === undefined) {
      return array;
    }

    array.push(nextArg);
    return more;
  };

  return more(arg);
};

const continuize = (func) => (callback, ...args) => {
  callback(func(...args));
};

module.exports = {
  addg,
  liftg,
  arrayg,
  continuize,
};
