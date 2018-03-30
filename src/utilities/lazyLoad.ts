import serverRendered from './serverRendered';
import { LazyLoadParams, LazyLoadAPI } from '../types';

/**
 * @param {object} options – configuration overrides
 * @param {String} [options.selector='.js-lazy-image'] – selector used to retrieve images
 * @param {String} [options.loadClass='has-loaded'] – class applied to each image once loaded
 * @param {String} [options.errorClass='has-error'] – class applied to each image on error
 * @param {Function} [options.loadCallback=null] – callback function executed on each image load
 * @param {Function} [options.errorCallback=null] – callback function executed on each image error
 * @param {String} [options.parentId=null] – ID of parent container. When no value is passed the
 * browser defaults to the viewport
 * @param {String} [options.rootMargin='0px 0px 0px 0px'] – margin around the root
 * (elem or viewport). Can have values similar to the CSS margin property,
 * e.g. "10px 20px 30px 40px" (top, right, bottom, left). If the parentId is specified,
 * the values can be percentages.
 * @param {Number} [options.threshold=0] – a single number which indicates at what percentage
 * of the target's visibility the observer's callback should be executed. E.g. if you only want to
 * detect when visibility passes the 50% mark (half of the element is visible within the
 * root element), you can use a value of 0.5.
 */
const lazyLoad = ({
  selector: selector = '.js-lazy-image',
  loadClass: loadClass = 'has-loaded',
  errorClass: errorClass = 'has-error',
  loadCallback: loadCallback = null,
  errorCallback: errorCallback = null,
  parentId: parentId = null,
  rootMargin: rootMargin = '0px 0px 0px 0px',
  threshold: threshold = 0
}: LazyLoadParams = {}): LazyLoadAPI => {
  if (serverRendered) return;

  const d = document;
  let imageArray: Element[] = [];
  let imageCount: number;
  let observer: any;

  /**
   * Disconnect the observer if it exists.
   * @private
   */
  function disconnectObserver(): void {
    if (observer) observer.disconnect();
  }

  /**
   * Removes 'data-src' and 'data-srcset' attributes from img node.
   * @private
   */
  function stripDataAttributes(img: Element): void {
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  }

  /**
   * @returns {Boolean} - True if img has the 'data-src' attribute,
   * which is stripped when the img is loaded.
   * @private
   */
  function hasNotBeenLoaded(img: HTMLImageElement): boolean {
    return img.hasAttribute('data-src');
  }

  /**
   * Sets image src and srcset.
   * Adds loadClass and fires loadCallback, if provided.
   *
   * @private
   */
  function applyImage(img: Element, src: string, srcset: string): void {
    const image = img;

    // set src & srcset & remove 'data-' attributes
    image.setAttribute('src', src);
    if (srcset) image.setAttribute('srcset', srcset);
    stripDataAttributes(image);

    if (!image.classList.contains(loadClass)) {
      image.classList.add(loadClass);
    }

    if (loadCallback && typeof loadCallback === 'function') {
      loadCallback(image);
    }
  }

  /**
   * Adds errorClass and fires errorCallback, if provided.
   * @private
   */
  function handleImageError(img: Element): void {
    const image = img;

    // Remove 'data-' attributes to prevent multiple attempts at lazy-loading
    stripDataAttributes(image);

    if (!image.classList.contains(errorClass)) {
      image.classList.add(errorClass);
    }

    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback(image);
    }
  }

  /**
   * Fetches the images for the given src and srcset URLs.
   * Returns a Promise that resolves if the images are successfuly downloaded.
   *
   * @returns {Promise} – Returns the img src and srcset URLs when resolved
   * @private
   */
  function fetchImages(srcUrl: string, srcsetUrls: string): Promise<{ [key: string]: string }> {
    return new Promise((resolve, reject) => {
      if (!srcUrl) reject();

      const image = new Image();
      /**
       * Bind load & error handlers before setting image src & srcset.
       * Return an object as the resolve value since Promises must only return a
       * single fullfilment value.
       */
      image.onload = () =>
        resolve({
          src: srcUrl,
          srcset: srcsetUrls
        });
      image.onerror = () => reject();

      image.src = srcUrl;
      if (srcsetUrls) image.srcset = srcsetUrls;
    });
  }

  /**
   * Retrieves the src and srcset URLs for a given image.
   * Calls fetchImages and handles image load and error.
   *
   * @private
   */
  function loadImage(img: Element): void {
    const srcUrl = img.getAttribute('data-src');
    const srcsetUrls = img.getAttribute('data-srcset');

    fetchImages(srcUrl, srcsetUrls)
      .then(({ src, srcset }) => applyImage(img, src, srcset))
      .catch(() => handleImageError(img));
  }

  /**
   * @private
   */
  function onEntry(entries: IntersectionObserverEntry[]): void {
    // Disconnect the observer when all images have been loaded
    if (imageCount === 0) disconnectObserver();

    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        imageCount -= 1;
        const image: Element = entry.target;

        // Stop watching the image and load it
        observer.unobserve(image);
        loadImage(image);
      }
    });
  }

  /**
   * Retrieves an array of DOM elements matching the given selector.
   * Creates a new instance of the IntersectionObserver (in supporting browsers),
   * to watch each selected element for visibility changes. In unsupporting browsers
   * the images are loaded immediately.
   *
   * @public
   */
  function init(): void {
    // retrieves an array of images that have not been lazy-loaded
    imageArray = Array.from(d.querySelectorAll(selector)).filter(hasNotBeenLoaded);

    if (imageArray.length > 0) {
      /**
       * If the browser does not support the Intersection Observer API & the
       * polyfill has not been included, load all images straight away.
       */
      if (!('IntersectionObserver' in window)) {
        imageArray.forEach((image: HTMLImageElement) => loadImage(image));
      } else {
        imageCount = imageArray.length;
        const observerOptions = {
          rootMargin,
          threshold,
          root: d.getElementById(parentId) // returns null if parentID is not passed at invocation
        };

        // instantiate a new Intersection Observer
        observer = new IntersectionObserver(onEntry, observerOptions);
        imageArray.forEach(image => observer.observe(image));
      }
    }
  }

  /**
   * Stops the observer from watching all of its target elements for visibility changes.
   * Empties the imageArray of DOM elements & resets the count variable.
   *
   * @public
   */
  function destroy(): void {
    disconnectObserver();
    imageArray = [];
    imageCount = 0;
  }

  /**
   * Tears down the observer before re-intitialising.
   * Useful for responding to DOM insertions.
   *
   * @public
   */
  function update(): void {
    destroy();
    init();
  }

  return {
    init,
    destroy,
    update
  };
};

export default lazyLoad;
