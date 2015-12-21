
import {
  polyfillCustomEvent,
  ThrottledEventDispatcher,
  ComparisonTypes,
  ConditionChecker,
  FilterOption,
  FilterableItems,
  GridRowRecycler,
  GridStencil,
  Sorter,
  Entity,
} from './services';

describe('UI Framework services', () => {
  describe('polyfillCustomEvent', () => {
    it('is exported', () => {
      expect(polyfillCustomEvent).toEqual(jasmine.any(Function));
    });
  });

  describe('ThrottledEventDispatcher', () => {
    it('is exported', () => {
      expect(ThrottledEventDispatcher).toEqual(jasmine.any(Function));
    });
  });

  describe('ComparisonTypes', () => {
    it('is exported', () => {
      expect(ComparisonTypes).toEqual(jasmine.any(Object));
    });
  });

  describe('ConditionChecker', () => {
    it('is exported', () => {
      expect(ConditionChecker).toEqual(jasmine.any(Function));
    });
  });

  describe('FilterOption', () => {
    it('is exported', () => {
      expect(FilterOption).toEqual(jasmine.any(Function));
    });
  });

  describe('FilterableItems', () => {
    it('is exported', () => {
      expect(FilterableItems).toEqual(jasmine.any(Function));
    });
  });

  describe('GridRowRecycler', () => {
    it('is exported', () => {
      expect(GridRowRecycler).toEqual(jasmine.any(Function));
    });
  });

  describe('GridStencil', () => {
    it('is exported', () => {
      expect(GridStencil).toEqual(jasmine.any(Function));
    });
  });

  describe('Sorter', () => {
    it('is exported', () => {
      expect(Sorter).toEqual(jasmine.any(Object));
    });
  });

  describe('Entity', () => {
    it('is exported', () => {
      expect(Entity).toEqual(jasmine.any(Object));
    });
  });
});
