
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import ViewHeader from './ViewHeader.jsx';

describe('ViewHeader', () => {
  describe('Props', () => {
    describe('left', () => {
      it('is rendered as the first child of the component', () => {
        const props = {
          left: <div className="child child1" />,
          right: <div className="child child2" />,
        };

        const testCase = TestCaseFactory.createFromFunction(ViewHeader, props);
        const children = testCase.find('.child');
        expect(children[0].getAttribute('class')).toContain('child1');
      });
    });

    describe('right', () => {
      it('is rendered as the second child of the component', () => {
        const props = {
          left: <div className="child child1" />,
          right: <div className="child child2" />,
        };

        const testCase = TestCaseFactory.createFromFunction(ViewHeader, props);
        const children = testCase.find('.child');
        expect(children[1].getAttribute('class')).toContain('child2');
      });
    });
  });
});
