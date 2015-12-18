
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
        it('is applied to the input\'s id and name attributes, and label\'s for attribute', () => {
          const testCase = TestCaseFactory.createFromElement(<CheckBox id="good-id" />);
          expect(testCase.first('input').getAttribute('id')).toBe('good-id');
          expect(testCase.first('input').getAttribute('name')).toBe('good-id');
          expect(testCase.first('label').getAttribute('for')).toBe('good-id');
        });
      });
    });

    describe('checked', () => {
      describe('when not set', () => {
        it('input is not checked', () => {
          const testCase = TestCaseFactory.createFromElement(<CheckBox id="id" />);
          expect(testCase.first('input').checked).toBe(false);
        });
      });

      describe('when set', () => {
        it('to true input is checked', () => {
          const testCase = TestCaseFactory.createFromElement(
            <CheckBox id="id" checked />
          );
          expect(testCase.first('input').checked).toBe(true);
        });
      });

      describe('when set', () => {
        it('to false input is unchecked', () => {
          const testCase = TestCaseFactory.createFromElement(
            <CheckBox id="id" checked={false} />
          );
          expect(testCase.first('input').checked).toBe(false);
        });
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase = TestCaseFactory.createFromElement(
          <CheckBox
            id="id"
            onClick={onClick}
          />
        );

        const input = testCase.first('input');

        testCase.trigger('click', input);
      });

      it('is called when checked state is changed', () => {
        expect(onClick).toHaveBeenCalled();
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // Virtual DOM's 'data-reactid' attribute
        );
      });
    });
  });
});
