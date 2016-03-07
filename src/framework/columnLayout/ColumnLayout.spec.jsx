
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Column from './Column.jsx';
import ColumnLayout from './ColumnLayout.jsx';

describe('ColumnLayout', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: [
            <Column key={0} width={1}>columnContent</Column>,
          ],
        };

        const testCase = TestCaseFactory.create(ColumnLayout, props);
        expect(testCase.first('.column--1').textContent).toBe('columnContent');
      });
    });
  });
});
