import serverRendered from './serverRendered';

// modified Outline.js: https://github.com/lindsayevans/outline.js
const d = document;
const head = d.getElementsByTagName('HEAD')[0];
const styleElem = d.createElement('STYLE');

// inserts style string in the injected `<style>` tag
function setCss(cssString: string): void {
    styleElem.innerHTML = cssString;
}

function removeFocusState(): void {
    setCss(':focus{outline:0;}::-moz-focus-inner{border:0;}');
}

function restoreFocusState(): void {
    setCss('');
}

export default function controlOutline(): void {
    if (serverRendered) return;

    head.appendChild(styleElem);

    /**
     * use `mousedown` instead of `mouseover`, so that previously focused
     * elements don't lose focus ring on mouse move
     */
    d.addEventListener('mousedown', removeFocusState);
    d.addEventListener('keydown', restoreFocusState);
}
