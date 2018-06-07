
import { TestCaseFactory } from 'react-test-kit';
import AccordionItem from './AccordionItem.jsx';

describe('AccordionItem', () => {
  describe('Props', () => {
    const props = {
      index: 0,
      isActive: true,
      children: 'testing',
      maxHeight: '100px',
      onTitleClick: () => undefined,
      title: 'Test',
    };

    describe('isActive', () => {
      it('it has the proper class when it is active', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(
          testCase.find(
            '.accordion__item__content--active'
          ).length
        )
        .toEqual(1);
      });
    });

    describe('children', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.dom.textContent).toContain('testing');
      });
    });

    describe('maxHeight', () => {
      it('is added', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(
          testCase.dom.style.cssText
        ).toContain('max-height: 100px');
      });
    });

    describe('Title', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.dom.textContent).toContain('Test');
      });
    });
  });
});
