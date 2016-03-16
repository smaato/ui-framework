
import SortState from './SortState';

describe('SortState', () => {
  let sortState;

  const config = {
    descendingProperty: 'isSortDescending',
    indexProperty: 'sortedColumnIndex',
    isDescending: false,
    index: 1,
  };

  beforeEach(() => {
    sortState = new SortState(config);
  });

  describe('interface', () => {
    describe('getState', () => {
      describe('it returns an object', () => {
        it('with a configured descending property', () => {
          expect(sortState.state[config.descendingProperty])
            .toBe(config.isDescending);
        });

        it('with a configured index property', () => {
          expect(sortState.state[config.indexProperty])
            .toBe(config.index);
        });
      });
    });

    describe('sortOn', () => {
      describe('when called with the current index', () => {
        it('reverses the sort order', () => {
          sortState.sortOn(config.index);
          expect(sortState.state[config.descendingProperty])
            .toBe(!config.isDescending);
        });

        it('preserves the current index', () => {
          sortState.sortOn(config.index);
          expect(sortState.state[config.indexProperty])
            .toBe(config.index);
        });
      });

      describe('when called with a new index', () => {
        it('preserves the sort order', () => {
          sortState.sortOn(config.index);
          expect(sortState.state[config.descendingProperty])
            .toBe(!config.isDescending);
        });

        it('sets the new index', () => {
          sortState.sortOn(2);
          expect(sortState.state[config.indexProperty])
            .toBe(2);
        });
      });
    });
  });
});
