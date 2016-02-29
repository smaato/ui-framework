
import { TestCaseFactory } from 'react-test-kit';
import AddOnDropdownOption from './AddOnDropdownOption.jsx';

describe('AddOnDropdownOption', () => {
  describe('Props', () => {
    describe('onClick', () => {
      it('is called with the option when the mouse is pressed down', () => {
        const props = {
          option: {},
          onClick: jasmine.createSpy('onClick'),
          onMouseOver: () => undefined,
        };

        const testCase = TestCaseFactory.create(AddOnDropdownOption, props);
        testCase.trigger('mouseDown');
        expect(props.onClick).toHaveBeenCalledWith(props.option);
      });
    });

    describe('onMouseOver', () => {
      it('is called with the index when the mouse moves', () => {
        const props = {
          index: 1,
          onClick: () => undefined,
          onMouseOver: jasmine.createSpy('onMouseOver'),
        };

        const testCase = TestCaseFactory.create(AddOnDropdownOption, props);
        testCase.trigger('mouseMove');
        expect(props.onMouseOver).toHaveBeenCalledWith(props.index);
      });
    });

    describe('hasFocus', () => {
      it('applies the appropriate class', () => {
        const props = {
          hasFocus: true,
          onClick: () => undefined,
          onMouseOver: () => undefined,
        };

        const testCase = TestCaseFactory.create(AddOnDropdownOption, props);
        expect(testCase.dom.className)
          .toContain('is-add-on-dropdown-option-focus');
      });
    });
  });
});
