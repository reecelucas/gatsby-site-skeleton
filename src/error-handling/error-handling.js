import log from '../helpers/log';
import getReadableTimestamp from './helpers/getReadableTimestamp';
import getErrorDataAttributes from './helpers/getErrorDataAttributes';

const error = {
  meta: {},
  steps: []
};

export const startErrorTracking = () => {
  error.meta.startTime = getReadableTimestamp();
  error.meta.startUrl = document.location.href;
  error.meta.screenWidth = window.innerWidth;
  error.meta.screenHeight = window.innerHeight;
  error.meta.userAgent = navigator.userAgent;
};

export const captureInteraction = ({ target }) => {
  error.steps.push({
    timestamp: getReadableTimestamp(),
    type: 'Element interacted with',
    data: {
      ...getErrorDataAttributes(target.dataset),
      textContent: target.textContent
    }
  });
};

export const sendErrorReport = err => {
  error.meta.endTime = getReadableTimestamp();
  error.meta.shortError = err.message;
  error.meta.error = `
    ${err.message} (in ${err.filename} ${err.lineno}:${err.colno})
  `;

  if (process.env.NODE_ENV === 'development') {
    window.__ERROR__ = error;

    log.red('Error recorded', error);
    log.yellow(
      'Tip: type "copy(__ERROR__)" to copy the error object to the clipboard'
    );
  }
};
