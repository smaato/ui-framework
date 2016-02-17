
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridRow from './GridRow.jsx';

describe('GridRow', () => {
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
    describe('dataId', () => {
      it('is added to root element', () => {
        const props = {
          dataId: 'dataId',
          item: {},
          rowCellPropsProviders: [
            () => {},
          ],
          height: 10,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridRow {...props} />)
        );

        expect(testCase.first('tr').getAttribute('data-id')).toBe(props.dataId);
      });
    });

    describe('rowCellsPropsProviders', () => {
      it('are called and receive item as argument', () => {
        const cellPropsProvider1 = jasmine.createSpy('cellPropsProvider1');
        const cellPropsProvider2 = jasmine.createSpy('cellPropsProvider2');
        const props = {
          item: {},
          rowCellPropsProviders: [
            cellPropsProvider1,
            cellPropsProvider2,
          ],
          height: 10,
        };

        expect(cellPropsProvider1).not.toHaveBeenCalled();
        expect(cellPropsProvider2).not.toHaveBeenCalled();

        TestCaseFactory.createFromElement(wrap(<GridRow {...props} />));

        expect(cellPropsProvider1).toHaveBeenCalledWith(props.item);
        expect(cellPropsProvider2).toHaveBeenCalledWith(props.item);
      });
    });

    describe('height', () => {
      it('is set as inline style height in px', () => {
        const props = {
          item: {},
          rowCellPropsProviders: [
            () => {},
          ],
          height: 10,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridRow {...props} />)
        );
        expect(testCase.first('tr').getAttribute('style'))
          .toBe(`height:${props.height}px;`);
      });
    });

    describe('onClick', () => {
      it('receives item as argument', () => {
        const onClick = jasmine.createSpy('onClick');
        const props = {
          item: {},
          rowCellPropsProviders: [
            () => {},
          ],
          height: 10,
          onClick,
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridRow {...props} />)
        );

        expect(onClick).not.toHaveBeenCalled();
        testCase.trigger('click', testCase.first('tr'));
        expect(onClick).toHaveBeenCalledWith(props.item);
      });
    });

    describe('classBodyRow', () => {
      it('is applied as a class of the tr element', () => {
        const props = {
          item: {},
          rowCellPropsProviders: [
            () => {},
          ],
          height: 10,
          classBodyRow: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridRow {...props} />)
        );

        expect(testCase.first('tr').getAttribute('class')
          .indexOf(props.classBodyRow) !== -1).toBe(true);
      });
    });

    describe('classBodyCell', () => {
      it('is applied as a class of the td element', () => {
        const props = {
          item: {},
          rowCellPropsProviders: [
            () => {},
          ],
          height: 10,
          classBodyCell: 'test',
        };

        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridRow {...props} />)
        );

        expect(testCase.first('td').getAttribute('class')
          .indexOf(props.classBodyCell) !== -1).toBe(true);
      });
    });
  });
});
