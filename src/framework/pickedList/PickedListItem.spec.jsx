
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

    describe('isAllowed', () => {
      it('renders the correct icon when true', () => {
        const props = {
          isAllowed: true,
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        expect(testCase.first('.pickedListItemIcon--check'))
          .toBeDefined();
      });

      it('renders the correct icon when false', () => {
        const props = {
          isAllowed: false,
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedListItem, props);
        expect(testCase.first('.pickedListItemIcon--ban'))
          .toBeDefined();
      });
    });
  });
});
