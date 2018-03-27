const gensymf = (tag = '') => {
  let index = 0;

  return () => {
    index += 1;
    return `${tag}${index}`;
  };
};

const gensymff = (func, seed) => (tag) => {
  let current = seed;

  return () => {
    current = func(current);
    return `${tag}${current}`;
  };
};

const fibonaccif = (first, second) => {
  let index = 0;
  let prevTwo = first;
  let prevOne = second;

  return () => {
    if (index === 0) {
      index += 1;
      return first;
    } else if (index === 1) {
      index += 1;
      return second;
    }

    const total = prevTwo + prevOne;
    prevTwo = prevOne;
    prevOne = total;
    return total;
  };
};
// const fibonaccif = (first, second) => {
//   let prevTwo = first;
//   let prevOne = second;

//   return () => {
//     const next = prevTwo;
//     prevTwo = prevOne;
//     prevOne += next;
//     return next;
//   };
// };
// const fibonaccif = (first, second) => {
//   let prevTwo = first;
//   let prevOne = second;

//   return concat(
//     element([prevTwo, prevOne]),
//     () => {
//       const next = prevTwo + prevOne;
//       prevTwo = prevOne;
//       prevOne = next;
//       return next;
//     },
//   );
// };

module.exports = {
  gensymf,
  gensymff,
  fibonaccif,
};
