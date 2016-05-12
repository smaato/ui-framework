import Sorter from './Sorter';
import TestUtils from '../../../services/TestUtils';

describe('Sorter', () => {
  describe('interface', () => {
    const items = [{
      a: 'TestB1',
      b: 'TestA2',
    }, {
      a: 'TestA1',
      b: 'TestB2',
    }, {
      a: null,
      b: null,
    }, {
      a: 1,
      b: 2,
    }, {
      a: 2,
      b: 1,
    }, {
      a: undefined,
      b: undefined,
    }];

    const valueProvider = item => item.a;

    describe('normalizeValue method', () => {
      it('allows undefined to pass through', () => {
        expect(Sorter.normalizeValue(undefined)).toBe(undefined);
      });

      it('allows null to pass through', () => {
        expect(Sorter.normalizeValue(null)).toBe(null);
      });

      it('allows falsy value empty string to pass through', () => {
        expect(Sorter.normalizeValue('')).toBe('');
      });

      it('converts falsy value 0 to a string', () => {
        expect(Sorter.normalizeValue(0)).toBe('0');
      });

      it('converts numbers to strings', () => {
        expect(Sorter.normalizeValue(214.5)).toBe('214.5');
      });

      it('converts objects to strings', () => {
        expect(Sorter.normalizeValue({})).toBe('[object object]');
      });

      it('converts arrays to strings', () => {
        expect(Sorter.normalizeValue([1, 2])).toBe('1,2');
      });

      it('converts strings to lowercase', () => {
        expect(Sorter.normalizeValue('TEST')).toBe('test');
      });

      it('trims whitespace from strings', () => {
        expect(Sorter.normalizeValue('   t e s t   ')).toBe('t e s t');
      });
    });

    describe('sortBy method', () => {
      it('delegates to the sort method', () => {
        spyOn(Sorter, 'sort');
        Sorter.sortBy(items, valueProvider);
        expect(Sorter.sort)
          .toHaveBeenCalledWith(items, valueProvider, undefined, undefined);
      });
    });

    describe('sort method', () => {
      const valueProvidersByIndex = [
        item => item.a,
        item => item.b,
      ];

      it('returns a new array', () => {
        const test = items === Sorter.sort(items, valueProvidersByIndex, 0);
        expect(test).toBe(false);
      });

      describe('originalItems parameter', () => {
        it('isn\'t sorted if it has 0 items', () => {
          const sortedItems = Sorter.sort([], valueProvidersByIndex, 0);
          expect(sortedItems).toEqual([]);
        });

        it('isn\'t sorted if it has 1 item', () => {
          const sortedItems = Sorter.sort(['item'], valueProvidersByIndex, 0);
          expect(sortedItems).toEqual(['item']);
        });

        it('is sorted in order of numbers. strings, null, undefined', () => {
          const sortedItems = Sorter.sort(items, valueProvidersByIndex, 0);
          expect(sortedItems).toEqual([{
            a: 1,
            b: 2,
          }, {
            a: 2,
            b: 1,
          }, {
            a: 'TestA1',
            b: 'TestB2',
          }, {
            a: 'TestB1',
            b: 'TestA2',
          }, {
            a: null,
            b: null,
          }, {
            a: undefined,
            b: undefined,
          }]);
        });
      });

      describe('propertyNameOrValueProviderOrProviders parameter', () => {
        it('can be a property name that provides sort values', () => {
          const sortedItems = Sorter.sort(items, 'b');
          expect(sortedItems).toEqual([{
            a: 2,
            b: 1,
          }, {
            a: 1,
            b: 2,
          }, {
            a: 'TestB1',
            b: 'TestA2',
          }, {
            a: 'TestA1',
            b: 'TestB2',
          }, {
            a: null,
            b: null,
          }, {
            a: undefined,
            b: undefined,
          }]);
        });

        it('can be a single function that provides sort values', () => {
          const fakeItems = ['item1', 'item2'];
          const provider = jasmine.createSpy('provider');
          Sorter.sort(fakeItems, provider);
          expect(provider).toHaveBeenCalledWith(fakeItems[0]);
        });

        it('can be an array of functions that provide sort values', () => {
          const fakeItems = ['item1', 'item2'];
          const providers = [jasmine.createSpy('provider')];
          Sorter.sort(fakeItems, providers, 0);
          expect(providers[0]).toHaveBeenCalledWith(fakeItems[0]);
        });
      });

      describe('isDescending parameter', () => {
        describe('when false (default)', () => {
          it('sorts items ascending', () => {
            const sortedItems = Sorter.sort(items, valueProvidersByIndex, 0);
            expect(sortedItems).toEqual([{
              a: 1,
              b: 2,
            }, {
              a: 2,
              b: 1,
            }, {
              a: 'TestA1',
              b: 'TestB2',
            }, {
              a: 'TestB1',
              b: 'TestA2',
            }, {
              a: null,
              b: null,
            }, {
              a: undefined,
              b: undefined,
            }]);
          });
        });

        describe('when true', () => {
          it(TestUtils.cleanString(
            `sorts items in order of undefined, null,
            strings, numbers when true`
          ), () => {
            const sortedItems =
              Sorter.sort(items, valueProvidersByIndex, 0, true);

            expect(sortedItems).toEqual([{
              a: undefined,
              b: undefined,
            }, {
              a: null,
              b: null,
            }, {
              a: 'TestB1',
              b: 'TestA2',
            }, {
              a: 'TestA1',
              b: 'TestB2',
            }, {
              a: 2,
              b: 1,
            }, {
              a: 1,
              b: 2,
            }]);
          });
        });
      });

      describe('providerPropertyOrIndex parameter', () => {
        describe('when there is a single value provider', () => {
          it('doesn\'t throw an error if undefined', () => {
            expect(
              () => Sorter.sort(items, valueProvider, undefined)
            ).not.toThrow();
          });

          it('doesn\'t throw an error if null', () => {
            expect(
              () => Sorter.sort(items, valueProvider, null)
            ).not.toThrow();
          });
        });

        describe('when there are multiple value providers', () => {
          it('throws an error if undefined', () => {
            expect(
              () => Sorter.sort(items, valueProvidersByIndex, undefined)
            ).toThrowError();
          });

          it('throws an error if null', () => {
            expect(
              () => Sorter.sort(items, valueProvidersByIndex, null)
            ).toThrowError();
          });

          it('defines a provider via an element index', () => {
            const sortedItems =
              Sorter.sort(items, valueProvidersByIndex, 1);

            expect(sortedItems).toEqual([{
              a: 2,
              b: 1,
            }, {
              a: 1,
              b: 2,
            }, {
              a: 'TestB1',
              b: 'TestA2',
            }, {
              a: 'TestA1',
              b: 'TestB2',
            }, {
              a: null,
              b: null,
            }, {
              a: undefined,
              b: undefined,
            }]);
          });

          it('defines a provider via a property name', () => {
            const valueProvidersByProperty = {
              a: item => item.a,
              b: item => item.b,
            };
            const sortedItems =
              Sorter.sort(items, valueProvidersByProperty, 'b');

            expect(sortedItems).toEqual([{
              a: 2,
              b: 1,
            }, {
              a: 1,
              b: 2,
            }, {
              a: 'TestB1',
              b: 'TestA2',
            }, {
              a: 'TestA1',
              b: 'TestB2',
            }, {
              a: null,
              b: null,
            }, {
              a: undefined,
              b: undefined,
            }]);
          });
        });
      });
    });
  });
});
