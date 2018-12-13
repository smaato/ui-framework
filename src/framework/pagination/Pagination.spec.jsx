
import { TestCaseFactory } from 'react-test-kit';
import Pagination from './Pagination.jsx';

describe('Pagination', () => {
  describe('Props', () => {
    describe('page, pages and maxVisiblePages', () => {
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

  describe('Edge case props', () => {
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

    describe('Active page', () => {
      it('should be decorated with proper class names', () => {
        const props = {
          currentPage: 2,
          totalPages: 15,
          visiblePages: 3,
        };

        const testCase = TestCaseFactory.create(Pagination, props);
        const element = testCase.first('.pagination__page.pagination__enabled');

        expect(element.textContent).toBe('2');
      });
    });
  });
});
