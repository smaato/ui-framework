
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Column from './Column.jsx';

describe('Column', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Column);

    describe('width', () => {
      it('is rendered', () => {
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
