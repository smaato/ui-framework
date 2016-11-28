
import EscapeKeyHandler from './EscapeKeyHandler';

describe('EscapeKeyHandler', () => {
  describe('constructor', () => {
    it('sets callback of instance to passed method', () => {
      const callback = () => undefined;
      const escapeKeyHandler = new EscapeKeyHandler(callback);

      expect(escapeKeyHandler.callback).toBe(callback);
    });

    it('adds keydown event listener on document', () => {
      spyOn(document, 'addEventListener');

      const escapeKeyHandler = new EscapeKeyHandler();

      expect(document.addEventListener)
        .toHaveBeenCalledWith('keydown', escapeKeyHandler.onKeyDown);
    });
  });

  describe('onKeyDown', () => {
    it('calls callback when keyCode of passed event is 27', () => {
      const callback = jasmine.createSpy();
      const escapeKeyEventMock = {
        keyCode: 27,
      };
      const escapeKeyHandler = new EscapeKeyHandler(callback);

      escapeKeyHandler.onKeyDown(escapeKeyEventMock);

      expect(callback).toHaveBeenCalled();
    });

    it('does not call callback when keyCode of passed event is not 27', () => {
      const callback = jasmine.createSpy();
      const enterKeyEventMock = {
        keyCode: 13,
      };
      const escapeKeyHandler = new EscapeKeyHandler(callback);

      escapeKeyHandler.onKeyDown(enterKeyEventMock);

      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('removeListener', () => {
    it('removes keydown event listener from document', () => {
      spyOn(document, 'removeEventListener');

      const escapeKeyHandler = new EscapeKeyHandler();

      escapeKeyHandler.removeListener();

      expect(document.removeEventListener)
        .toHaveBeenCalledWith('keydown', escapeKeyHandler.onKeyDown);
    });
  });
});
