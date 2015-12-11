
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooterRow from './GridFooterRow.jsx';
import GridFooterCell from './GridFooterCell.jsx';

describe('GridFooterRow', () => {
  describe('Props', () => {
    describe('cells', () => {
      it('renders a GridFooterCell for each element', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);
        const cells = testCase.findComponents(GridFooterCell);

        expect(cells.length).toBe(3);
      });
    });

    describe('classFooterRow', () => {
      it('adds a class when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterRow: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__footer__row test');
      });
    });

    describe('classFooterCell', () => {
      it('is passed to cells', () => {
        const classFooterCell = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classFooterCell: classFooterCell,
        };
        const testCase = TestCaseFactory.createFromElement(<GridFooterRow {...props} />);
        const cells = testCase.findComponents(GridFooterCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.classFooterCell).toBe(classFooterCell);
        }
      });
    });
  });
});
