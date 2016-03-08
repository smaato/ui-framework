
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Column from './Column.jsx';

describe('Column', () => {
  describe('Props', () => {
    describe('width', () => {
      it('applies the appropriate class', () => {
        const props = {
          width: 1,
          children: <div id="child" />,
        };

        const testCase = TestCaseFactory.createFromFunction(Column, props);
        expect(testCase.dom.className).toContain('column--1');
      });
    });

    describe('children', () => {
      it('are rendered', () => {
        const props = {
          width: 1,
          children: <div id="child" />,
        };

        const testCase = TestCaseFactory.createFromFunction(Column, props);
        expect(testCase.first('#child')).toBeDefined();
      });
    });
  });
});
