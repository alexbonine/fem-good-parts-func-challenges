const m = (value, source) => ({
  source: source || `${value}`,
  value,
});

// const addm = (...objects) => objects.reduce((accumulator, obj, index) => {
//   let source;
//   if (index === 0) {
//     source = `(${obj.source}`;
//   } else if (index === objects.length - 1) {
//     source = `${accumulator.source}+${obj.source})`;
//   } else {
//     source = `${accumulator.source}+${obj.source}`;
//   }

//   return {
//     source,
//     value: accumulator.value + obj.value,
//   };
// }, { value: 0, source: '' });
// const addm = (...objects) => m(
//   objects.reduce((accumulator, { value }) => accumulator + value, 0),
//   objects.reduce((accumulator, { source }, index) => {
//     const start = accumulator.slice(0, accumulator.length - 1);
//     const connector = index > 0 ? '+' : '';
//     const end = accumulator.slice(-1);
//     return `${start}${connector}${source}${end}`;
//   }, '()'),
// );
const addm = (...objects) => {
  const { source, value } = objects.reduce((accumulator, obj, index) => {
    const start = accumulator.source.slice(0, accumulator.source.length - 1);
    const connect = index > 0 ? '+' : '';
    const end = accumulator.source.slice(-1);

    return {
      source: `${start}${connect}${obj.source}${end}`,
      value: accumulator.value + obj.value,
    };
  }, { value: 0, source: '()' });

  return m(value, source);
};

const liftm = (func, connector = '+') => (...args) => {
  const { source, value } = args.reduce((accumulator, arg, index) => {
    let obj = arg;
    if (typeof arg !== 'object') {
      obj = m(arg);
    }

    if (index === 0) {
      return { value: obj.value, source: `(${obj.source})` };
    }

    const start = accumulator.source.slice(0, accumulator.source.length - 1);
    const end = accumulator.source.slice(-1);

    return {
      source: `${start}${connector}${obj.source}${end}`,
      value: func(accumulator.value, obj.value),
    };
  }, {});

  return m(value, source);
};

module.exports = {
  m,
  addm,
  liftm,
};
