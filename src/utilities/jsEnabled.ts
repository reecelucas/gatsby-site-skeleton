import serverRendered from './serverRendered';

const jsEnabled = () => !serverRendered && document.documentElement.classList.contains('js');

export default jsEnabled;
