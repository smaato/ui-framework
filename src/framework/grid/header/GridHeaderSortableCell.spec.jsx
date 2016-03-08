
import { TestCaseFactory } from 'react-test-kit';
import GridHeaderSortableCell from './GridHeaderSortableCell.jsx';

describe('GridHeaderSortableCell', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'Test',
          onClick: () => undefined,
        };

        const testCase = TestCaseFactory.createFromFunction(
          GridHeaderSortableCell,
          props
        );

        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('onClick', () => {
      it('is executed on click', () => {
        const props = {
          onClick: jasmine.createSpy('onClick'),
        };

        const testCase = TestCaseFactory.createFromFunction(
          GridHeaderSortableCell,
          props
        );

        expect(props.onClick).not.toHaveBeenCalled();
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalled();
      });
    });

    describe('isSelected', () => {
      it('applies the appropriate state class', () => {
        const props = {
          onClick: () => undefined,
          isSelected: true,
        };

        const testCase = TestCaseFactory.createFromFunction(
          GridHeaderSortableCell,
          props
        );

        expect(testCase.dom.getAttribute('class')
          .indexOf('is-grid-header-sortable-cell-selected') !== -1).toBe(true);
      });
    });

    describe('isSortDescending', () => {
      it('applies the appropriate state class', () => {
        const props = {
          onClick: () => undefined,
          isSortDescending: true,
        };

        const testCase = TestCaseFactory.createFromFunction(
          GridHeaderSortableCell,
          props
        );

        expect(testCase.dom.getAttribute('class')
          .indexOf('is-grid-header-sort-descending') !== -1).toBe(true);
      });
    });
  });
});
