/**
 * @param {Object} options
 * @param {String} options.key
 * @param {Any} options.value
 * @param {Number}
 * @returns {void}
 */
const save = ({ key, value, expirationDays }) => {
  try {
    // Convert days to milliseconds (ms)
    const expirationMS = expirationDays * 24 * 60 * 60 * 1000;
    const record = {
      value: JSON.stringify(value),
      timestamp: new Date().getTime() + expirationMS
    };

    localStorage.setItem(key, JSON.stringify(record));
  } catch (e) {
    console.warn(e);
  }
};

/**
 * @param {String} key
 * @returns {(Object|void)}
 */
const fetch = key => {
  try {
    const record = JSON.parse(localStorage.getItem(key));

    // Return the record if it exists & its timestamp has not expired
    if (record && new Date().getTime() < record.timestamp) {
      return JSON.parse(record.value);
    }
  } catch (e) {
    console.warn(e);
  }
};

module.exports = {
  save,
  fetch
};
