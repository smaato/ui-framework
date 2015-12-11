
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
    describe('columnsCount', () => {
      it('is applied to colspan of first fake row', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('tr:first-child > td').getAttribute('colspan'))
          .toBe(props.columnsCount.toString());

        expect(testCase.first('tr:last-child > td').getAttribute('colspan'))
          .toBe(props.columnsCount.toString());
      });

      it('is applied to colspan of last fake row', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('tr:last-child > td').getAttribute('colspan'))
          .toBe(props.columnsCount.toString());
      });
    });

    describe('firstRecycledRowOffset', () => {
      it('is applied to min-height of first fake row\'s inner div', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('tr:first-child > td > div').getAttribute('style'))
          .toEqual(`min-height:${props.firstRecycledRowOffset}px;`);
      });
    });

    describe('lastRecycledRowOffset', () => {
      it('is applied to min-height of last fake row\'s inner div', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.first('tr:last-child > td > div').getAttribute('style'))
          .toEqual(`min-height:${props.lastRecycledRowOffset}px;`);
      });
    });

    describe('children', () => {
      it('are rendered between the fake rows', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          children: <tr id="middleRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        const rows = testCase.find('tr');
        expect(rows.length).toBe(3);
        expect(rows[1].getAttribute('id')).toBe('middleRow');
      });
    });

    describe('initialLoadingRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          initialLoadingRow: <tr id="initialLoadingRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.find('#initialLoadingRow').length).toBe(1);
      });
    });

    describe('emptyRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          emptyRow: <tr id="emptyRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.find('#emptyRow').length).toBe(1);
      });
    });

    describe('loadingRow', () => {
      it('is rendered', () => {
        const props = {
          columnsCount: 2,
          firstRecycledRowOffset: 1,
          lastRecycledRowOffset: 2,
          loadingRow: <tr id="loadingRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridBody {...props} />)
        );

        expect(testCase.find('#loadingRow').length).toBe(1);
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

        expect(testCase.first('tbody').getAttribute('class')
          .indexOf(props.classBody) !== -1).toBe(true);
      });
    });
  });
});
