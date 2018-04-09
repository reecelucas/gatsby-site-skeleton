import easingFunctions from './easingFunctions';

interface ScrollItParams {
    destination: number;
    duration: number;
    easing:
    | 'linear'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint';
    callback?: () => any;
}

const w = window;
const d = document;
const html = d.documentElement;
const body = d.body;

// Modified from: https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
export default function scrollIt({
    destination,
    duration = 400,
    easing = 'linear',
    callback
}: ScrollItParams): void {
    // Store initial scroll position and time
    const start = w.pageYOffset;
    const startTime = new Date().getTime();

    // Calculate the max scrollable value
    const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const winHeight =
        w.innerHeight || html.clientHeight || d.getElementsByTagName('body')[0].clientHeight;

    const destinationOffsetToScroll = Math.round(
        docHeight - destination < winHeight ? docHeight - winHeight : destination
    );

    // If `requestAnimationFrame` is not supported...
    if (!('requestAnimationFrame' in window)) {
        scrollTo(0, destinationOffsetToScroll);
        if (callback && typeof callback === 'function') callback();
        return;
    }

    function scroll() {
        const scrollY = w.pageYOffset;
        const now = new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const easingFunc = easingFunctions[easing](time);

        w.scroll(0, Math.ceil(easingFunc * (destinationOffsetToScroll - start) + start));

        // We've reached our destination...
        if (scrollY === destinationOffsetToScroll) {
            if (callback && typeof callback === 'function') callback();
            return;
        }

        requestAnimationFrame(scroll);
    }

    // Kickoff
    scroll();
}
