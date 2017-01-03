
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import StickyGrid from './StickyGrid.jsx';

describe('StickyGrid', () => {
  describe('Props', () => {
    describe('id', () => {
      it('is applied to root element', () => {
        const props = {
          id: 'test',
          headerCellPropsProviders: [],
        };

        const testCase = TestCaseFactory.create(StickyGrid, props);

        expect(testCase.dom.getAttribute('id')).toBe(props.id);
      });
    });

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

        TestCaseFactory.create(StickyGrid, props);

        expect(cellPropsProvider1).toHaveBeenCalledWith(0);
        expect(cellPropsProvider2).toHaveBeenCalledWith(1);
      });
    });

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          headerCellPropsProviders: [],
          children: <div className="test" />,
        };

        const testCase = TestCaseFactory.create(StickyGrid, props);

        expect(testCase.first('.test')).toBeDefined();
      });
    });
  });
});
