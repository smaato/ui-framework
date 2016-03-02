
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridLoadingRow from './GridLoadingRow.jsx';

describe('GridLoadingRow', () => {
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
      it('is applied to colspan of first fake row', () => {
        const props = {
          columnsCount: 2,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridLoadingRow {...props} />)
        );

        expect(testCase.first('tr:first-child > td').getAttribute('colspan'))
          .toBe(props.columnsCount.toString());
      });
    });

    describe('isInitial', () => {
      it('adds initial modifier class to inner div', () => {
        const props = {
          columnsCount: 2,
          isInitial: true,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridLoadingRow {...props} />)
        );

        expect(testCase.first('tr:first-child > td > div')
          .getAttribute('class'))
          .toContain('gridLoadingRow--initial');
      });
    });
  });
});
