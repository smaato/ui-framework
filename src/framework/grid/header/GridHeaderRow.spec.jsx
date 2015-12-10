
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridHeaderRow from './GridHeaderRow.jsx';
import GridHeaderCell from './GridHeaderCell.jsx';

describe('GridHeaderRow', () => {
  describe('Props', () => {
    describe('cells', () => {
      it('renders a GridHeaderCell for each element', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        expect(cells.length).toBe(3);
      });
    });

    describe('classHeaderRow', () => {
      it('adds a class when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classHeaderRow: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__header__row test');
      });
    });

    describe('classHeaderCell', () => {
      it('is passed to cells', () => {
        const classHeaderCell = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classHeaderCell: classHeaderCell,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.classHeaderCell).toBe(classHeaderCell);
        }
      });
    });

    describe('sortColumnIndexes', () => {
      it('sets sortEnabled of cells to true when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          sortColumnIndexes: [
            0,
            2,
          ],
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        expect(cells[0].props.sortEnabled).toBe(true);
        expect(cells[1].props.sortEnabled).toBe(false);
        expect(cells[2].props.sortEnabled).toBe(true);
      });
    });

    describe('isSortDescending', () => {
      it('is passed to cells', () => {
        const isSortDescending = false;
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          isSortDescending: isSortDescending,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.isSortDescending).toBe(isSortDescending);
        }
      });
    });

    describe('sortedColumnIndex', () => {
      it('is passed to cells', () => {
        const sortedColumnIndex = 1;
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          sortedColumnIndex: sortedColumnIndex,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.sortedColumnIndex).toBe(sortedColumnIndex);
        }
      });
    });

    describe('onSort', () => {
      it('is passed to cells', () => {
        const onSort = () => {};
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          onSort: onSort,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeaderRow {...props} />);
        const cells = testCase.findComponents(GridHeaderCell);

        for (let i = 0, l = cells.length; i < l; i++) {
          expect(cells[i].props.onSort).toBe(onSort);
        }
      });
    });
  });
});
