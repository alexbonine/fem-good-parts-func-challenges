const collect = (generator, array) => () => {
  const value = generator();

  if (value !== undefined) {
    array.push(value);
  }

  return value;
};

const filter = (generator, predicate) => () => {
  let value = generator();

  while (value !== undefined && !predicate(value)) {
    value = generator();
  }

  return value;
};
// const filter = (generator, predicate) => function recur () {
//   const value = generator();

//   if (value === undefined || predicate(value)) {
//     return value;
//   }

//   return recur();
// };

const concat = (...generators) => {
  let index = 0;
  return () => {
    let value;

    while (value === undefined && index < generators.length) {
      value = generators[index]();

      if (value === undefined) {
        index += 1;
      }
    }

    return value;
  };
};
// const concat = (...generators) => {
//   const next = element(generators);
//   let gen = next();

//   return function recur () {
//     const value = gen();

//     if (value === undefined) {
//       gen = next();

//       if (gen !== undefined) {
//         return recur();
//       }
//     }

//     return value;
//   };
// };

module.exports = {
  collect,
  filter,
  concat,
};
