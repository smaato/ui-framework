
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Menu from './Menu.jsx';

describe('Menu', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Menu);

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
