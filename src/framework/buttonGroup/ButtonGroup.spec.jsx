
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GroupedButton from './GroupedButton.jsx';
import ButtonGroup from './ButtonGroup.jsx';

describe('ButtonGroup', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: [
            <GroupedButton dataId="test" />,
            <GroupedButton />,
          ],
        };
        const testCase = TestCaseFactory.create(
          ButtonGroup,
          props
        );
        expect(testCase.first('[data-id="test"]')).toBeDefined();
      });
    });
  });
});
