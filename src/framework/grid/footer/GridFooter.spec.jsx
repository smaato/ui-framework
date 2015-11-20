
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooter from './GridFooter.jsx';

describe('GridFooter', () => {
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
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const gridfooterRow = testCase.dom.childNodes[0];

        expect(gridfooterRow.childNodes.length).toBe(3);
      });
    });

    describe('classFooter', () => {
      it('adds a class when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooter: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__footer test');
      });
    });

    describe('classFooterRow', () => {
      it('adds a class to the footer row when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterRow: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const rowsWithClass = testCase.find('.test');

        expect(rowsWithClass.length).toBe(1);
      });
    });

    describe('classFooterCell', () => {
      it('adds a class to each cell when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterCell: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const cellsWithClass = testCase.find('.test');

        expect(cellsWithClass.length).toBe(3);
      });
    });
  });
});
