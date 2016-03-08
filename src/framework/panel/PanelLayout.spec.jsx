
import { TestCaseFactory } from 'react-test-kit';
import PanelLayout from './PanelLayout.jsx';

describe('PanelLayout', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(PanelLayout, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
