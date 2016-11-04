
export default class EscapeKeyHandler {

  constructor(callback) {
    this.callback = callback;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.removeListener = this.removeListener.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    if (event.keyCode === 27) {
      this.callback();
    }
  }

  removeListener() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

}
