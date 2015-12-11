
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridBodyEditableCell from './GridBodyEditableCell.jsx';

describe('GridBodyEditableCell', () => {
  describe('Props', () => {
    describe('content', () => {
      it('is rendered as textContent when it\'s a string', () => {
        const props = {
          content: 'Test',
          onClick: () => {},
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyEditableCell {...props} />);

        expect(testCase.dom.textContent).toBe('Test');
      });

      it('is rendered textContent when it\'s a number', () => {
        const props = {
          content: 1,
          onClick: () => {},
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyEditableCell {...props} />);

        expect(testCase.dom.textContent).toBe('1');
      });

      it('is rendered as a child when it\'s an element', () => {
        const props = {
          content: <span />,
          onClick: () => {},
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyEditableCell {...props} />);
        const contentElement = testCase.first('span');

        expect(contentElement.tagName).toBe('SPAN');
      });
    });

    describe('onClick', () => {
      it('is executed on click', () => {
        const props = {
          content: 'Test',
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyEditableCell {...props} />);

        expect(props.onClick).not.toHaveBeenCalled();
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalled();
      });
    });
  });
});
