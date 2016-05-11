
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Link from './Link.jsx';

describe('Link', () => {
  describe('DOM structure', () => {
    it('is an anchor tag', () => {
      const testCase = TestCaseFactory.create(Link);
      expect(testCase.dom.tagName).toBe('A');
    });
  });

  describe('Props', () => {
    CommonAssertions.assertDataId(Link);

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(Link, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('href', () => {
      it('is applied as href attribute', () => {
        const props = {
          href: 'test',
        };
        const testCase = TestCaseFactory.create(Link, props);
        expect(testCase.dom.getAttribute('href')).toBe(props.href);
      });
    });

    describe('onClick', () => {
      it('is called when the component is clicked', () => {
        const props = {
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(Link, props);
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalled();
      });

      it('is called with the data prop', () => {
        const props = {
          data: 'test',
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(Link, props);
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalledWith(props.data);
      });
    });

    describe('target', () => {
      it('is applied as target attribute', () => {
        const props = {
          target: 'test',
        };
        const testCase = TestCaseFactory.create(Link, props);
        expect(testCase.dom.getAttribute('target')).toBe(props.target);
      });
    });
  });
});
