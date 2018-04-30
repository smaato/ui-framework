import React from 'react';
import { TestCaseFactory } from 'react-test-kit';

import CardHolder from './CardHolder.jsx';

describe('CardHolder', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(CardHolder, {
        children: [
          <p />,
          <p />,
        ],
      });
      expect(testCase.dom.getAttribute('class')).toContain('card-holder');
    });
  });

  describe('props', () => {
    describe('is childrenMinWidth is provided', () => {
      it('it should have that as style', () => {
        const testCase = TestCaseFactory.create(CardHolder, {
          children: [
            <p />,
            <p />,
          ],
          childrenMinWidth: '100px',
        });
        expect(testCase.dom.style.gridTemplateColumns)
          .toEqual('repeat(auto-fit, minmax(100px, 1fr))');
      });
    });

    describe('is childrenMinWidth is not provided', () => {
      it('it should have default', () => {
        const testCase = TestCaseFactory.create(CardHolder, {
          children: [
            <p />,
            <p />,
          ],
        });
        expect(testCase.dom.style.gridTemplateColumns)
          .toEqual('repeat(auto-fit, minmax(220px, 1fr))');
      });
    });
  });

  describe('children', () => {
    it('should wrap all children in a card-holder-card-wrapper div', () => {
      const testCase = TestCaseFactory.create(CardHolder, {
        children: [
          <p>Hello</p>,
          <p>World!</p>,
        ],
      });

      expect(testCase.dom.querySelectorAll('.card-holder-card-wrapper').length)
        .toEqual(2);

      expect(
        testCase.dom
          .querySelectorAll('.card-holder-card-wrapper p')[0].innerHTML
      ).toEqual('Hello');

      expect(
        testCase.dom
          .querySelectorAll('.card-holder-card-wrapper p')[1].innerHTML
      ).toEqual('World!');
    });
  });
});
