
import { TestCaseFactory } from 'react-test-kit';
import AppLogo from './AppLogo.jsx';

describe('AppLogo', () => {
  describe('Props', () => {
    describe('href', () => {
      it('renders as hyperlink when set', () => {
        const props = {
          href: 'http://www.test.com/',
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.tagName).toBe('A');
      });

      it('is set as link destination', () => {
        const props = {
          href: 'http://www.test.com/',
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.getAttribute('href')).toBe(props.href);
      });

      it('renders as span when not set', () => {
        const props = {
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.tagName).toBe('SPAN');
      });
    });

    describe('text', () => {
      it('is rendered when link', () => {
        const props = {
          href: 'http://www.test.com/',
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.textContent).toBe(props.text);
      });

      it('is rendered when span', () => {
        const props = {
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.textContent).toBe(props.text);
      });

      it('is set as title', () => {
        const props = {
          text: 'Test',
        };

        const testCase = TestCaseFactory.create(AppLogo, props);
        expect(testCase.dom.getAttribute('title')).toBe(props.text);
      });
    });
  });
});
