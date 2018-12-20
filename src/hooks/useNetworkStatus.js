import { useState, useEffect } from 'react';

export default () => {
  const [isOnline, setIsOnline] = useState(null);

  const goOnline = () => {
    setIsOnline(true);
  };

  const goOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    setIsOnline(
      typeof navigator.onLine === 'boolean' ? navigator.onLine : true
    );

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return isOnline;
};
