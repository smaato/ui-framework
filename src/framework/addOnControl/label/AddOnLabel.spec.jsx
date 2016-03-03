
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AddOnLabel from './AddOnLabel.jsx';

describe('AddOnLabel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="child">test</div>,
        };
        const testCase = TestCaseFactory.create(AddOnLabel, props);
        const child = testCase.first('#child');
        expect(child.textContent).toBe('test');
      });
    });

    describe('isLeftSide', () => {
      it('adds the appropriate class', () => {
        const props = {
          isLeftSide: true,
        };
        const testCase = TestCaseFactory.create(AddOnLabel, props);
        expect(testCase.dom.className).toContain('addOnLabel--left');
      });
    });

    describe('isRightSide', () => {
      it('adds the appropriate class', () => {
        const props = {
          isRightSide: true,
        };
        const testCase = TestCaseFactory.create(AddOnLabel, props);
        expect(testCase.dom.className).toContain('addOnLabel--right');
      });
    });
  });
});
