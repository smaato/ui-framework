
import { TestCaseFactory } from 'react-test-kit';
import Accordion from './Accordion.jsx';

describe('Accordion', () => {
  describe('Props', () => {
    const props = {
      activeId: 0,
      children: [{
        title: 'test',
        content: 'testing',
      }],
      maxHeight: '100px',
      width: '100px',
    };
    describe('children', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(Accordion, props);
        expect(testCase.dom.textContent).toContain('test');
      });
    });

    describe('activeId', () => {
      it('only one is active', () => {
        const testCase = TestCaseFactory.create(Accordion, props);
        expect(
          testCase.dom.querySelectorAll(
            '.accordion-item__content--active'
          ).length
        )
        .toEqual(1);
      });
    });

    describe('maxHeight', () => {
      it('is added', () => {
        const testCase = TestCaseFactory.create(Accordion, props);
        expect(
          testCase.dom.getElementsByClassName('accordion-item')[0].style.cssText
        ).toContain('max-height: 100px');
      });
    });

    describe('width', () => {
      it('is added', () => {
        const testCase = TestCaseFactory.create(Accordion, props);
        expect(
          testCase.dom.getElementsByClassName('accordion-item')[0].style.cssText
        ).toContain('width: 100px');
      });
    });
  });
});
