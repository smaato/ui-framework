
import { TestCaseFactory } from 'react-test-kit';
import Pagination from './Pagination.jsx';

describe('Pagination', () => {
  describe('Props', () => {
    describe('currentPage, totalPages and visiblePages', () => {
      it('are rendered accordingly', () => {
        const props = {
          currentPage: 3,
          totalPages: 123,
          visiblePages: 3,
        };

        const testCase = TestCaseFactory.create(Pagination, props);
        expect(testCase.dom.textContent).toBe('<Prev345Next>');
      });
    });
  });

  describe('First selected page', () => {
    it('is rendered properly', () => {
      const props = {
        currentPage: 0,
        totalPages: 123,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      expect(testCase.dom.textContent).toBe('<Prev123Next>');
    });
  });

  describe('Last selected page', () => {
    it('is rendered properly', () => {
      const props = {
        currentPage: 122,
        totalPages: 123,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      expect(testCase.dom.textContent).toBe('<Prev121122123Next>');
    });
  });

  describe('Small amount of pages', () => {
    it('should be rendered properly', () => {
      const props = {
        currentPage: 2,
        totalPages: 3,
        visiblePages: 5,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      expect(testCase.dom.textContent).toBe('<Prev123Next>');
    });
  });

  describe('First page', () => {
    it('should be disabled when this is already a first page', () => {
      const props = {
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '<'
      );

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const props = {
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '<'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const props = {
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '<'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Previous page', () => {
    it('should be disabled when there is no previous page to select', () => {
      const props = {
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Prev'
      );

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const props = {
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Prev'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const props = {
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Prev'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Current selected page', () => {
    it('should be decorated with proper class names', () => {
      const props = {
        currentPage: 2,
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '3'
      );

      expect(el.className).toBe('pagination__page pagination__disabled');
    });

    it('should not be clickable', () => {
      const props = {
        currentPage: 2,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '3'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });
  });

  describe('Next page', () => {
    it('should be disabled when there is no next page to select', () => {
      const props = {
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Next'
      );

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const props = {
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Next'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const props = {
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === 'Next'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Last page', () => {
    it('should be disabled when this is already a last page', () => {
      const props = {
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '>'
      );

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const props = {
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '>'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const props = {
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      };

      const testCase = TestCaseFactory.create(Pagination, props);
      const els = testCase.find('li');

      const el = els.find(
        element => element.textContent === '>'
      );

      testCase.trigger('click', el);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });
});
