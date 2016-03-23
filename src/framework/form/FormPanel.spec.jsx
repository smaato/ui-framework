
import { TestCaseFactory } from 'react-test-kit';
import FormPanel from './FormPanel.jsx';

describe('FormPanel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(FormPanel, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
