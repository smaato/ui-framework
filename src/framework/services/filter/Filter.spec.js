
import Filter from './Filter';
import ComparisonTypes from './ComparisonTypes';

describe('Filter', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it(
        'accepts filterOption, comparisonType and comparisonValue params, ' +
        'and surfaces them',
        () => {
          const filterOption = {};
          const comparisonType = 'comparisonType';
          const comparisonValue = 'comparisonValue';
          const filter = new Filter(
            filterOption,
            comparisonType,
            comparisonValue
          );
          expect(filter.filterOption).toBe(filterOption);
          expect(filter.comparisonType).toBe(comparisonType);
          expect(filter.comparisonValue).toBe(comparisonValue);
        }
      );
    });

    describe('doesValuePass method', () => {
      describe('with MIN comparisonType', () => {
        const comparisonType = ComparisonTypes.MIN;
        const comparisonValue = 5;
        const itemValue = 6;

        it('matches numbers', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue.toString()
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with MAX comparisonType', () => {
        const comparisonType = ComparisonTypes.MAX;
        const comparisonValue = 5;
        const itemValue = 4;

        it('matches numbers', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue.toString()
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with CONTAINS comparisonType', () => {
        const comparisonType = ComparisonTypes.CONTAINS;
        const comparisonValue = 5;
        const itemValue = 5;

        it('matches numbers', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue.toString()
          );
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it(
          'matches when comparisonValue is a substring of itemValue',
          () => {
            const filter = new Filter(
              {},
              comparisonType,
              3
            );
            expect(filter.doesValuePass(12345)).toBe(true);
          }
        );

        it(
          'doesn\'t match when itemValue is a substring of comparisonValue',
          () => {
            const filter = new Filter(
              {},
              comparisonType,
              12345
            );
            expect(filter.doesValuePass('abc')).toBe(false);
          }
        );
      });

      describe('with no comparisonType', () => {
        const comparisonType = undefined;
        const comparisonValue = 5;
        const itemValue = 5;

        it('throws an error', () => {
          const filter = new Filter(
            {},
            comparisonType,
            comparisonValue
          );
          expect(() => filter.doesValuePass(itemValue)).toThrow();
        });
      });
    });

    describe('doesItemPass method', () => {
      it('extracts item value and calls doesValuePass', () => {
        const filterOption = {
          getValue: () => 'value',
        };
        const filter = new Filter(filterOption);
        const doesValuePassSpy = spyOn(filter, 'doesValuePass');
        filter.doesItemPass();
        expect(doesValuePassSpy).toHaveBeenCalledWith(filterOption.getValue());
      });
    });
  });
});
