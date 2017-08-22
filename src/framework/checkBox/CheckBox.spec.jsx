
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import CheckBox from './CheckBox.jsx';

describe('CheckBox', () => {
  describe('DOM structure', () => {
    it('span contains input and label', () => {
      const testCase = TestCaseFactory.createFromElement(<CheckBox id="id" />);
      expect(testCase.dom.tagName).toBe('SPAN');
      expect(testCase.dom.children[0].tagName).toBe('INPUT');
      expect(testCase.dom.children[1].tagName).toBe('LABEL');
    });
  });

  describe('Props', () => {
    describe('id', () => {
      describe('when set', () => {
        it(
          'is applied to the input\'s id and name attributes, and label\'s ' +
          'for attribute',
          () => {
            const testCase = TestCaseFactory.createFromElement(
              <CheckBox id="goodId" />
            );
            expect(testCase.first('input').getAttribute('id')).toBe('goodId');
            expect(testCase.first('input').getAttribute('name')).toBe('goodId');
            expect(testCase.first('label').getAttribute('for')).toBe('goodId');
          }
        );
      });
    });

    describe('checked', () => {
      describe('when not set', () => {
        it('input is not checked', () => {
          const testCase = TestCaseFactory.createFromElement(
            <CheckBox id="id" />
          );
          expect(testCase.first('input').checked).toBe(false);
        });
      });

      describe('when set', () => {
        it('input is checked', () => {
          const testCase = TestCaseFactory.createFromElement(
            <CheckBox id="id" checked />
          );
          expect(testCase.first('input').checked).toBe(true);
        });
      });
    });

    describe('isError', () => {
      describe('when not set', () => {
        it('doesn\'t add the appropriate class', () => {
          const props = {
            isError: false,
          };
          const testCase = TestCaseFactory.create(CheckBox, props);
          expect(
            testCase.first('label').className
          ).not.toContain('checkBox__label--error');
        });
      });

      describe('when set', () => {
        it('adds the appropriate class', () => {
          const props = {
            isError: true,
          };
          const testCase = TestCaseFactory.create(CheckBox, props);
          expect(
            testCase.first('label').className
          ).toContain('checkBox__label--error');
        });
      });
    });

    describe('isReadonly', () => {
      describe('when not set', () => {
        it('input is not disabled', () => {
          const testCase = TestCaseFactory.createFromElement(
            <CheckBox id="id" />
          );
          expect(testCase.first('input').disabled).toBe(false);
        });
      });

      describe('when set', () => {
        const props = {
          id: 'id',
          data: {},
          isReadonly: true,
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(CheckBox, props);

        it('input is disabled', () => {
          expect(testCase.first('input').disabled).toBe(true);
        });

        it('doesn\'t call onClick', () => {
          const input = testCase.first('input');
          testCase.trigger('change', input);
          expect(props.onClick).not.toHaveBeenCalled();
        });
      });
    });

    describe('onClick', () => {
      let props;

      beforeEach(() => {
        props = {
          id: 'id',
          data: {},
          checked: true,
          onClick: jasmine.createSpy('onClick'),
        };

        const testCase = TestCaseFactory.create(CheckBox, props);
        const input = testCase.first('input');
        testCase.trigger('change', input);
      });

      it('is called once when the checkbox changes', () => {
        expect(props.onClick).toHaveBeenCalled();
        expect(props.onClick.calls.count()).toEqual(1);
      });

      it('is called with checked state, id, and data', () => {
        expect(props.onClick).toHaveBeenCalledWith(
          props.checked,
          props.id,
          props.data
        );
      });
    });
  });

  describe('useIcons', () => {
    describe('when not set', () => {
      it('renders a check box with a tick', () => {
        const props = {
          useIcons: false,
        };
        const testCase = TestCaseFactory.create(CheckBox, props);
        expect(testCase.dom.className).toContain('checkBox--tick');
      });
    });

    describe('when set', () => {
      it('renders a check box with an icon', () => {
        const props = {
          useIcons: true,
        };
        const testCase = TestCaseFactory.create(CheckBox, props);
        expect(testCase.dom.className).toContain('checkBox--icon');
      });
    });
  });
});
