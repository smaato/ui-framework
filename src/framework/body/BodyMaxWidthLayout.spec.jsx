
import { TestCaseFactory } from 'react-test-kit';
import BodyMaxWidthLayout from './BodyMaxWidthLayout.jsx';

describe('BodyMaxWidthLayout', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(BodyMaxWidthLayout, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
