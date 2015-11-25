
/**
 * Adapated from https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 *
 * TODO: This class is slightly inefficient, since it's possible to register
 * identical throttledEventNames with different instances of this class.
 * This will result in the handlers being called multiple times when the event
 * is fired once. We would need to convert this into a singleton and track
 * registered throttledEventNames and their handlers to remove this inefficiency.
 */

export default class ThrottledEventDispatcher {

  constructor(
    originalEventName,
    throttledEventName,
    dispatcher = window,
    throttledEventHandler = undefined
  ) {
    this.originalEventName = originalEventName;
    this.throttledEventName = throttledEventName;
    this.dispatcher = dispatcher;
    this.throttledEventHandlers = [];

    let isRunning = false;

    this.originalEventHandler = () => {
      if (isRunning) { return; }
      isRunning = true;
      requestAnimationFrame(() => {
        dispatcher.dispatchEvent(new CustomEvent(throttledEventName));
        isRunning = false;
      });
    };

    this.dispatcher.addEventListener(
      this.originalEventName, this.originalEventHandler
    );

    if (throttledEventHandler) {
      this.addEventListener(throttledEventHandler);
    }
  }

  teardown() {
    // Stop listening to original event.
    this.dispatcher.removeEventListener(
      this.originalEventName, this.originalEventHandler
    );

    // Stop listening to throttled event.
    for (let i = 0; i < this.throttledEventHandlers.length; i++) {
      this.removeEventListener(this.throttledEventHandlers[i]);
    }
  }

  addEventListener(throttledEventHandler) {
    this.throttledEventHandlers.push(throttledEventHandler);
    this.dispatcher.addEventListener(
      this.throttledEventName, throttledEventHandler
    );
  }

  removeEventListener(throttledEventHandler) {
    this.dispatcher.removeEventListener(
      this.throttledEventName, throttledEventHandler
    );
  }

}
