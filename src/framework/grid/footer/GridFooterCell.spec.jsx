
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooterCell from './GridFooterCell.jsx';

describe('GridFooterCell', () => {
  // We have to wrap the th in table markup or else React will complain.
  function wrap(cell) {
    return (
      <table>
        <tfoot>
          <tr>{cell}</tr>
        </tfoot>
      </table>
    );
  }

  describe('Props', () => {
    describe('classFooterCell', () => {
      it('is applied as a class of the th element', () => {
        const props = {
          classFooterCell: 'testClass',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooterCell {...props} />)
        );

        expect(
          testCase.first('th').getAttribute('class')
        ).toContain(props.classFooterCell);
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
          wrap(<GridFooterCell {...props} />)
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
          wrap(<GridFooterCell {...props} />)
        );

        expect(
          testCase.first('th > div').getAttribute('class')
        ).toContain(props.innerCellProps.className);
      });
    });

    describe('isFirstCellWithChildren', () => {
      it('applies the appropriate class', () => {
        const props = {
          isFirstCellWithChildren: true,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooterCell {...props} />)
        );

        expect(
          testCase.first('th').getAttribute('class')
        ).toContain('grid__footer__cell--firstDivider');
      });
    });
  });
});
