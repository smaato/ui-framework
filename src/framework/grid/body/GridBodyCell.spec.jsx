
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridBodyCell from './GridBodyCell.jsx';

describe('GridBodyCell', () => {
  describe('Props', () => {
    describe('classBodyCell', () => {
      it('adds a class when set', () => {
        const props = {
          classBodyCell: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyCell {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__body__cell test');
      });
    });

    describe('content', () => {
      it('is rendered as textContent when it\'s a string', () => {
        const props = {
          content: 'Test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyCell {...props} />);

        expect(testCase.dom.textContent).toBe('Test');
      });

      it('is rendered textContent when it\'s a number', () => {
        const props = {
          content: 1,
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyCell {...props} />);

        expect(testCase.dom.textContent).toBe('1');
      });

      it('is rendered as a child when it\'s an element', () => {
        const props = {
          content: <span />,
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyCell {...props} />);
        const contentElement = testCase.first('span');

        expect(contentElement.tagName).toBe('SPAN');
      });
    });
  });
});
