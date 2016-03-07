
import { TestCaseFactory } from 'react-test-kit';
import ButtonGroup from './ButtonGroup.jsx';

describe('ButtonGroup', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(
          ButtonGroup,
          props
        );
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
