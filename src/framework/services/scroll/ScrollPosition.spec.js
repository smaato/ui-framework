
import ScrollPosition from './ScrollPosition';

describe('ScrollPosition', () => {
  let scrollPosition;

  beforeEach(() => {
    scrollPosition = new ScrollPosition();
  });

  describe('interface', () => {
    describe('constructor', () => {
      describe('sets previous property', () => {
        it('to 0', () => {
          expect(scrollPosition.previous).toBe(0);
        });
      });

      describe('sets current property', () => {
        it('to 0', () => {
          expect(scrollPosition.current).toBe(0);
        });
      });

      it('doesn\'t set fromBottom property', () => {
        expect(scrollPosition.fromBottom).not.toBeDefined();
      });
    });

    describe('init', () => {
      it('creates an event dispatcher', () => {
        expect(scrollPosition.eventDispatcher).not.toBeDefined();
        scrollPosition.init();
        expect(scrollPosition.eventDispatcher).toBeDefined();
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
