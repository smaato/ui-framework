
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import FiltersDropdown from './FiltersDropdown.jsx';

describe('FiltersDropdown', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };

        const testCase =
          TestCaseFactory.create(FiltersDropdown, props);

        expect(testCase.first('#test').textContent).toBe('test');
      });
    });
  });
});
