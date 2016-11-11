
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

      it('doesn\'t replace \'box\' class', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toContain('box');
      });

      it('doesn\'t add identical classes multiple times', () => {
        const props = {
          classes: 'box box testClass',
        };
        const testCase = TestCaseFactory.create(Box, props);
        expect(testCase.dom.className).toBe('box testClass');
      });
    });
  });
});
