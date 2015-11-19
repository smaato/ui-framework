
import NumberAbbreviatorFactory, {
  NumberAbbreviator,
} from './NumberAbbreviatorFactory';

describe('NumberAbbreviatorFactory', () => {
  describe('factory', () => {
    describe('createFromElement method', () => {
      it('returns a NumberAbbreviator instance', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator instanceof NumberAbbreviator).toBe(true);
      });

      it('has defaults', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.symbolsOrderedByScale).toEqual(['k', 'M', 'B']);
        expect(numberAbbreviator.precision).toEqual(2);
      });

      it('can be configured', () => {
        const symbolsOrderedByScale = ['k', 'M', 'B'];
        const precision = 10;
        const numberAbbreviator = NumberAbbreviatorFactory.create({
          symbolsOrderedByScale,
          precision,
        });
        expect(numberAbbreviator.symbolsOrderedByScale).toEqual(symbolsOrderedByScale);
        expect(numberAbbreviator.precision).toEqual(precision);
      });
    });
  });

  describe('NumberAbbreviator instance', () => {
    describe('abbreviate method', () => {
      it('abbreviates at the scale of thousands', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(1000)).toBe('1.00k');
      });

      it('abbreviates at the scale of millions', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(1000000)).toBe('1.00M');
      });

      it('abbreviates at the scale of billions', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(1000000000)).toBe('1.00B');
      });

      it('rounds to the nearest decimal place of precision', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(321258)).toBe('321.26k');
      });

      it('truncates fractional numbers below the scale of thousands', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(123.2345)).toBe('123.23');
      });

      it('truncates whole numbers below the scale of thousands', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create();
        expect(numberAbbreviator.abbreviate(123)).toBe('123.00');
      });

      it('can be configured to trim trailing zeroes', () => {
        const numberAbbreviator = NumberAbbreviatorFactory.create({
          trimTrailingZeroes: true,
        });
        expect(numberAbbreviator.abbreviate(1000)).toBe('1k');
        expect(numberAbbreviator.abbreviate(123)).toBe('123');
      });
    });
  });
});
