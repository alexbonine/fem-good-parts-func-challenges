const vectorHackable = () => {
  const array = [];

  return {
    get: (index) => array[index],
    store: (index, value) => {
      array[index] = value;
    },
    append: (value) => {
      array.push(value);
    },
  };
};

const vector = () => {
  const array = [];

  return {
    get: (index) => array[+index],
    store: (index, value) => {
      array[+index] = value;
    },
    append: (value) => {
      array[array.length - 1] = value;
    },
  };
};

module.exports = {
  vectorHackable,
  vector,
};
