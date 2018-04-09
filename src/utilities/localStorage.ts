import serverRendered from './serverRendered';

interface SaveToLocalStorageParams {
    key: string;
    value: any;
    expirationDays: number;
}

export const saveToLocalStorage = ({
    key,
    value,
    expirationDays
}: SaveToLocalStorageParams): boolean => {
    if (serverRendered) return;

    // Try for localStorage support...
    try {
        // Convert days to milliseconds (ms)
        const expirationMS = expirationDays * 24 * 60 * 60 * 1000;
        const record = {
            value: JSON.stringify(value),
            timestamp: new Date().getTime() + expirationMS
        };

        localStorage.setItem(key, JSON.stringify(record));
    } catch (e) {
        return false;
    }
};

export const fetchFromLocalStorage = (key: string): any => {
    if (serverRendered) return;

    // Try for localStorage support...
    try {
        const record = JSON.parse(localStorage.getItem(key));

        // Return the record if it exists & its timestamp has not expired
        if (record && new Date().getTime() < record.timestamp) {
            return JSON.parse(record.value);
        }
    } catch (e) {
        return false;
    }
};
