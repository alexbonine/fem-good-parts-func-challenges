const from = (start = 0) => {
  let next = start;

  return () => {
    const current = next;
    next += 1;
    return current;
  };
};

const to = (generator, max) => () => {
  const current = generator();
  if (current >= max) {
    return undefined;
  }

  return current;
};

const fromTo = (start, end) => to(from(start), end);

const element = (array, generator) => {
  const gen = generator || fromTo(0, array.length);

  return () => {
    const index = gen();

    if (index !== undefined) {
      return array[index];
    }

    return undefined;
  };
};

module.exports = {
  from,
  to,
  fromTo,
  element,
};
