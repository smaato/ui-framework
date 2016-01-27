
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridHeader from './GridHeader.jsx';

describe('GridHeader', () => {
  // We have to wrap the thead in table markup or else React will complain.
  function wrap(header) {
    return (
      <table>
        {header}
      </table>
    );
  }

  describe('Props', () => {
    describe('headerCellPropsProviders', () => {
      it('are called and receive index as argument', () => {
        const cellPropsProvider1 = jasmine.createSpy('cellPropsProvider1');
        const cellPropsProvider2 = jasmine.createSpy('cellPropsProvider2');
        const props = {
          headerCellPropsProviders: [
            cellPropsProvider1,
            cellPropsProvider2,
          ],
        };

        expect(cellPropsProvider1).not.toHaveBeenCalled();
        expect(cellPropsProvider2).not.toHaveBeenCalled();

        TestCaseFactory.createFromElement(wrap(<GridHeader {...props} />));

        expect(cellPropsProvider1).toHaveBeenCalledWith(0);
        expect(cellPropsProvider2).toHaveBeenCalledWith(1);
      });
    });

    describe('classHeader', () => {
      it('is applied as a class of the thead element', () => {
        const props = {
          headerCellPropsProviders: [],
          classHeader: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeader {...props} />)
        );

        expect(testCase.first('thead').getAttribute('class')
          .indexOf(props.classHeader) !== -1).toBe(true);
      });
    });

    describe('classHeaderRow', () => {
      it('is applied as a class of the tr element', () => {
        const props = {
          headerCellPropsProviders: [],
          classHeaderRow: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeader {...props} />)
        );

        expect(testCase.first('tr').getAttribute('class')
          .indexOf(props.classHeaderRow) !== -1).toBe(true);
      });
    });

    describe('classHeaderCell', () => {
      it('is applied as a class of the th element', () => {
        const props = {
          headerCellPropsProviders: [() => {}],
          classHeaderCell: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridHeader {...props} />)
        );

        expect(testCase.first('th').getAttribute('class')
          .indexOf(props.classHeaderCell) !== -1).toBe(true);
      });
    });
  });
});
