
import { TestCaseFactory } from 'react-test-kit';
import BaseDropdown from './BaseDropdown.jsx';
import BaseDropdownOption from './BaseDropdownOption.jsx';

describe('BaseDropdown', () => {
  let testCase;

  const basicProps = {
    classes: 'dropdown',
    inputClasses: 'input',
    labelClasses: 'label',
    labelFocusClasses: 'is-label-focus',
    optionListClasses: 'optionList',
    optionType: BaseDropdownOption,
    onSelect: () => undefined,
    labelProvider: () => undefined,
    optionLabelProvider: () => undefined,
  };

  const optionFocusClass = BaseDropdownOption.defaultProps.focusClasses;

  function input() {
    return testCase.first('input');
  }

  function label() {
    return testCase.first(`.${basicProps.labelClasses}`);
  }

  function optionList() {
    return testCase.first(`.${basicProps.optionListClasses}`);
  }

  function optionAt(index = 0) {
    return testCase.find(`.${BaseDropdownOption.defaultProps.classes}`)[index];
  }

  describe('DOM structure', () => {
    it('contains an input', () => {
      const props = Object.assign({}, basicProps);
      testCase = TestCaseFactory.create(BaseDropdown, props);
      expect(input()).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('options', () => {
      it('populates the option list', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, basicProps, {
          options,
          optionLabelProvider: option => option.title,
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        testCase.trigger('click', label());
        expect(optionList().textContent).toBe(options[0].title);
      });
    });

    describe('selectedOption', () => {
      it('is used to render the label', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, basicProps, {
          options,
          selectedOption: options[0],
          labelProvider: option => option.title,
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(label().textContent).toBe(options[0].title);
      });
    });

    describe('onSelect', () => {
      it('is called with the selected option', () => {
        const options = [{
          title: 'Test',
        }];

        const props = Object.assign({}, basicProps, {
          options,
          onSelect: jasmine.createSpy('onSelect'),
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);

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

        const props = Object.assign({}, basicProps, {
          selectedOption: options[0],
          labelProvider: () => 'Default label',
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(label().textContent).toBe('Default label');
      });
    });

    describe('optionLabelProvider', () => {
      it('is used to render the option labels', () => {
        const props = Object.assign({}, basicProps, {
          options: [{}],
          optionLabelProvider: () => 'Default option label',
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        testCase.trigger('click', label());
        expect(optionList().textContent).toBe('Default option label');
      });
    });
  });

  describe('Behavior', () => {
    describe('clicking the label', () => {
      it('once opens the option list', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        expect(optionList()).toBeDefined();
      });

      it('twice closes the option list', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        testCase.trigger('click', label());
        expect(optionList()).not.toBeDefined();
      });
    });

    describe('pressing the mouse down on the label', () => {
      it('calls event.preventDefault()', () => {
        // This prevents the input from losing focus.
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(optionList()).not.toBeDefined();

        const event = {
          preventDefault: jasmine.createSpy('preventDefault'),
        };
        testCase.trigger('mouseDown', label(), event);
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('twice closes the option list', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(optionList()).not.toBeDefined();
        testCase.trigger('click', label());
        testCase.trigger('click', label());
        expect(optionList()).not.toBeDefined();
      });
    });

    describe('pressing down', () => {
      it('opens the option list and focuses on the first option', () => {
        const props = Object.assign({}, basicProps, {
          options: [{}],
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        input().focus();
        expect(optionList()).not.toBeDefined();

        // Open the option list.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        expect(optionAt(0).className).toContain(optionFocusClass);
      });

      it('moves focus to the next option in the option list', () => {
        const props = Object.assign({}, basicProps, {
          options: [{}, {}, {}],
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        input().focus();

        // Option the option list and focus the 2nd option.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className).not.toContain(optionFocusClass);
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className).toContain(optionFocusClass);
      });
    });

    describe('pressing up', () => {
      it('moves focus to the previous option in the option list', () => {
        const props = Object.assign({}, basicProps, {
          options: [{}, {}, {}],
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        input().focus();

        // Open the option list and focus the 3rd option.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionAt(1).className).not.toContain(optionFocusClass);

        // Focus the 2nd option.
        testCase.trigger('keyDown', input(), { keyCode: 38 });
        expect(optionAt(1).className).toContain(optionFocusClass);
      });
    });

    describe('pressing escape', () => {
      it('closes the option list', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
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
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        input().focus();

        // Open and close the option list with ENTER.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        testCase.trigger('keyDown', input(), { keyCode: 13 }); // Enter
        expect(optionList()).not.toBeDefined();
      });

      it('selects the focused option list option', () => {
        const props = Object.assign({}, basicProps, {
          options: [{}],
          onSelect: jasmine.createSpy('onSelect'),
        });

        testCase = TestCaseFactory.create(BaseDropdown, props);
        input().focus();

        // Open and close the option list with ENTER.
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        testCase.trigger('keyDown', input(), { keyCode: 13 }); // Enter
        expect(props.onSelect).toHaveBeenCalledWith(props.options[0]);
      });
    });

    describe('giving the input focus', () => {
      it('adds the appropriate class', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        expect(label().className).not.toContain(basicProps.labelFocusClasses);
        testCase.trigger('focus', input());
        expect(label().className).toContain(basicProps.labelFocusClasses);
      });
    });

    describe('taking focus from the input', () => {
      it('closes the option list', () => {
        const props = Object.assign({}, basicProps);

        testCase = TestCaseFactory.create(BaseDropdown, props);
        testCase.trigger('focus', input());
        testCase.trigger('keyDown', input(), { keyCode: 40 });
        expect(optionList()).toBeDefined();
        testCase.trigger('blur', input());
        expect(optionList()).not.toBeDefined();
      });
    });
  });
});
