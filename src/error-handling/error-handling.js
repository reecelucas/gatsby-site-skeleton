import log from '../helpers/log';

const error = {
  meta: {},
  steps: []
};

const getReadableTimestamp = () => new Date(Date.now()).toLocaleString();

export const startErrorTracking = () => {
  error.meta.startTime = getReadableTimestamp();
  error.meta.startUrl = document.location.href;
  error.meta.screenWidth = window.innerWidth;
  error.meta.screenHeight = window.innerHeight;
  error.meta.userAgent = navigator.userAgent;
};

export const captureInteraction = event => {
  if (
    !event.target ||
    !(event.target instanceof SVGElement || event.target instanceof HTMLElement)
  ) {
    log.red('You must pass an Event object to captureInteraction');
    return;
  }

  const { dataset, textContent } = event.target;

  if (!dataset.interactionId) {
    log.yellow('You cannot record an interaction for an element with no ID');
  }

  error.steps.push({
    time: getReadableTimestamp(),
    type: 'Element interacted with',
    data: {
      interactionId: dataset.interactionId,
      ...(textContent && { textContent })
    }
  });
};

export const logErrorReport = err => {
  error.meta.endTime = getReadableTimestamp();
  error.meta.shortError = err.message;
  error.meta.error = `
    ${err.message} (in ${err.filename} ${err.lineno}:${err.colno})
  `;

  if (process.env.NODE_ENV !== 'production') {
    window.__ERROR__ = error;

    log.red('Error occured', error);
    log.yellow(
      'Tip: type "copy(__ERROR__)" to copy the error object to the clipboard'
    );
  }
};
