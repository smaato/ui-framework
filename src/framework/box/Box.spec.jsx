
import { TestCaseFactory } from 'react-test-kit';
import Box from './Box.jsx';

describe('Box', () => {
  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain(props.classes);
      });

      it('don\'t replace "box" class', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain('box');
      });
    });
  });
});
