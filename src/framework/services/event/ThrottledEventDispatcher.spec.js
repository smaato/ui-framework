
import ThrottledEventDispatcher from './ThrottledEventDispatcher';

describe('ThrottledEventDispatcher', () => {
  describe('interface', () => {
    // Constructor
    describe('constructor method', () => {
      describe('internals', () => {
        it('calls addEventListener on dispatcher', () => {
          const dispatcher = {
            addEventListener: jasmine.createSpy('addEventListener'),
          };
          const eventHandler = jasmine.createSpy('eventHandler');
          const throttledDispatcher = new ThrottledEventDispatcher( // eslint-disable-line no-unused-vars
            'originalEventName',
            'throttledEventName',
            dispatcher,
            eventHandler
          );
          expect(dispatcher.addEventListener).toHaveBeenCalledWith(
            'throttledEventName',
            jasmine.any(Function)
          );
        });
      });

      // originalEventName param
      describe('originalEventName parameter', () => {
        it('throws an error if not provided', () => {
          expect(() => {
            new ThrottledEventDispatcher(undefined, 'throttledEventName'); // eslint-disable-line no-new
          }).toThrow();
        });
      });

      // throttledEventName param
      describe('throttledEventName parameter', () => {
        it('throws an error if not provided', () => {
          expect(() => {
            new ThrottledEventDispatcher('originalEventName', undefined); // eslint-disable-line no-new
          }).toThrow();
        });
      });

      // dispatcher param
      describe('dispatcher parameter', () => {
        it('defaults to the window if not provided', () => {
          const throttledDispatcher = new ThrottledEventDispatcher(
            'originalEventName',
            'throttledEventName'
          );
          expect(throttledDispatcher.dispatcher).toBe(window);
        });
      });

      // throttledEventHandler param
      describe('throttledEventHandler parameter', () => {
        it('is added as a listener if provided', () => {
          const eventHandler = jasmine.createSpy('eventHandler');
          const throttledDispatcher = new ThrottledEventDispatcher(
            'originalEventName',
            'throttledEventName',
            window,
            eventHandler
          );
          expect(
            throttledDispatcher.throttledEventHandlers.indexOf(eventHandler) !== -1
          ).toBe(true);
        });
      });
    });

    // teardown method
    describe('teardown method', () => {
      it('calls removeEventListener on dispatcher', () => {
        const dispatcher = {
          addEventListener: jasmine.createSpy('addEventListener'),
          removeEventListener: jasmine.createSpy('removeEventListener'),
        };
        const eventHandler = jasmine.createSpy('eventHandler');
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName',
          dispatcher,
          eventHandler
        );
        expect(dispatcher.removeEventListener).not.toHaveBeenCalled();
        throttledDispatcher.teardown();
        expect(dispatcher.removeEventListener).toHaveBeenCalledWith(
          'throttledEventName',
          eventHandler
        );
      });

      it('removes event handlers', () => {
        const eventHandler = jasmine.createSpy('eventHandler');
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName',
          window,
          eventHandler
        );
        throttledDispatcher.teardown();
        expect(
          throttledDispatcher.throttledEventHandlers.indexOf(eventHandler) === -1
        ).toBe(true);
      });
    });

    // addEventListener method
    describe('addEventListener method', () => {
      it('calls addEventListener on dispatcher', () => {
        const dispatcher = {
          addEventListener: jasmine.createSpy('addEventListener'),
        };
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName',
          dispatcher
        );
        const eventHandler = jasmine.createSpy('eventHandler');
        throttledDispatcher.addEventListener(eventHandler);
        expect(dispatcher.addEventListener).toHaveBeenCalledWith(
          'throttledEventName',
          eventHandler
        );
      });

      it('stores a reference to the event handler', () => {
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName'
        );
        expect(throttledDispatcher.throttledEventHandlers.length).toBe(0);
        const eventHandler = jasmine.createSpy('eventHandler');
        throttledDispatcher.addEventListener(eventHandler);
        expect(throttledDispatcher.throttledEventHandlers[0]).toBe(eventHandler);
      });
    });

    // addEventListener method
    describe('removeEventListener method', () => {
      it('calls removeEventListener on dispatcher', () => {
        const dispatcher = {
          addEventListener: jasmine.createSpy('addEventListener'),
          removeEventListener: jasmine.createSpy('removeEventListener'),
        };
        const eventHandler = jasmine.createSpy('eventHandler');
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName',
          dispatcher,
          eventHandler
        );
        expect(dispatcher.removeEventListener).not.toHaveBeenCalled();
        throttledDispatcher.removeEventListener(eventHandler);
        expect(dispatcher.removeEventListener).toHaveBeenCalledWith(
          'throttledEventName',
          eventHandler
        );
      });

      it('removes a reference to the event handler', () => {
        const dispatcher = {
          addEventListener: jasmine.createSpy('addEventListener'),
          removeEventListener: jasmine.createSpy('removeEventListener'),
        };
        const eventHandler = jasmine.createSpy('eventHandler');
        const throttledDispatcher = new ThrottledEventDispatcher(
          'originalEventName',
          'throttledEventName',
          dispatcher,
          eventHandler
        );
        expect(throttledDispatcher.throttledEventHandlers.length).toBe(1);
        throttledDispatcher.removeEventListener(eventHandler);
        expect(throttledDispatcher.throttledEventHandlers.length).toBe(0);
      });
    });
  });
});
