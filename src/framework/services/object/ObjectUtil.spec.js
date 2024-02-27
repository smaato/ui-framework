
import ObjectUtil from './ObjectUtil';

describe('ObjectUtil', () => {
  describe('emptyObject', () => {
    it('return emptyObject from empty Object', () => {
      const someObject = {};
      ObjectUtil.emptyObject(someObject);
      expect(Object.keys(someObject).length).toBe(0);
    });
    it('return emptyObject from full object', () => {
      const someObject = {
        a: 1,
      };
      ObjectUtil.emptyObject(someObject);
      expect(Object.keys(someObject).length).toBe(0);
    });
  });

  describe('flattenNestedObject', () => {
    it(
      'converts a nested object into a flat object, using the original path ' +
      'to each value as a key',
      () => {
        const nestedObject = {
          a1: 1,
          b1: {
            b2: 2,
          },
          c1: {},
        };
        const flattenedObject = {
          a1: 1,
          'b1.b2': 2,
        };

        expect(
          ObjectUtil.flattenNestedObject(nestedObject)
        ).toEqual(flattenedObject);
      }
    );
  });

  describe('isObject', () => {
    describe('returns false when passed', () => {
      it('a string', () => {
        expect(ObjectUtil.isObject('')).toBe(false);
      });

      it('a number', () => {
        expect(ObjectUtil.isObject(1)).toBe(false);
      });

      it('an array', () => {
        expect(ObjectUtil.isObject([])).toBe(false);
      });

      it('a function', () => {
        expect(ObjectUtil.isObject(() => undefined)).toBe(false);
      });

      it('null', () => {
        expect(ObjectUtil.isObject(null)).toBe(false);
      });

      it('undefined', () => {
        expect(ObjectUtil.isObject(undefined)).toBe(false);
      });
    });

    it('returns true when passed an object', () => {
      expect(ObjectUtil.isObject({})).toBe(true);
    });
  });
});
