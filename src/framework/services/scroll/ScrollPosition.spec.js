
import ScrollPosition from './ScrollPosition';

describe('ScrollPosition', () => {
  let scrollPosition;

  beforeEach(() => {
    scrollPosition = new ScrollPosition();
  });

  describe('interface', () => {
    describe('constructor', () => {
      it('sets listeners to []', () => {
        expect(scrollPosition.listeners).toEqual([]);
      });

      it('sets previous property to 0', () => {
        expect(scrollPosition.previous).toBe(0);
      });

      it('sets current property to 0', () => {
        expect(scrollPosition.current).toBe(0);
      });

      it('doesn\'t set fromBottom property', () => {
        expect(scrollPosition.fromBottom).not.toBeDefined();
      });

      it('doesn\'t set element property', () => {
        expect(scrollPosition.element).not.toBeDefined();
      });
    });

    describe('init', () => {
      it('creates an event dispatcher', () => {
        expect(scrollPosition.eventDispatcher).not.toBeDefined();
        scrollPosition.init();
        expect(scrollPosition.eventDispatcher).toBeDefined();
      });
    });

    describe('reset', () => {
      it('sets element scrollTop to 0 when initalized with element', () => {
        const mockedElement = {
          addEventListener: () => undefined,
          scrollTop: 1,
        };

        scrollPosition.init(mockedElement);
        scrollPosition.reset();

        expect(mockedElement.scrollTop).toBe(0);
      });

      it('sets document scrollTop to 0 when initalized without element', () => {
        scrollPosition.init();

        document.body.scrollTop = 1;
        document.documentElement.scrollTop = 1;

        scrollPosition.reset();

        expect(document.body.scrollTop).toBe(0);
        expect(document.documentElement.scrollTop).toBe(0);
      });
    });

    describe('teardown', () => {
      it('calls teardown on its event dispatcher', () => {
        scrollPosition.init();
        spyOn(scrollPosition.eventDispatcher, 'teardown');
        scrollPosition.teardown();
        expect(scrollPosition.eventDispatcher.teardown).toHaveBeenCalled();
      });
    });

    describe('addListener', () => {
      it('adds a listener', () => {
        const listener = () => undefined;
        scrollPosition.addListener(listener);
        expect(scrollPosition.listeners).toContain(listener);
      });
    });

    describe('removeListener', () => {
      it('removes a listener', () => {
        const listener = () => undefined;
        scrollPosition.addListener(listener);
        scrollPosition.removeListener(listener);
        expect(scrollPosition.listeners).not.toContain(listener);
      });

      it('has no effect if listener hasn\'t been added', () => {
        // This test verifies that, internally, removeListener isn't calling
        // splice(-1, 1), since the index of a non-present element is -1.
        const listener1 = () => undefined;
        const listener2 = () => undefined;
        scrollPosition.addListener(listener1);
        scrollPosition.removeListener(listener2);
        expect(scrollPosition.listeners).toContain(listener1);
      });
    });
  });
});
