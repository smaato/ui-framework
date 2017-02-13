
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridBody from './GridBody.jsx';

describe('GridBody', () => {
  // We have to wrap the body in table markup or else React will complain.
  function wrap(body) {
    return (
      <table>
        {body}
      </table>
    );
  }

  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <tr><td /></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        const rows = testCase.find('tr');
        expect(rows.length).toBe(1);
      });
    });

    describe('initialLoadingRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          initialLoadingRow: <tr className="initialLoadingRow"><td /></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('.initialLoadingRow')).toBeDefined();
      });
    });

    describe('emptyRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          emptyRow: <tr className="emptyRow"><td /></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('.emptyRow')).toBeDefined();
      });
    });

    describe('loadingRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          loadingRow: <tr className="loadingRow"><td /></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('.loadingRow')).toBeDefined();
      });
    });

    describe('classBody', () => {
      it('is applied as a class of the tbody element', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          classBody: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('tbody').className).toContain(props.classBody);
      });
    });
  });
});
