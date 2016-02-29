
import { TestCaseFactory } from 'react-test-kit';
import AddOnDropdown from './AddOnDropdown.jsx';

describe('AddOnDropdown', () => {
  let testCase;

  function input() {
    return testCase.first('input');
  }

  function label() {
    return testCase.first('.addOnDropdownLabel');
  }

  function optionList() {
    return testCase.first('.addOnDropdownOptionList');
  }

  function optionAt(index = 0) {
    return testCase.find('.addOnDropdownOption')[index];
  }

  const requiredProps = {
    onSelect: () => undefined,
    labelProvider: () => undefined,
    optionLabelProvider: () => undefined,
  };

  describe('DOM structure', () => {
    it('contains an input', () => {
      const props = Object.assign({}, requiredProps);
      testCase = TestCaseFactory.create(AddOnDropdown, props);
      expect(input()).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('options', () => {
      it('populates the option list', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, requiredProps, {
          options,
          optionLabelProvider: option => option.title,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        testCase.trigger('click', label());
        expect(optionList().textContent).toBe(options[0].title);
      });
    });

    describe('selectedOption', () => {
      it('is used to render the label', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, requiredProps, {
          options,
          selectedOption: options[0],
          labelProvider: option => option.title,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().textContent).toBe(options[0].title);
      });
    });

    describe('onSelect', () => {
      it('is called with the selected option', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, requiredProps, {
          options,
          onSelect: jasmine.createSpy('onSelect'),
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);

        // Open option list, then mouse-down first option.
        testCase.trigger('click', label());
        testCase.trigger('mouseDown', optionAt());

        expect(props.onSelect).toHaveBeenCalledWith(options[0]);
      });
    });

    describe('labelProvider', () => {
      it('is used to render the label', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, requiredProps, {
          selectedOption: options[0],
          labelProvider: () => 'Default label',
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().textContent).toBe('Default label');
      });
    });

    describe('optionLabelProvider', () => {
      it('is used to render the option labels', () => {
        const props = Object.assign({}, requiredProps, {
          options: [{}],
          optionLabelProvider: () => 'Default option label',
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        testCase.trigger('click', label());
        expect(optionList().textContent).toBe('Default option label');
      });
    });

    describe('isLeftSide', () => {
      it('adds the appropriate class to the label', () => {
        const props = Object.assign({}, requiredProps, {
          isLeftSide: true,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().className).toContain('addOnDropdownLabel--left');
      });
    });

    describe('isRightSide', () => {
      it('adds the appropriate class to the label', () => {
        const props = Object.assign({}, requiredProps, {
          isRightSide: true,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().className).toContain('addOnDropdownLabel--right');
      });
    });
  });

  describe('Behavior', () => {
    describe('clicking the label', () => {
      it('once opens the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        expect(optionList()).toBeDefined();
      });

      it('twice closes the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        testCase.trigger('click', label());
        expect(optionList()).not.toBeDefined();
      });
    });

    describe('pressing the mouse down on the label', () => {
      it('calls event.preventDefault()', () => {
        // This prevents the input from losing focus.
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(optionList()).not.toBeDefined();

        const event = {
          preventDefault: jasmine.createSpy('preventDefault'),
        };
        testCase.trigger('mouseDown', label(), event);
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('twice closes the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        testCase.trigger('click', label());
        expect(optionList()).not.toBeDefined();
      });
    });

    describe('pressing down', () => {
      it('opens the option list and focuses on the first option', () => {
        const props = Object.assign({}, requiredProps, {
          options: [{}],
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();
        expect(optionList()).not.toBeDefined();

        // Open the option list.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        expect(optionAt(0).className)
          .toContain('is-add-on-dropdown-option-focus');
      });

      it('moves focus to the next option in the option list', () => {
        const props = Object.assign({}, requiredProps, {
          options: [{}, {}, {}],
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();

        // Option the option list and focus the 2nd option.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className)
          .not.toContain('is-add-on-dropdown-option-focus');
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className)
          .toContain('is-add-on-dropdown-option-focus');
      });
    });

    describe('pressing up', () => {
      it('moves focus to the previous option in the option list', () => {
        const props = Object.assign({}, requiredProps, {
          options: [{}, {}, {}],
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();

        // Open the option list and focus the 3rd option.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className)
          .not.toContain('is-add-on-dropdown-option-focus');

        // Focus the 2nd option.
        testCase.trigger('keyDown', input(), { keyCode: 38 });
        expect(optionAt(1).className)
          .toContain('is-add-on-dropdown-option-focus');
      });
    });

    describe('pressing escape', () => {
      it('closes the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();

        // Open and close the option list with ESC.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        testCase.trigger('keyDown', input(), { keyCode: 27 }); // Escape
        expect(optionList()).not.toBeDefined();
      });
    });

    describe('pressing enter', () => {
      it('closes the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();

        // Open and close the option list with ENTER.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        testCase.trigger('keyDown', input(), { keyCode: 13 }); // Enter
        expect(optionList()).not.toBeDefined();
      });

      it('selects the focused option list option', () => {
        const props = Object.assign({}, requiredProps, {
          options: [{}],
          onSelect: jasmine.createSpy('onSelect'),
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        input().focus();

        // Open and close the option list with ENTER.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 13 }); // Enter
        expect(props.onSelect).toHaveBeenCalledWith(props.options[0]);
      });
    });

    describe('giving the input focus', () => {
      it('adds the appropriate class', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().className)
          .not.toContain('is-add-on-dropdown-label-focus');
        testCase.trigger('focus', input());
        expect(label().className)
          .toContain('is-add-on-dropdown-label-focus');
      });
    });

    describe('taking focus from the input', () => {
      it('closes the option list', () => {
        const props = Object.assign({}, requiredProps);

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        testCase.trigger('focus', input());
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        testCase.trigger('blur', input());
        expect(optionList()).not.toBeDefined();
      });
    });
  });
});
