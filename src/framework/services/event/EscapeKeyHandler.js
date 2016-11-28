
const ESCAPE_KEY_CODE = 27;

export default class EscapeKeyHandler {

  constructor(callback) {
    this.callback = callback;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.removeListener = this.removeListener.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      this.callback();
    }
  }

  removeListener() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

}
