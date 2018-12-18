
import { TestCaseFactory } from 'react-test-kit';
import Pagination from './Pagination.jsx';

describe('Pagination', () => {
  function expectDomTextContentForProps(props) {
    const testCase = TestCaseFactory.create(Pagination, props);
    return expect(testCase.dom.textContent);
  }

  describe('Props', () => {
    describe('currentPage, totalPages and visiblePages', () => {
      it('are rendered accordingly', () => {
        expectDomTextContentForProps({
          currentPage: 3,
          totalPages: 123,
          visiblePages: 3,
        }).toBe('<Prev345Next>');
      });
    });
  });

  describe('First selected page', () => {
    it('is rendered properly', () => {
      expectDomTextContentForProps({
        currentPage: 0,
        totalPages: 123,
        visiblePages: 3,
      }).toBe('<Prev123Next>');
    });
  });

  describe('Last selected page', () => {
    it('is rendered properly', () => {
      expectDomTextContentForProps({
        currentPage: 122,
        totalPages: 123,
        visiblePages: 3,
      }).toBe('<Prev121122123Next>');
    });
  });

  describe('Small amount of pages', () => {
    it('should be rendered properly', () => {
      expectDomTextContentForProps({
        currentPage: 2,
        totalPages: 3,
        visiblePages: 5,
      }).toBe('<Prev123Next>');
    });
  });

  function elementWithTextContentForProps(props, selector, textContent) {
    const testCase = TestCaseFactory.create(Pagination, props);
    const els = testCase.find(selector);

    const el = els.find(
      element => element.textContent === textContent
    );

    return el;
  }

  function clickOnElementWithTextContentAndExpectOnChangePage(props, selector, textContent) {
    const testCase = TestCaseFactory.create(Pagination, props);
    const els = testCase.find(selector);

    const el = els.find(
      element => element.textContent === textContent
    );

    testCase.trigger('click', el);

    return expect(props.onChangePage)
  }

  describe('First page', () => {
    it('should be disabled when this is already a first page', () => {
      const el = elementWithTextContentForProps({
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '<');

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '<').not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '<').toHaveBeenCalled();
    });
  });

  describe('Previous page', () => {
    it('should be disabled when there is no previous page to select', () => {
      const el = elementWithTextContentForProps({
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Prev');

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Prev').not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Prev').toHaveBeenCalled();
    });
  });

  describe('Current selected page', () => {
    it('should be decorated with proper class names', () => {
      const el = elementWithTextContentForProps({
        currentPage: 2,
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '3');

      expect(el.className).toBe('pagination__page pagination__disabled');
    });

    it('should not be clickable', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 2,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '3').not.toHaveBeenCalled();
    });
  });

  describe('Next page', () => {
    it('should be disabled when there is no next page to select', () => {
      const el = elementWithTextContentForProps({
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Next');

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Next').not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', 'Next').toHaveBeenCalled();
    });
  });

  describe('Last page', () => {
    it('should be disabled when this is already a last page', () => {
      const el = elementWithTextContentForProps({
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '>');

      expect(el.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '>').not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      clickOnElementWithTextContentAndExpectOnChangePage({
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'li', '>').toHaveBeenCalled();
    });
  });
});
