
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooterCell from './GridFooterCell.jsx';

describe('GridFooterCell', () => {
  describe('DOM structure', () => {
    it('consists of two div elements with classes', () => {
      const testCase = TestCaseFactory.createFromElement(<GridFooterCell />);
      expect(testCase.dom.tagName).toBe('DIV');
      expect(testCase.dom.getAttribute('class')).toBe('grid__footer__cell');
      expect(testCase.dom.textContent).toBe('');

      const innerDiv = testCase.first('div');
      expect(innerDiv.tagName).toBe('DIV');
      expect(innerDiv.getAttribute('class')).toBe('grid__footer__cellLiner');
    });
  });
  describe('Props', () => {
    describe('classFooterCell', () => {
      it('adds a class when set', () => {
        const props = {
          classFooterCell: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterCell {...props} />);
        expect(testCase.dom.getAttribute('class')).toContain('test');
      });
    });

    describe('content', () => {
      it('is rendered when set to string', () => {
        const props = {
          content: 'Test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterCell {...props} />);

        expect(testCase.dom.textContent).toBe('Test');
      });

      it('is rendered when set to number', () => {
        const props = {
          content: 1,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterCell {...props} />);

        expect(testCase.dom.textContent).toBe('1');
      });

      it('is rendered when set to element', () => {
        const props = {
          content: <span />,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterCell {...props} />);
        const contentElement = testCase.first('span');

        expect(contentElement.tagName).toBe('SPAN');
      });
    });
  });
});
