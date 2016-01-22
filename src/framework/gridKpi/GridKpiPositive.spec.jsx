
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridKpiPositive from './GridKpiPositive.jsx';

describe('GridKpiPositive', () => {
  describe('Props', () => {
    describe('title', () => {
      it('is applied to element as an attribute', () => {
        const props = {
          title: 'test',
        };
        const testCase = TestCaseFactory.createFromElement(
          <GridKpiPositive {...props} />
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
          <GridKpiPositive {...props} />
        );
        expect(testCase.first('#test')).toBeDefined();
      });
    });
  });
});
