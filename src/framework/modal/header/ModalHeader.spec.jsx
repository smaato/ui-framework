
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../../services';
import ModalHeader from './ModalHeader.jsx';

describe('ModalHeader', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(ModalHeader, {
      children: 'title',
    }, '.modalHeader__title');

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'Modal test title',
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        expect(
          testCase.first('.modalHeader__title').textContent
        ).toBe(props.children);
      });
    });

    describe('onClose', () => {
      it('renders a close button when present', () => {
        const props = {
          onClose: () => undefined,
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).toBeDefined();
      });

      it('doesn\'t render a close button when not present', () => {
        const props = {
          onClose: undefined,
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).not.toBeDefined();
      });
    });

    describe('type', () => {
      Object.keys(ModalHeader.TYPE).forEach(type => {
        describe(`${type}`, () => {
          it('renders an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(ModalHeader, props);
            expect(testCase.first('.modalHeaderIcon')).toBeDefined();
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(ModalHeader);
        expect(testCase.first('.modalHeaderIcon')).not.toBeDefined();
      });
    });

    describe('closeTopModalLabel', () => {
      it('is rendered', () => {
        const props = {
          closeTopModalLabel: 'Close top modal',
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        expect(testCase.dom.textContent).toContain(props.closeTopModalLabel);
      });
    });
  });
});
