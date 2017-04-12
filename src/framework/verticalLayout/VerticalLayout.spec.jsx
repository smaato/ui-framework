
import { TestCaseFactory } from 'react-test-kit';
import VerticalLayout from './VerticalLayout.jsx';

describe('VerticalLayout', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are wrapped in item elements when an array', () => {
        const props = {
          children: ['Test1', 'Test2'],
        };

        const testCase = TestCaseFactory.create(
          VerticalLayout, props);

        const items = testCase.find('.verticalLayoutItem');
        expect(items.length).toBe(2);

        for (let i = 0; i < items.length; i += 1) {
          const item = items[i];
          expect(item.textContent).toBe(props.children[i]);
        }
      });

      it('is wrapped in an item element when an object', () => {
        const props = {
          children: 'Test',
        };

        const testCase = TestCaseFactory.create(
          VerticalLayout, props);

        const items = testCase.find('.verticalLayoutItem');
        expect(items.length).toBe(1);
        expect(items[0].textContent).toBe(props.children);
      });
    });
  });
});
