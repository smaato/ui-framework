
import FilterMatcher from './FilterMatcher';
import FilterMethods from './FilterMethods';

describe('FilterMatcher', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it('accepts filter, filterMethod, and valueToMatch params, and surfaces them', () => {
        const filter = {};
        const filterMethod = 'filterMethod';
        const valueToMatch = 'valueToMatch';
        const filterMatcher = new FilterMatcher(filter, filterMethod, valueToMatch);
        expect(filterMatcher.filter).toBe(filter);
        expect(filterMatcher.filterMethod).toBe(filterMethod);
        expect(filterMatcher.valueToMatch).toBe(valueToMatch);
      });
    });

    describe('filterValue method', () => {
      describe('with MIN filterMethod', () => {
        const filterMethod = FilterMethods.MIN;
        const valueToMatch = 5;
        const itemValue = 6;

        it('matches numbers', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch.toString());
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });
      });

      describe('with MAX filterMethod', () => {
        const filterMethod = FilterMethods.MAX;
        const valueToMatch = 5;
        const itemValue = 4;

        it('matches numbers', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch.toString());
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });
      });

      describe('with CONTAINS filterMethod', () => {
        const filterMethod = FilterMethods.CONTAINS;
        const valueToMatch = 5;
        const itemValue = 5;

        it('matches numbers', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(filterMatcher.filterValue(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch.toString());
          expect(filterMatcher.filterValue(itemValue)).toBe(true);
        });

        it('matches when valueToMatch is a substring of itemValue', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, 3);
          expect(filterMatcher.filterValue(12345)).toBe(true);
        });

        it('doesn\'t match when itemValue is a substring of valueToMatch', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, 12345);
          expect(filterMatcher.filterValue('abc')).toBe(false);
        });
      });

      describe('with no filterMethod', () => {
        const filterMethod = undefined;
        const valueToMatch = 5;
        const itemValue = 5;

        it('throws an error', () => {
          const filterMatcher = new FilterMatcher({}, filterMethod, valueToMatch);
          expect(() => filterMatcher.filterValue(itemValue)).toThrow();
        });
      });
    });

    describe('filterItem method', () => {
      it('extracts item value and calls filterValue', () => {
        const filter = {
          getValue: () => 'value',
        };
        const filterMatcher = new FilterMatcher(filter);
        const filterValueSpy = spyOn(filterMatcher, 'filterValue');
        filterMatcher.filterItem();
        expect(filterValueSpy).toHaveBeenCalledWith(filter.getValue());
      });
    });
  });
});
