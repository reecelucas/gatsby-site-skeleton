import serverRendered from '../../utilities/serverRendered';

const encodeFormData = (data: { [key: string]: string }): string | undefined => {
    if (serverRendered) return;

    return Object.keys(data)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
};

export default encodeFormData;
