
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import {
  Accordion,
  AccordionItem,
} from '../../framework/framework';

describe('Accordion', () => {
  const props = {
    children: [
      <AccordionItem key={0} title={'title1'}>
        {'test1'}
      </AccordionItem>,
      <AccordionItem key={1} title={'title2'}>
        {'test2'}
      </AccordionItem>,
    ],
    width: '100px',
  };

  describe('DOM structure', () => {
    it('Accordion class is rendered', () => {
      const testCase = TestCaseFactory.create(Accordion, props);
      expect(testCase.dom.className).toContain('accordion');
    });

    it('AccordionItem is rendered', () => {
      const testCase = TestCaseFactory.create(Accordion, props);
      expect(testCase.first('.accordion__item')).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(Accordion, props);

        expect(testCase.dom.textContent).toContain('test');
      });
    });

    describe('width', () => {
      it('is added', () => {
        const testCase = TestCaseFactory.create(Accordion, props);

        expect(
          testCase.dom.style.cssText
        ).toContain('width: 100px');
      });
    });
  });
});
