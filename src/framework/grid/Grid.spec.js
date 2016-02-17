
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Grid from './Grid.jsx';

describe('Grid', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Grid, {
      columnsCount: 1,
    });

    describe('header', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          header: <thead id="header"></thead>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#header').length).toBe(1);
      });
    });

    describe('footer', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          footer: <tfoot id="header"></tfoot>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#header').length).toBe(1);
      });
    });

    describe('rows', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          rows: <tr id="row" key="0"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#row').length).toBe(1);
      });
    });

    describe('initialLoadingRow', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          initialLoadingRow: <tr id="initialLoadingRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#initialLoadingRow').length).toBe(1);
      });
    });

    describe('emptyRow', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          emptyRow: <tr id="emptyRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#emptyRow').length).toBe(1);
      });
    });

    describe('loadingRow', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          loadingRow: <tr id="loadingRow"><td></td></tr>,
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.find('#loadingRow').length).toBe(1);
      });
    });

    describe('classContainer', () => {
      it('is applied as a class of the root element', () => {
        const props = {
          columnsCount: 1,
          classContainer: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.dom.getAttribute('class')
          .indexOf(props.classContainer) !== -1).toBe(true);
      });
    });

    describe('classTable', () => {
      it('is applied as a class of the table element', () => {
        const props = {
          columnsCount: 1,
          classTable: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.first('table').getAttribute('class')
          .indexOf(props.classTable) !== -1).toBe(true);
      });
    });

    describe('classBody', () => {
      it('is applied as a class of the tbody element', () => {
        const props = {
          columnsCount: 1,
          classBody: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(<Grid {...props} />);
        expect(testCase.first('tbody').getAttribute('class')
          .indexOf(props.classBody) !== -1).toBe(true);
      });
    });
  });
});
