
import { TestCaseFactory } from 'react-test-kit';
import AccordionItem from './AccordionItem.jsx';

describe('AccordionItem', () => {
  describe('Props', () => {
    const props = {
      isActive: true,
      children: 'testing',
      maxHeight: '100px',
      onTitleClick: () => undefined,
      title: 'Test',
    };

    describe('isActive', () => {
      it('when true then the component has proper class', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.find('.accordion__item__content--active').length)
          .toEqual(1);
      });

      it('when false then the component has proper class', () => {
        const newProps = Object.assign({}, props, {
          isActive: false,
        });

        const testCase = TestCaseFactory.create(AccordionItem, newProps);
        expect(testCase.find('.accordion__item__content--active').length)
          .toEqual(0);
      });
    });

    describe('children', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.dom.textContent).toContain(props.children);
      });
    });

    describe('maxHeight', () => {
      it('is added', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.dom.style.cssText).toContain('max-height: 100px');
      });
    });

    describe('title', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(testCase.dom.textContent).toContain(props.title);
      });
    });

    describe('onTitleClick', () => {
      it('is called when it is passed on', () => {
        const newProps = Object.assign({}, props, {
          onTitleClick: jasmine.createSpy(),
        });

        const testCase = TestCaseFactory.create(AccordionItem, newProps);
        testCase.trigger('click', testCase.first('.accordion__item__title'));
        expect(newProps.onTitleClick).toHaveBeenCalled();
      });
    });
  });

  describe('User events', () => {
    const props = {
      isActive: false,
      children: 'testing',
      maxHeight: '100px',
      title: 'Test',
    };

    describe('on click on the title', () => {
      it('the component becomes active', () => {
        const testCase = TestCaseFactory.create(AccordionItem, props);
        expect(
          testCase.first('.accordion__item__content--active')
        ).not.toBeDefined();
        testCase.trigger('click', testCase.first('.accordion__item__title'));
        expect(
          testCase.first('.accordion__item__content--active')
        ).toBeDefined();
      });
    });
  });
});
