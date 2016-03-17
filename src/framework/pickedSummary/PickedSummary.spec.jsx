
import { TestCaseFactory } from 'react-test-kit';
import PickedSummary from './PickedSummary.jsx';

describe('PickedSummary', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedSummary, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('isAllowed', () => {
      it('renders the correct icon when true', () => {
        const props = {
          isAllowed: true,
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedSummary, props);
        expect(testCase.first('.pickedSummaryIcon--check'))
          .toBeDefined();
      });

      it('renders the correct icon when false', () => {
        const props = {
          isAllowed: false,
          onRemove: () => undefined,
        };
        const testCase = TestCaseFactory.create(PickedSummary, props);
        expect(testCase.first('.pickedSummaryIcon--ban'))
          .toBeDefined();
      });
    });
  });
});