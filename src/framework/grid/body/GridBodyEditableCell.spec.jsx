
import { TestCaseFactory } from 'react-test-kit';
import GridBodyEditableCell from './GridBodyEditableCell.jsx';

describe('GridBodyEditableCell', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'Test',
          onClick: () => {},
        };

        const testCase = TestCaseFactory.createFromFunction(
          GridBodyEditableCell,
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
          GridBodyEditableCell,
          props
        );

        expect(props.onClick).not.toHaveBeenCalled();
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalled();
      });
    });
  });
});
