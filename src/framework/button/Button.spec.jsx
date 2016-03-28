
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Button from './Button.jsx';

describe('Button', () => {
  describe('DOM structure', () => {
    it('is a button', () => {
      const testCase = TestCaseFactory.create(Button);
      expect(testCase.dom.tagName).toBe('BUTTON');
    });
  });

  describe('Props', () => {
    CommonAssertions.assertDataId(Button);

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test text',
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(testCase.first('.button__label').textContent)
          .toBe(props.children);
      });
    });

    describe('href', () => {
      it('renders the component as a link', () => {
        const props = {
          href: 'test',
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(testCase.dom.tagName).toBe('A');
      });

      it('is applied as href attribute', () => {
        const props = {
          href: 'test',
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(testCase.dom.getAttribute('href')).toBe(props.href);
      });
    });

    describe('disabled', () => {
      it('adds the appropriate class when true', () => {
        const props = {
          disabled: true,
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(
          testCase.dom.getAttribute('class')
        ).toContain('is-button-disabled');
      });

      it('does not add class when false', () => {
        const props = {
          disabled: false,
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(
          testCase.dom.getAttribute('class')
        ).not.toContain('is-button-disabled');
      });
    });

    describe('selected', () => {
      it('adds the appropriate class when true', () => {
        const props = {
          selected: true,
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(
          testCase.dom.getAttribute('class')
        ).toContain('is-button-selected');
      });

      it('does not add class when false', () => {
        const props = {
          selected: false,
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(
          testCase.dom.getAttribute('class')
        ).not.toContain('is-button-selected');
      });
    });

    describe('onClick', () => {
      it('is called with event object when clicked', () => {
        const props = {
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(Button, props);
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalledWith(
          jasmine.any(Object) // SyntheticEvent
        );
      });

      it('isn\'t called when disabled is true', () => {
        const props = {
          disabled: true,
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(Button, props);
        testCase.trigger('click');
        expect(props.onClick).not.toHaveBeenCalled();
      });
    });

    describe('classes', () => {
      it('are added to the element', () => {
        const classes = 'test-class';
        const props = {
          classes,
        };
        const testCase = TestCaseFactory.create(Button, props);
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });

    describe('type', () => {
      Object.keys(Button.TYPE).forEach(type => {
        describe(`${type}`, () => {
          it('adds an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(Button, props);
            expect(testCase.first('.icon')).toBeDefined();
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(Button);
        expect(testCase.first('.icon')).not.toBeDefined();
      });
    });
  });
});
