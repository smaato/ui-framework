
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AppHeaderDivider from './AppHeaderDivider.jsx';

describe('AppHeaderDivider', () => {
  describe('Props', () => {
    describe('left', () => {
      it('is rendered left of the divider', () => {
        const props = {
          left: <div className="left"></div>,
          right: <div className="right"></div>,
        };

        const testCase = TestCaseFactory.createFromFunction(AppHeaderDivider, props);

        expect(testCase.first('div').getAttribute('class')).toBe('left');
      });
    });

    describe('right', () => {
      it('is rendered right of the divider', () => {
        const props = {
          left: <div className="left"></div>,
          right: <div className="right"></div>,
        };

        const testCase = TestCaseFactory.createFromFunction(AppHeaderDivider, props);

        expect(testCase.find('div')[2].getAttribute('class')).toBe('right');
      });
    });
  });
});
