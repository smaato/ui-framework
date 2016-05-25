
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
  });
});
