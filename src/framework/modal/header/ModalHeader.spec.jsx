
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../../services';
import ModalHeader from './ModalHeader.jsx';

describe('ModalHeader', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(ModalHeader, {
      title: 'title',
    }, '.modalHeader__title');

    describe('title', () => {
      it('is rendered when an array', () => {
        const props = {
          title: 'Modal test title',
        };
        const testCase = TestCaseFactory.createFromFunction(ModalHeader, props);
        expect(
          testCase.first('.modalHeader__title').textContent
        ).toBe(props.title);
      });
    });

    describe('onClose', () => {
      it('renders a close button when present', () => {
        const props = {
          onClose: () => {},
        };
        const testCase = TestCaseFactory.createFromFunction(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).toBeDefined();
      });

      it('doesn\'t render a close button when not present', () => {
        const props = {
          onClose: undefined,
        };
        const testCase = TestCaseFactory.createFromFunction(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).not.toBeDefined();
      });
    });
  });
});
