
import ThrottledEventDispatcher from '../event/ThrottledEventDispatcher';

export default class ScrollPosition {

  constructor() {
    this.listeners = [];
    this.previous = this.current = 0;
  }

  init(element) {
    function getPosition() {
      if (element) {
        return element.scrollTop;
      }

      // Default to the browser scroll position. Compare between values that are
      // used in Chrome and Firefox, respectively.
      return Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
    }

    const getDistanceFromBottom = () => {
      if (element) {
        // Subtract scroll position from the height of the scrollable content
        // (minus the height of the *visible* content).
        return (element.scrollHeight - element.clientHeight) - this.current;
      }

      // Default to using the height of the window and the document's scrollable
      // content.
      return (
        document.documentElement.scrollHeight - window.innerHeight
      ) - this.current;
    };

    // Throttle scroll event handling, in an attempt to improve performance.
    this.eventDispatcher = new ThrottledEventDispatcher(
      'scroll',
      'optimizedScrollPositionEvent',
      element || window,
      () => {
        // Update state.
        this.previous = this.current;
        this.current = getPosition();
        this.distanceFromBottom = getDistanceFromBottom();

        // Call listeners.
        this.listeners.forEach(listener => listener());
      }
    );
  }

  teardown() {
    this.eventDispatcher.teardown();
    this.listeners = undefined;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

}
