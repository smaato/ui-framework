
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridBodyCell from './GridBodyCell.jsx';

describe('GridBodyCell', () => {
  // We have to wrap the td in table markup or else React will complain.
  function wrap(cell) {
    return (
      <table>
        <tbody>
          <tr>{cell}</tr>
        </tbody>
      </table>
    );
  }

  describe('Props', () => {
    describe('classBodyCell', () => {
      it('is applied as a class of the td element', () => {
        const props = {
          classBodyCell: 'testClass',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBodyCell {...props} />)
        );

        expect(testCase.first('td').getAttribute('class')
          .indexOf(props.classBodyCell) !== -1).toBe(true);
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
          wrap(<GridBodyCell {...props} />)
        );

        expect(testCase.first('td > div').textContent).toBe(
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
          wrap(<GridBodyCell {...props} />)
        );

        expect(testCase.first('td > div').getAttribute('class')
          .indexOf(props.innerCellProps.className) !== -1).toBe(true);
      });
    });
  });
});
