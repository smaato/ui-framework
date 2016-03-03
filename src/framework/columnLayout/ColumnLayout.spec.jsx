
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import ColumnLayout from './ColumnLayout.jsx';

describe('ColumnLayout', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(ColumnLayout);

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="child" />,
        };

        const testCase = TestCaseFactory
          .createFromFunction(ColumnLayout, props);
        expect(testCase.first('#child')).toBeDefined();
      });
    });
  });
});
