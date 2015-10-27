
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import CheckBox from './CheckBox.jsx';

describe('CheckBox', () => {
  describe('DOM structure', () => {
    it('span contains input and label', () => {
      const testCase = TestCaseFactory.createFromElement(<CheckBox />);
      expect(testCase.dom.tagName).toBe('SPAN');
      expect(testCase.dom.children[0].tagName).toBe('INPUT');
      expect(testCase.dom.children[1].tagName).toBe('LABEL');
    });
  });

  describe('Props', () => {
    describe('id', () => {
      describe('when not set', () => {
        it('input "id" and "name" as well as label "for" attributes are non-existent', () => {
          const testCase = TestCaseFactory.createFromElement(<CheckBox />);
          expect(testCase.first('input').getAttribute('id')).toBe(null);
          expect(testCase.first('input').getAttribute('name')).toBe(null);
          expect(testCase.first('label').getAttribute('for')).toBe(null);
        });
      });

      describe('when set', () => {
        it('input "id" and "name" as well as label "for" attributes are set', () => {
          const testCase = TestCaseFactory.createFromElement(<CheckBox id="good-id" />);
          expect(testCase.first('input').getAttribute('id')).toBe('good-id');
          expect(testCase.first('input').getAttribute('name')).toBe('good-id');
          expect(testCase.first('label').getAttribute('for')).toBe('good-id');
        });
      });
    });
  });
});
