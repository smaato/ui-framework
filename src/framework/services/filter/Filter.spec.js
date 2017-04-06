
import Filter from './Filter';
import ComparisonTypes from './ComparisonTypes';

import {
  OneOfOption,
} from '../../services';

describe('Filter', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it(
        'accepts filterOption and comparisonValue params, ' +
        'and surfaces them',
        () => {
          const filterOption = {
            comparisonType: 'comparisonType',
          };
          const comparisonValue = 'comparisonValue';
          const filter = new Filter(filterOption, comparisonValue);
          expect(filter.filterOption).toBe(filterOption);
          expect(filter.comparisonValue).toBe(comparisonValue);
        }
      );
    });

    describe('humanizeComparisonValue method', () => {
      it('returns comparisonValue with MIN comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.MIN,
        };
        const comparisonValue = 5;
        const filter = new Filter(filterOption, comparisonValue);
        expect(filter.humanizeComparisonValue()).toBe(comparisonValue);
      });

      it('returns comparisonValue with MAX comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.MAX,
        };
        const comparisonValue = 5;
        const filter = new Filter(filterOption, comparisonValue);
        expect(filter.humanizeComparisonValue()).toBe(comparisonValue);
      });

      it('returns comparisonValue with CONTAINS comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.CONTAINS,
        };
        const comparisonValue = 5;
        const filter = new Filter(filterOption, comparisonValue);
        expect(filter.humanizeComparisonValue()).toBe(comparisonValue);
      });

      it('returns joined string with ONE_OF comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.ONE_OF,
        };
        const normalizedComparisonValues =
          [new OneOfOption(5), new OneOfOption(6)];
        const filter = new Filter(filterOption, normalizedComparisonValues);
        expect(filter.humanizeComparisonValue()).toBe('5, 6');
      });
    });

    describe('doesValuePass method', () => {
      describe('with MIN comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.MIN,
        };
        const comparisonValue = 5;
        const itemValue = 6;

        it('matches numbers', () => {
          const filter = new Filter(filterOption, comparisonValue);
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(filterOption, comparisonValue);
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(filterOption, comparisonValue.toString());
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with MAX comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.MAX,
        };
        const comparisonValue = 5;
        const itemValue = 4;

        it('matches numbers', () => {
          const filter = new Filter(filterOption, comparisonValue);
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(
            filterOption,
            comparisonValue
          );
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(filterOption, comparisonValue.toString());
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with CONTAINS comparisonType', () => {
        const filterOption = {
          comparisonType: ComparisonTypes.CONTAINS,
        };
        const comparisonValue = 5;
        const itemValue = 5;

        it('matches numbers', () => {
          const filter = new Filter(filterOption, comparisonValue);
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const filter = new Filter(filterOption, comparisonValue);
          expect(
            filter.doesValuePass(itemValue.toString())
          ).toBe(true);
        });

        it('matches a string and a number', () => {
          const filter = new Filter(filterOption, comparisonValue.toString());
          expect(filter.doesValuePass(itemValue)).toBe(true);
        });

        it(
          'matches when comparisonValue is a substring of itemValue',
          () => {
            const filter = new Filter(filterOption, 3);
            expect(filter.doesValuePass(12345)).toBe(true);
          }
        );

        it(
          'doesn\'t match when itemValue is a substring of comparisonValue',
          () => {
            const filter = new Filter(filterOption, 12345);
            expect(filter.doesValuePass('abc')).toBe(false);
          }
        );
      });

      describe('with no comparisonType', () => {
        const filterOption = {
          comparisonType: undefined,
        };
        const comparisonValue = 5;
        const itemValue = 5;

        it('throws an error', () => {
          const filter = new Filter(filterOption, comparisonValue);
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
