
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Button from '../button/Button.jsx';
import ButtonGroup from './ButtonGroup.jsx';

describe('ButtonGroup', () => {
  describe('Props', () => {
    describe('className', () => {
      it('is applied to element', () => {
        const props = {
          classes: 'test',
        };
        const testCase = TestCaseFactory.create(
          ButtonGroup,
          props
        );
        expect(testCase.dom.getAttribute('class')).toContain(props.classes);
      });
    });

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: [
            <Button dataId="test" />,
            <Button />,
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
