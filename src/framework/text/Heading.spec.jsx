import { TestCaseFactory } from 'react-test-kit';
import Heading from './Heading.jsx';

describe('Heading', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'Test',
        };

        const testCase = TestCaseFactory.create(
          Heading,
          props
        );
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('size', () => {
      describe('SMALL', () => {
        it('adds the appropriate class', () => {
          const props = {
            size: Heading.SIZE.SMALL,
          };

          const testCase = TestCaseFactory.create(Heading, props);
          expect(testCase.dom.className).toContain('heading--small');
        });
      });

      describe('LARGE', () => {
        it('adds the appropriate class', () => {
          const props = {
            size: Heading.SIZE.LARGE,
          };

          const testCase = TestCaseFactory.create(Heading, props);
          expect(testCase.dom.className).toContain('heading--large');
        });
      });
    });
  });
});
