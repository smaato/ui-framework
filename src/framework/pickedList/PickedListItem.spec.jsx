
import { TestCaseFactory } from 'react-test-kit';
import PickedListItem from './PickedListItem.jsx';

describe('PickedListItem', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('onRemove', () => {
      it('is not rendered when not defined', () => {
        const props = {
          data: {},
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        expect(
          testCase.first('.pickedListItem__removeButton')
        ).not.toBeDefined();
      });

      it('is rendered when defined', () => {
        const props = {
          onRemove: () => undefined,
          data: {},
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        expect(testCase.first('.pickedListItem__removeButton')).toBeDefined();
      });

      it('is called with data when remove button is clicked', () => {
        const props = {
          onRemove: jasmine.createSpy('onRemove'),
          data: {},
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        const removeButton = testCase.first('.pickedListItem__removeButton');
        testCase.trigger('click', removeButton);
        expect(props.onRemove).toHaveBeenCalledWith(props.data);
      });
    });

    describe('type', () => {
      Object.keys(PickedListItem.TYPE).forEach(type => {
        describe(`${type}`, () => {
          it('renders an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(PickedListItem, props);
            expect(testCase.first('.icon')).toBeDefined();
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(PickedListItem);
        expect(testCase.first('.icon')).not.toBeDefined();
      });
    });
  });
});
