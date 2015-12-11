
import { TestCaseFactory } from 'react-test-kit';
import Label from './Label.jsx';

describe('Label', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is set as the label\'s text', () => {
        const props = {
          children: 'Label text',
        };
        const testCase = TestCaseFactory.createFromFunction(Label, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
