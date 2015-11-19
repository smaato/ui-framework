
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooterRow from './GridFooterRow.jsx';

describe('GridFooterRow', () => {
  describe('Props', () => {
    describe('cells', () => {
      it('renders each element as a cell', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);

        expect(testCase.dom.childNodes.length).toBe(3);
      });
    });

    describe('classFooterRow', () => {
      it('adds a class when set', () => {
        const props = {
          classFooterRow: 'test',
          cells: [
            1,
            2,
            3,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__footer__row test');
      });
    });

    describe('classFooterCell', () => {
      it('adds a class to each cell when set', () => {
        const props = {
          classFooterCell: 'test',
          cells: [
            1,
            2,
            3,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);
        const cellsWithClass = testCase.find('.test');

        expect(cellsWithClass.length).toBe(3);
      });
    });
  });
});
