
/**
 * Polyfill for IE9 and up.
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */

export default function polyfillCustomEvent() {
  function CustomEvent(event, params = {
    bubbles: false,
    cancelable: false,
    detail: undefined,
  }) {
    const customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return customEvent;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}
