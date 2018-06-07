
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import {
  Accordion,
  AccordionItem,
} from '../../framework/framework';

describe('Accordion', () => {
  const props = {
    activeId: 0,
    children: [
      <AccordionItem key={0} title={'title1'}>
        {'test1'}
      </AccordionItem>,
      <AccordionItem key={1} title={'title2'}>
        {'test2'}
      </AccordionItem>,
    ],
    maxHeight: '100px',
    width: '100px',
  };

  describe('DOM structure', () => {
    it('AccordionItem is rendered', () => {
      const testCase = TestCaseFactory.create(Accordion, props);
      expect(testCase.first('.accordion__item')).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('activeId', () => {
      it('only one is active', () => {
        const testCase = TestCaseFactory.create(Accordion, props);

        testCase.trigger('click', testCase.find(
          '.accordion__item__title'
        )[1]);

        expect(
          testCase.find(
            '.accordion__item__content--active'
          ).length
        )
        .toEqual(1);
      });

      it('second is active if you click in the title', () => {
        const testCase = TestCaseFactory.create(Accordion, props);

        testCase.trigger('click', testCase.find(
          '.accordion__item__title'
        )[1]);

        expect(testCase.find(
          '.accordion__item__content'
        )[1].getAttribute('class'))
        .toContain('accordion__item__content--active');
      });
    });

    describe('children', () => {
      it('AccordionItem is called', () => {
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
