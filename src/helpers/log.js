// Modified from https://tinyurl.com/y6vxdrxk
const createLogger = (backgroundColor, color) => {
  const logger = (message, ...args) => {
    console.log(
      `%c${message}`,
      `background-color: ${backgroundColor}; color: ${color}; padding: 2px 4px;`,
      ...args
    );
  };

  return logger;
};

export default {
  blue: createLogger('#1E88E5', '#90CAF9'),
  brown: createLogger('#6D4C41', '#D7CCC8'),
  gray: createLogger('#212121', '#BDBDBD'),
  green: createLogger('#388E3C', '#A5D6A7'),
  red: createLogger('#E53935', '#FFFFFF'),
  orange: createLogger('#F4511E', '#FFAB91'),
  purple: createLogger('#8E24AA', '#E1BEE7'),
  yellow: createLogger('#FFD600', '#222222')
};
