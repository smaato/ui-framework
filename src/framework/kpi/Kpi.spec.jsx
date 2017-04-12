
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Kpi from './Kpi.jsx';

describe('Kpi', () => {
  describe('Props', () => {
    describe('className', () => {
      it('is applied to element', () => {
        const props = {
          className: 'test',
        };
        const testCase = TestCaseFactory.create(Kpi, props);
        expect(testCase.dom.getAttribute('class')).toContain(props.className);
      });
    });

    describe('title', () => {
      it('is applied to element as an attribute', () => {
        const props = {
          title: 'test',
        };
        const testCase = TestCaseFactory.create(Kpi, props);
        expect(testCase.dom.getAttribute('title')).toContain(props.title);
      });
    });

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="test" />,
        };
        const testCase = TestCaseFactory.create(Kpi, props);
        expect(testCase.first('#test')).toBeDefined();
      });
    });
  });
});
