import { TestCaseFactory } from 'react-test-kit';
import Heading from './Heading.jsx';

describe('Heading', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered as the Heading of the component', () => {
        const props = {
          children: 'Test',
        };

        const testCase = TestCaseFactory.create(
          Heading,
          props
        );
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
