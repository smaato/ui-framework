
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridHeaderCell from './GridHeaderCell.jsx';

describe('GridHeaderCell', () => {
  // We have to wrap the th in table markup or else React will complain.
  function wrap(cell) {
    return (
      <table>
        <thead>
          <tr>{cell}</tr>
        </thead>
      </table>
    );
  }

  describe('Props', () => {
    describe('classHeaderCell', () => {
      it('is applied as a class of the th element', () => {
        const props = {
          classHeaderCell: 'testClass',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeaderCell {...props} />)
        );

        expect(testCase.first('th').getAttribute('class')
          .indexOf(props.classHeaderCell) !== -1).toBe(true);
      });
    });

    describe('innerCellProps', () => {
      it('renders children to the inner div', () => {
        const props = {
          innerCellProps: {
            children: 'Test',
          },
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeaderCell {...props} />)
        );

        expect(testCase.first('th > div').textContent).toBe(
          props.innerCellProps.children
        );
      });

      it('applies className property as class of the inner div', () => {
        const props = {
          innerCellProps: {
            className: 'testClass',
          },
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeaderCell {...props} />)
        );

        expect(testCase.first('th > div').getAttribute('class')
          .indexOf(props.innerCellProps.className) !== -1).toBe(true);
      });
    });
  });
});
