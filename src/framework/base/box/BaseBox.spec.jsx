
import { TestCaseFactory } from 'react-test-kit';
import BaseBox from './BaseBox.jsx';

describe('BaseBox', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
          classes: '',
        };
        const testCase = TestCaseFactory.create(BaseBox, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(BaseBox, props);
        expect(testCase.dom.className).toContain(props.classes);
      });
    });

    describe('dataId', () => {
      it('is added', () => {
        const props = {
          classes: '',
          dataId: 'dataId',
        };
        const testCase = TestCaseFactory.create(BaseBox, props);
        expect(testCase.dom.getAttribute('data-id')).toBe(props.dataId);
      });
    });

    describe('roundedCorners', () => {
      it('when false doesn\'t add \'roundedCorners\' class', () => {
        const props = {
          roundedCorners: false,
        };
        const testCase = TestCaseFactory.create(BaseBox, props);
        expect(testCase.dom.className).not.toContain('roundedCorners');
      });

      it('when true adds \'roundedCorners\' class', () => {
        const props = {
          roundedCorners: true,
        };
        const testCase = TestCaseFactory.create(BaseBox, props);
        expect(testCase.dom.className).toContain('roundedCorners');
      });
    });
  });
});
