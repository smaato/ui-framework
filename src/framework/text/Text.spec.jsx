
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

    describe('rhythm', () => {
      describe('XSMALL', () => {
        it('adds the appropriate class', () => {
          const props = {
            rhythm: Text.RHYTHM.XSMALL,
          };

          const testCase = TestCaseFactory.createFromFunction(Text, props);
          expect(testCase.dom.className).toContain('text--xSmallRhythm');
        });
      });

      describe('SMALL', () => {
        it('adds the appropriate class', () => {
          const props = {
            rhythm: Text.RHYTHM.SMALL,
          };

          const testCase = TestCaseFactory.createFromFunction(Text, props);
          expect(testCase.dom.className).toContain('text--smallRhythm');
        });
      });
    });
  });
});
