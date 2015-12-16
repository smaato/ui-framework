
import { TestCaseFactory } from 'react-test-kit';
import Text from './Text.jsx';

describe('Text', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered as the textContent of the component', () => {
        const props = {
          children: 'Test',
        };

        const testCase = TestCaseFactory.createFromFunction(Text, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('spacing', () => {
      describe('XSMALL', () => {
        it('adds the appropriate class', () => {
          const props = {
            spacing: Text.SPACING.XSMALL,
          };

          const testCase = TestCaseFactory.createFromFunction(Text, props);
          expect(testCase.dom.getAttribute('class')
            .indexOf('text--smallSpacing') !== -1).toBe(true);
        });
      });
    });
  });
});
