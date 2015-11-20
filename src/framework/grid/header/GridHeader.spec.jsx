
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridHeader from './GridHeader.jsx';
import GridHeaderRow from './GridHeaderRow.jsx';

describe('GridHeader', () => {
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
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.cells).toBe(cells);
      });
    });

    describe('classHeader', () => {
      it('adds a class when set', () => {
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classHeader: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);

        expect(testCase.dom.getAttribute('class')).toBe('grid__header test');
      });
    });

    describe('classHeaderRow', () => {
      it('is passed to row', () => {
        const classHeaderRow = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classHeaderRow: classHeaderRow,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.classHeaderRow).toBe(classHeaderRow);
      });
    });

    describe('classHeaderCell', () => {
      it('is passed to row', () => {
        const classHeaderCell = 'test';
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          classHeaderCell: classHeaderCell,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.classHeaderCell).toBe(classHeaderCell);
      });
    });

    describe('sortColumnIndexes', () => {
      it('is passed to row', () => {
        const sortColumnIndexes = [
          0,
          2,
        ];
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          sortColumnIndexes: sortColumnIndexes,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.sortColumnIndexes).toBe(sortColumnIndexes);
      });
    });

    describe('isSortDescending', () => {
      it('is passed to row', () => {
        const isSortDescending = false;
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          isSortDescending: isSortDescending,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.isSortDescending).toBe(isSortDescending);
      });
    });

    describe('sortedColumnIndex', () => {
      it('is passed to row', () => {
        const sortedColumnIndex = 1;
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          sortedColumnIndex: sortedColumnIndex,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.sortedColumnIndex).toBe(sortedColumnIndex);
      });
    });

    describe('onSort', () => {
      it('is passed to row', () => {
        const onSort = () => {};
        const props = {
          cells: [
            1,
            2,
            3,
          ],
          onSort: onSort,
        };
        const testCase = TestCaseFactory.createFromElement(<GridHeader {...props} />);
        const row = testCase.firstComponent(GridHeaderRow);

        expect(row.props.onSort).toBe(onSort);
      });
    });
  });
});
