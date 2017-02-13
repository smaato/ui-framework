
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridControls from './GridControls.jsx';

describe('GridControls', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div className="test" />,
        };

        const testCase = TestCaseFactory.create(GridControls, props);
        expect(testCase.first('.test')).toBeDefined();
      });
    });
  });
});
