import FilterableItems from './FilterableItems';

describe('FilterableItems', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it('accepts items and surfaces them', () => {
        const items = [];
        const filteredItems = new FilterableItems(items);
        expect(filteredItems.items).toBe(items);
      });
    });

    describe('applyFilters method', () => {
      it('accepts filters and invokes each one\'s doesItemPass method', () => {
        const items = [{}];
        const filters = [{
          doesItemPass: jasmine.createSpy('doesItemPass'),
        }];
        const filteredItems = new FilterableItems(items);
        filteredItems.applyFilters(filters);
        expect(filters[0].doesItemPass).toHaveBeenCalledWith(items[0]);
      });

      it('returns the items that pass the doesItemPass method', () => {
        const items = ['a', 'b'];
        const filters = [{
          doesItemPass: item => item === 'b',
        }];
        const filteredItems = new FilterableItems(items);
        const result = filteredItems.applyFilters(filters);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('b');
      });
    });
  });
});
