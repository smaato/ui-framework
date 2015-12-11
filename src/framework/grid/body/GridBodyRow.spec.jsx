
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridBodyRow from './GridBodyRow.jsx';
import GridBodyCell from './GridBodyCell.jsx';

describe('GridBodyRow', () => {
  describe('Props', () => {
    describe('cells', () => {
      it('renders a GridBodyCell for each element', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          rowHeight: 10,
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyRow {...props} />);
        const cells = testCase.findComponents(GridBodyCell);

        expect(cells.length).toBe(3);
      });
    });

    describe('rowHeight', () => {
      it('is set as inline style height in px', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          rowHeight: 10,
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyRow {...props} />);

        expect(testCase.dom.getAttribute('style')).toBe('height:10px;');
      });
    });

    describe('classBodyRow', () => {
      it('adds a class when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          rowHeight: 10,
          classBodyRow: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyRow {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__body__row test');
      });
    });

    describe('classBodyCell', () => {
      it('is passed to cells', () => {
        const classBodyCell = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          rowHeight: 10,
          classBodyCell: classBodyCell,
        };
        const testCase = TestCaseFactory.createFromElement(<GridBodyRow {...props} />);
        const cells = testCase.findComponents(GridBodyCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.classBodyCell).toBe(classBodyCell);
        }
      });
    });
  });
});
