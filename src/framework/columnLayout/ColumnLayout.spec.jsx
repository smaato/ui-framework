
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
            <Column key={1} width={1}>columnContent</Column>,
          ],
        };

        const testCase = TestCaseFactory
          .createFromFunction(ColumnLayout, props);
        expect(testCase.dom.children[0].textContent).toBe('columnContent');
      });
    });
  });
});
