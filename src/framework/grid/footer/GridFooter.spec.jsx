
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooter from './GridFooter.jsx';
import GridFooterRow from './GridFooterRow.jsx';

describe('GridFooter', () => {
  describe('Props', () => {
    describe('cells', () => {
      it('is passed to row', () => {
        const cells = [
          1,
          2,
          3,
        ];
        const props = {
          cells: cells,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const row = testCase.firstComponent(GridFooterRow);

        expect(row.props.cells).toBe(cells);
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
      it('is passed to row', () => {
        const classFooterRow = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterRow: classFooterRow,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const row = testCase.firstComponent(GridFooterRow);

        expect(row.props.classFooterRow).toBe(classFooterRow);
      });
    });

    describe('classFooterCell', () => {
      it('is passed to row', () => {
        const classFooterCell = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterCell: classFooterCell,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooter {...props} />);
        const row = testCase.firstComponent(GridFooterRow);

        expect(row.props.classFooterCell).toBe(classFooterCell);
      });
    });
  });
});
