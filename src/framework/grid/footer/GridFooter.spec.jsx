
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridFooter from './GridFooter.jsx';

describe('GridFooter', () => {
  // We have to wrap the tfoot in table markup or else React will complain.
  function wrap(footer) {
    return (
      <table>
        {footer}
      </table>
    );
  }

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
          footerCellPropsProviders: [],
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooter {...props} />)
        );

        expect(testCase.dom.textContent).toContain(props.children);
      });
    });

    describe('classFooter', () => {
      it('is applied as a class of the tfoot element', () => {
        const props = {
          footerCellPropsProviders: [],
          classFooter: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooter {...props} />)
        );

        expect(
          testCase.first('tfoot').getAttribute('class')
        ).toContain(props.classFooter);
      });
    });

    describe('classFooterCell', () => {
      it('is applied as a class of the th element', () => {
        const props = {
          footerCellPropsProviders: [() => undefined],
          classFooterCell: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooter {...props} />)
        );

        expect(
          testCase.first('th').getAttribute('class')
        ).toContain(props.classFooterCell);
      });
    });

    describe('classFooterRow', () => {
      it('is applied as a class of the tr element', () => {
        const props = {
          footerCellPropsProviders: [],
          classFooterRow: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridFooter {...props} />)
        );

        expect(
          testCase.first('tr').getAttribute('class')
        ).toContain(props.classFooterRow);
      });
    });

    describe('footerCellPropsProviders', () => {
      it('are called and receive index as argument', () => {
        const cellPropsProvider1 = jasmine.createSpy('cellPropsProvider1');
        const cellPropsProvider2 = jasmine.createSpy('cellPropsProvider2');
        const props = {
          footerCellPropsProviders: [
            cellPropsProvider1,
            cellPropsProvider2,
          ],
        };

        expect(cellPropsProvider1).not.toHaveBeenCalled();
        expect(cellPropsProvider2).not.toHaveBeenCalled();

        TestCaseFactory.createFromElement(wrap(<GridFooter {...props} />));

        expect(cellPropsProvider1).toHaveBeenCalledWith(0);
        expect(cellPropsProvider2).toHaveBeenCalledWith(1);
      });
    });
  });
});
