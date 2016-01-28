
import { TestCaseFactory } from 'react-test-kit';
import FiltersDropdownButton from './FiltersDropdownButton.jsx';

describe('FiltersDropdownButton', () => {
  describe('Props', () => {
    describe('onClick', () => {
      it('is called when element is clicked', () => {
        const props = {
          onClick: jasmine.createSpy('onClick'),
        };

        const testCase =
          TestCaseFactory.createFromFunction(FiltersDropdownButton, props);

        expect(props.onClick).not.toHaveBeenCalled();
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalled();
      });
    });

    describe('isOpen', () => {
      it('applies a state class to the root element when true', () => {
        const props = {
          isOpen: true,
        };

        const testCase =
          TestCaseFactory.createFromFunction(FiltersDropdownButton, props);

        expect(testCase.dom.className).toContain('is-filters-dropdown-open');
      });

      it('doesn\'t apply a state class to the root element when false', () => {
        const props = {
          isOpen: false,
        };

        const testCase =
          TestCaseFactory.createFromFunction(FiltersDropdownButton, props);

        expect(testCase.dom.className).not.toContain('is-filters-dropdown-open');
      });
    });
  });
});
