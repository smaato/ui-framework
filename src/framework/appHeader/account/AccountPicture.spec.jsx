
import { TestCaseFactory } from 'react-test-kit';
import AccountPicture from './AccountPicture.jsx';

describe('AccountPicture', () => {
  describe('Props', () => {
    describe('url', () => {
      it('renders an img element when set', () => {
        const props = {
          url: '/img/testImage.png',
        };
        const testCase = TestCaseFactory.createFromFunction(
          AccountPicture,
          props
        );
        expect(testCase.first('img')).toBeDefined();
        expect(testCase.first('.icon')).not.toBeDefined();
      });

      it('renders an icon when not set', () => {
        const testCase = TestCaseFactory.createFromFunction(
          AccountPicture
        );
        expect(testCase.first('img')).not.toBeDefined();
        expect(testCase.first('.icon')).toBeDefined();
      });

      it('sets the url as the src of the img element', () => {
        const props = {
          url: '/img/testImage.png',
        };
        const testCase = TestCaseFactory.createFromFunction(
          AccountPicture,
          props
        );
        expect(testCase.first('img').getAttribute('src')).toBe(props.url);
      });
    });

    describe('title', () => {
      it('is set as title of img element', () => {
        const props = {
          url: '/img/testImage.png',
          title: 'testTitle',
        };
        const testCase = TestCaseFactory.createFromFunction(
          AccountPicture,
          props
        );
        expect(testCase.first('img').getAttribute('title')).toBe(props.title);
      });

      it('is set as title of icon', () => {
        const props = {
          title: 'testTitle',
        };
        const testCase = TestCaseFactory.createFromFunction(
          AccountPicture,
          props
        );
        expect(testCase.first('.icon').getAttribute('title')).toBe(props.title);
      });
    });
  });
});
