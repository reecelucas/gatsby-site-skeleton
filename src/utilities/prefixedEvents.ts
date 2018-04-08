import serverRendered from './serverRendered';

const prefixedTransEndEvent = (): string => {
    if (serverRendered) return;

    const transitions: { [key: string]: string } = {
        transition: 'transitionend',
        OTransition: 'otransitionend',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd'
    };
    const elem: HTMLElement = document.createElement('fakeelement');
    const elemStyle: { [key: string]: any } = elem.style;
    let transName: string;

    Object.keys(transitions).forEach((key: string) => {
        if (elemStyle[key] !== undefined) {
            transName = transitions[key];
        }
    });

    return transName;
};

const prefixedAnimEndEvent = (): string => {
    if (serverRendered) return;

    const animations: { [key: string]: string } = {
        animation: 'animationend',
        OAnimation: 'oAnimationend',
        MozAnimation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd'
    };
    const elem: HTMLElement = document.createElement('fakeelement');
    const elemStyle: { [key: string]: any } = elem.style;
    let animName: string;

    Object.keys(animations).forEach((key: string) => {
        if (elemStyle[key] !== undefined) {
            animName = animations[key];
        }
    });

    return animName;
};

export const transEndEventName = prefixedTransEndEvent();
export const animEndEventName = prefixedAnimEndEvent();
