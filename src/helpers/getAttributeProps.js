const whiteListAttributePatterns = /^(aria-|data-|role|name|id|className|title|type)/;

export default (props = {}) =>
  Object.keys(props)
    .filter(prop => whiteListAttributePatterns.test(prop))
    .reduce((acc, key) => {
      acc[key] = props[key];
      return acc;
    }, {});
