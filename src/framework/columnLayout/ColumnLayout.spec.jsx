
import { TestCaseFactory } from 'react-test-kit';
import ColumnLayout from './ColumnLayout.jsx';

describe('ColumnLayout', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };

        const testCase = TestCaseFactory.create(ColumnLayout, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
