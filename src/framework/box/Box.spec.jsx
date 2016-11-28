
import { TestCaseFactory } from 'react-test-kit';
import Box from './Box.jsx';

describe('Box', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('classes', () => {
      it('is added to the element', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain(props.classes);
      });

      it('doesn\'t replace "box" class', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain('box');
      });
    });

    describe('dataId', () => {
      it('is added', () => {
        const props = {
          dataId: 'dataId',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.getAttribute('data-id')).toBe(props.dataId);
      });
    });

    describe('roundedCorners', () => {
      it('when false doesn\'t add "box--roundedCorners" class', () => {
        const props = {
          roundedCorners: false,
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).not.toContain('box--roundedCorners');
      });

      it('when true adds "box--roundedCorners" class', () => {
        const props = {
          roundedCorners: true,
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain('box--roundedCorners');
      });
    });
  });
});
