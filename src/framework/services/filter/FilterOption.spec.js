
import FilterOption from './FilterOption';
import ComparisonTypes from './ComparisonTypes';

describe('FilterOption', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it(
        'accepts name and comparisonType params, ' +
        'and surfaces them, defaults isRemovable to true',
        () => {
          const config = {
            name: 'Status',
            comparisonType: ComparisonTypes.ONE_OF,
          };
          const filter = new FilterOption(config);
          expect(filter.name).toBe('Status');
          expect(filter.comparisonType).toBe(ComparisonTypes.ONE_OF);
          expect(filter.isRemovable).toBe(true);
        }
      );
      it('isRemovable is false', () => {
        const config = {
          isRemovable: false,
        };
        const filter = new FilterOption(config);
        expect(filter.isRemovable).toBe(false);
      });
      it('isRemovable is true', () => {
        const config = {
          isRemovable: true,
        };
        const filter = new FilterOption(config);
        expect(filter.isRemovable).toBe(true);
      });
    });
  });
});
