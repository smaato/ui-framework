
import MixedTypeValueFilter from './MixedTypeValueFilter';

describe('MixedTypeValueFilter', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it(
        'accepts discreeteValues and an inputValue and surfaces them',
        () => {
          const discreteValues = [{ label: 'Test', value: 'test' }];
          const inputValue = '42';
          const filter = new MixedTypeValueFilter(discreteValues, inputValue);
          expect(filter.discreteValues).toBe(discreteValues);
          expect(filter.inputValue).toBe(inputValue);
        }
      );
    });
  });
});

