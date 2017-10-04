import serverRendered from './serverRendered';

export const saveToLocalStorage = (
  key: string,
  data: any,
  expirationDays: number
): boolean => {
  if (serverRendered) return;

  // try for localStorage support...
  try {
    // convert days to milliseconds (ms)
    const expirationMS = expirationDays * 24 * 60 * 60 * 1000;
    const record = {
      value: JSON.stringify(data),
      timestamp: new Date().getTime() + expirationMS
    };

    localStorage.setItem(key, JSON.stringify(record));
  } catch (e) {
    return false;
  }
};

export const fetchFromLocalStorage = (key: string): any => {
  if (serverRendered) return;

  // try for localStorage support...
  try {
    const record = JSON.parse(localStorage.getItem(key));

    // return the record if it exists & its timestamp has not expired
    if (record && new Date().getTime() < record.timestamp) {
      return JSON.parse(record.value);
    }
  } catch (e) {
    return false;
  }
};
