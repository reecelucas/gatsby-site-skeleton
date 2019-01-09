export default (attributes = {}) =>
  Object.keys(attributes)
    .filter(attr => /^error/.test(attr))
    .reduce((acc, key) => {
      acc[key] = attributes[key];
      return acc;
    }, {});
