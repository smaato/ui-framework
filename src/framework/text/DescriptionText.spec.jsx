
import { TestCaseFactory } from 'react-test-kit';
import DescriptionText from './DescriptionText.jsx';

describe('DescriptionText', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered as the textContent of the component', () => {
        const props = {
          children: 'Test',
        };

        const testCase = TestCaseFactory.create(
          DescriptionText,
          props
        );
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
