
import { TestCaseFactory } from 'react-test-kit';
import Button from './Button.jsx';

describe('Button', () => {
  describe('Props', () => {
    describe('label', () => {
      it('is rendered', () => {
        const label = 'test text';
        const props = {
          label,
        };
        const testCase = TestCaseFactory.createFromFunction(Button, props);
        expect(testCase.first('.button__label').textContent).toBe(label);
      });
    });

    describe('disabled', () => {
      it('is rendered', () => {
        const props = {
          disabled: true,
        };
        const testCase = TestCaseFactory.createFromFunction(Button, props);
        expect(testCase.dom.getAttribute('class')).toContain('is-button-disabled');
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase =
          TestCaseFactory.createFromFunction(Button, {onClick});

        testCase.trigger('click');
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object) // SyntheticEvent
        );
      });
    });

    describe('classes', () => {
      it('is rendered', () => {
        const classes = 'test-class';
        const props = {
          classes,
        };
        const testCase = TestCaseFactory.createFromFunction(Button, props);
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });

    describe('iconClasses', () => {
      it('is rendered', () => {
        const iconClasses = 'test-class';
        const props = {
          iconClasses,
        };
        const testCase = TestCaseFactory.createFromFunction(Button, props);
        expect(testCase.first('.button__icon').getAttribute('class')).toContain(iconClasses);
      });
    });
  });
});
