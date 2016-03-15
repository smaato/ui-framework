
import { TestCaseFactory } from 'react-test-kit';
import Menu from './Menu.jsx';

describe('Menu', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(Menu, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
