
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import FilterDropdown from './FilterDropdown.jsx';

describe('FilterDropdown', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };

        const testCase =
          TestCaseFactory.create(FilterDropdown, props);

        expect(testCase.first('#test').textContent).toBe('test');
      });
    });
  });
});
