
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridHeaderCell from './GridHeaderCell.jsx';

describe('GridHeaderCell', () => {
  describe('Props', () => {
    describe('classHeaderCell', () => {
      it('adds a class when set', () => {
        const props = {
          classHeaderCell: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__header__cell test');
      });
    });
  });

  describe('content', () => {
    it('is rendered as textContent when it\'s a string', () => {
      const props = {
        content: 'Test',
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

      expect(testCase.dom.textContent).toBe('Test');
    });

    it('is rendered textContent when it\'s a number', () => {
      const props = {
        content: 1,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

      expect(testCase.dom.textContent).toBe('1');
    });

    it('is rendered as a child when it\'s an element', () => {
      const props = {
        content: <span />,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);
      const contentElement = testCase.first('span');

      expect(contentElement.tagName).toBe('SPAN');
    });
  });

  describe('sortEnabled', () => {
    it('adds the class "sortable" when set to true', () => {
      const props = {
        sortEnabled: true,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

      expect(testCase.dom.getAttribute('class')).toContain('sortable');
    });

    it('wraps the content in a link when set to true', () => {
      const props = {
        sortEnabled: true,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);
      const contentLink = testCase.first('a');

      expect(contentLink.tagName).toBe('A');
    });
  });

  describe('isSortDescending', () => {
    it('adds the class "reverse" when set to false', () => {
      const props = {
        sortEnabled: true,
        isSortDescending: false,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

      expect(testCase.dom.getAttribute('class')).toContain('reverse');
    });
  });

  describe('sortedColumnIndex', () => {
    it('adds the class "selected" when set equal to cellIndex', () => {
      const props = {
        sortEnabled: true,
        cellIndex: 1,
        sortedColumnIndex: 1,
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);

      expect(testCase.dom.getAttribute('class')).toContain('selected');
    });
  });

  describe('onSort', () => {
    it('is called with cellIndex on link click when set', () => {
      const props = {
        cellIndex: 1,
        sortEnabled: true,
        onSort: jasmine.createSpy('onSort'),
      };
      const testCase = TestCaseFactory.createFromElement(<GridHeaderCell {...props} />);
      const contentLink = testCase.first('a');

      expect(props.onSort).not.toHaveBeenCalled();
      testCase.trigger('click', contentLink);
      expect(props.onSort).toHaveBeenCalledWith(1);
    });
  });
});
