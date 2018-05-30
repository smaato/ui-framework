
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';

import CardHolder from './CardHolder.jsx';

describe('CardHolder', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(CardHolder, {
        children: [
          <div />,
          <div />,
        ],
      });
      expect(testCase.dom.className).toContain('cardHolder');
    });
  });

  describe('props', () => {
    describe('children', () => {
      it('are rendered inside cardHolder__wrapper div', () => {
        const children = [
          <div>Hello</div>,
          <div>World!</div>,
        ];
        const testCase = TestCaseFactory.create(CardHolder, {
          children,
        });

        expect(
          testCase.find('.cardHolder__wrapper').length
        ).toEqual(children.length);

        expect(testCase.dom.textContent).toContain('Hello');
        expect(testCase.dom.textContent).toContain('World');
      });
    });

    describe('childrenMinWidth', () => {
      it('is applied', () => {
        const testCase = TestCaseFactory.create(CardHolder, {
          children: [
            <div />,
            <div />,
          ],
          childrenMinWidth: '100px',
        });
        expect(
          testCase.dom.style.gridTemplateColumns
        ).toEqual('repeat(auto-fit, minmax(100px, 1fr))');
      });
    });
  });
});
