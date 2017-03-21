
import { TestCaseFactory } from 'react-test-kit';

import Alert from './Alert.jsx';

describe('Alert', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };

        const testCase = TestCaseFactory.create(Alert, props);

        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('classes', () => {
      it('is applied', () => {
        const props = {
          classes: 'test1',
        };

        const testCase = TestCaseFactory.create(Alert, props);

        expect(testCase.dom.className).toContain(props.classes);
      });
    });

    describe('type', () => {
      Object.keys(Alert.TYPE).forEach((type) => {
        describe(`${type}`, () => {
          it('applies corresponing class', () => {
            const props = {
              type,
            };

            const testCase = TestCaseFactory.create(Alert, props);

            expect(
              testCase.dom.className
            ).toContain(`alert--${type.toLowerCase()}`);
          });
        });
      });
    });
  });
});
