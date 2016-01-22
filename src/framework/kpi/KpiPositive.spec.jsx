
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import KpiPositive from './KpiPositive.jsx';

describe('KpiPositive', () => {
  describe('Props', () => {
    describe('title', () => {
      it('is applied to element as an attribute', () => {
        const props = {
          title: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(
          <KpiPositive {...props} />
        );
        expect(testCase.dom.getAttribute('title')).toContain(props.title);
      });
    });

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="test" />,
        };
        const testCase = TestCaseFactory.createFromElement(
          <KpiPositive {...props} />
        );
        expect(testCase.first('#test')).toBeDefined();
      });
    });
  });
});
