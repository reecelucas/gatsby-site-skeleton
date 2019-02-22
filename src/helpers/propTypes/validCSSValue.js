import { VALID_CSS_UNITS } from '../../constants/global';

const stripNumbersFromString = str => str.replace(/[0-9]/g, '');

export default (props, propValue, componentName) => {
  const value = props[propValue];
  if (!value || value === '0') return;

  const unit = stripNumbersFromString(value);

  if (!VALID_CSS_UNITS.includes(unit)) {
    return new Error(
      `Invalid prop \`${propValue}\` of value \`${value}\` supplied to \`${componentName}\`, expected string to end with a valid CSS unit.`
    );
  }
};
