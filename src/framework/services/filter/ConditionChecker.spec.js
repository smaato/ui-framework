
import ConditionChecker from './ConditionChecker';
import ComparisonTypes from './ComparisonTypes';

describe('ConditionChecker', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it('accepts filter, comparisonType, and comparisonValue params, and surfaces them', () => {
        const filter = {};
        const comparisonType = 'comparisonType';
        const comparisonValue = 'comparisonValue';
        const conditionChecker = new ConditionChecker(filter, comparisonType, comparisonValue);
        expect(conditionChecker.filter).toBe(filter);
        expect(conditionChecker.comparisonType).toBe(comparisonType);
        expect(conditionChecker.comparisonValue).toBe(comparisonValue);
      });
    });

    describe('doesValuePass method', () => {
      describe('with MIN comparisonType', () => {
        const comparisonType = ComparisonTypes.MIN;
        const comparisonValue = 5;
        const itemValue = 6;

        it('matches numbers', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue.toString());
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with MAX comparisonType', () => {
        const comparisonType = ComparisonTypes.MAX;
        const comparisonValue = 5;
        const itemValue = 4;

        it('matches numbers', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue.toString());
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });
      });

      describe('with CONTAINS comparisonType', () => {
        const comparisonType = ComparisonTypes.CONTAINS;
        const comparisonValue = 5;
        const itemValue = 5;

        it('matches numbers', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });

        it('matches a number and a string', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(conditionChecker.doesValuePass(itemValue.toString())).toBe(true);
        });

        it('matches a string and a number', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue.toString());
          expect(conditionChecker.doesValuePass(itemValue)).toBe(true);
        });

        it('matches when comparisonValue is a substring of itemValue', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, 3);
          expect(conditionChecker.doesValuePass(12345)).toBe(true);
        });

        it('doesn\'t match when itemValue is a substring of comparisonValue', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, 12345);
          expect(conditionChecker.doesValuePass('abc')).toBe(false);
        });
      });

      describe('with no comparisonType', () => {
        const comparisonType = undefined;
        const comparisonValue = 5;
        const itemValue = 5;

        it('throws an error', () => {
          const conditionChecker = new ConditionChecker({}, comparisonType, comparisonValue);
          expect(() => conditionChecker.doesValuePass(itemValue)).toThrow();
        });
      });
    });

    describe('doesItemPass method', () => {
      it('extracts item value and calls doesValuePass', () => {
        const filter = {
          getValue: () => 'value',
        };
        const conditionChecker = new ConditionChecker(filter);
        const doesValuePassSpy = spyOn(conditionChecker, 'doesValuePass');
        conditionChecker.doesItemPass();
        expect(doesValuePassSpy).toHaveBeenCalledWith(filter.getValue());
      });
    });
  });
});
