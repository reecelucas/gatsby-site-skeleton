import serverRendered from './serverRendered';

const setCookie = (key: string, value: string, days: number): void => {
  if (serverRendered) return;

  const today: Date = new Date();
  const expire: Date = new Date();

  expire.setTime(today.getTime() + 3600000 * 24 * days);
  document.cookie = `${key}=${encodeURIComponent(
    value
  )};expires='${expire.toUTCString()}`;
};

export default setCookie;
