
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFakeRow from './GridFakeRow.jsx';

describe('GridFakeRow', () => {
  // We have to wrap the tr in table markup or else React will complain.
  function wrap(row) {
    return (
      <table>
        <tbody>
          {row}
        </tbody>
      </table>
    );
  }

  describe('Props', () => {
    describe('columnsCount', () => {
      it('is added as colSpan', () => {
        const props = {
          columnsCount: 4,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFakeRow {...props} />)
        );

        expect(testCase.first('td').getAttribute('colSpan'))
          .toBe(props.columnsCount.toString());
      });
    });

    describe('style', () => {
      it('is added as style to inner div', () => {
        const props = {
          columnsCount: 0,
          style: {
            backgroundColor: 'red',
          },
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFakeRow {...props} />)
        );

        expect(testCase.first('div').getAttribute('style'))
          .toBe('background-color: red;');
      });
    });
  });
});
