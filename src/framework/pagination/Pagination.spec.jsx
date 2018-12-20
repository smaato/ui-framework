
import { TestCaseFactory } from 'react-test-kit';
import Pagination from './Pagination.jsx';

describe('Pagination', () => {
  const render = (props, textContent = null) => {
    const testCase = TestCaseFactory.create(Pagination, props);
    const element = textContent === null ? null : testCase.find('li').find(
      e => e.textContent === textContent
    );

    return {
      props,
      element,
      testCase,
    };
  };

  describe('Props', () => {
    describe('currentPage, totalPages and visiblePages', () => {
      it('are rendered accordingly', () => {
        const { testCase } = render({
          currentPage: 3,
          totalPages: 123,
          visiblePages: 3,
        });

        expect(testCase.dom.textContent).toBe('<Prev345Next>');
      });
    });
  });

  describe('First selected page', () => {
    it('is rendered properly', () => {
      const { testCase } = render({
        currentPage: 0,
        totalPages: 123,
        visiblePages: 3,
      });

      expect(testCase.dom.textContent).toBe('<Prev123Next>');
    });
  });

  describe('Last selected page', () => {
    it('is rendered properly', () => {
      const { testCase } = render({
        currentPage: 122,
        totalPages: 123,
        visiblePages: 3,
      });

      expect(testCase.dom.textContent).toBe('<Prev121122123Next>');
    });
  });

  describe('Small amount of pages', () => {
    it('should be rendered properly', () => {
      const { testCase } = render({
        currentPage: 2,
        totalPages: 3,
        visiblePages: 5,
      });

      expect(testCase.dom.textContent).toBe('<Prev123Next>');
    });
  });

  describe('First page', () => {
    it('should be disabled when this is already a first page', () => {
      const { testCase, element } = render({
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      }, '<');

      testCase.trigger('click', element);

      expect(element.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const { props, testCase, element } = render({
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '<');

      testCase.trigger('click', element);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const { props, testCase, element } = render({
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '<');

      testCase.trigger('click', element);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Previous page', () => {
    it('should be disabled when there is no previous page to select', () => {
      const { element } = render({
        currentPage: 0,
        totalPages: 15,
        visiblePages: 3,
      }, 'Prev');

      expect(element.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const { props, testCase, element } = render({
        currentPage: 0,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'Prev');

      testCase.trigger('click', element);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const { props, testCase, element } = render({
        currentPage: 5,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'Prev');

      testCase.trigger('click', element);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Regular pagination page', () => {
    it('should be decorated with proper class names', () => {
      const { element } = render({
        currentPage: 2,
        totalPages: 15,
        visiblePages: 3,
      }, '2');

      expect(element.className).toBe('pagination__page pagination__enabled');
    });

    it('should be clickable', () => {
      const { props, testCase, element } = render({
        currentPage: 2,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '2');

      testCase.trigger('click', element);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Current selected page', () => {
    it('should be decorated with proper class names', () => {
      const { element } = render({
        currentPage: 2,
        totalPages: 15,
        visiblePages: 3,
      }, '3');

      expect(element.className).toBe('pagination__page pagination__disabled');
    });

    it('should not be clickable', () => {
      const { props, testCase, element } = render({
        currentPage: 2,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '3');

      testCase.trigger('click', element);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });
  });

  describe('Next page', () => {
    it('should be disabled when there is no next page to select', () => {
      const { element } = render({
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      }, 'Next');

      expect(element.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const { props, testCase, element } = render({
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'Next');

      testCase.trigger('click', element);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const { props, testCase, element } = render({
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, 'Next');

      testCase.trigger('click', element);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });

  describe('Last page', () => {
    it('should be disabled when this is already a last page', () => {
      const { element } = render({
        currentPage: 14,
        totalPages: 15,
        visiblePages: 3,
      }, '>');

      expect(element.className).toBe('pagination__disabled');
    });

    it('should not be clickable when disabled', () => {
      const { props, testCase, element } = render({
        currentPage: 14,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '>');

      testCase.trigger('click', element);

      expect(props.onChangePage).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
      const { props, testCase, element } = render({
        currentPage: 10,
        onChangePage: jasmine.createSpy('onChangePage'),
        totalPages: 15,
        visiblePages: 3,
      }, '>');

      testCase.trigger('click', element);

      expect(props.onChangePage).toHaveBeenCalled();
    });
  });
});
