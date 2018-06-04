
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
    const children = [
      <div key={0}>Hello</div>,
      <div key={1}>World!</div>,
    ];

    describe('amountPerRow', () => {
      it('adds divs when content is shorter', () => {
        const amountPerRow = 4;
        const testCase = TestCaseFactory.create(CardHolder, {
          amountPerRow,
          children,
        });
        expect(testCase.find('.cardHolder__wrapper').length).toBe(amountPerRow);
      });
    });

    describe('children', () => {
      it('are rendered inside cardHolder__wrapper div', () => {
        const testCase = TestCaseFactory.create(CardHolder, {
          children,
        });

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
