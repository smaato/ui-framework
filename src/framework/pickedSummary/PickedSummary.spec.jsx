
import { TestCaseFactory } from 'react-test-kit';
import PickedSummary from './PickedSummary.jsx';

describe('PickedSummary', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(PickedSummary, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('type', () => {
      Object.keys(PickedSummary.TYPE).forEach((type) => {
        describe(`${type}`, () => {
          it('renders an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(PickedSummary, props);
            expect(testCase.first('.icon')).toBeDefined();
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(PickedSummary);
        expect(testCase.first('.icon')).not.toBeDefined();
      });
    });
  });
});
