
import React from 'react';
import TestCase from '../../test/TestCase.js';
import CheckBox from './CheckBox.jsx';

describe('CheckBox', () => {
  describe('DOM structure', () => {
    it('span contains input and label', () => {
      const testCase = new TestCase(<CheckBox />);
      expect(testCase.dom.tagName).toBe('SPAN');
      expect(testCase.dom.children[0].tagName).toBe('INPUT');
      expect(testCase.dom.children[1].tagName).toBe('LABEL');
    });
  });

  describe('Props', () => {
    describe('id', () => {
      describe('when not set', () => {
        it('input "id" and "name" as well as label "for" attributes are non-existent', () => {
          const testCase = new TestCase(<CheckBox />);
          expect(testCase.first('input').getAttribute('id')).toBe(null);
          expect(testCase.first('input').getAttribute('name')).toBe(null);
          expect(testCase.first('label').getAttribute('for')).toBe(null);
        });
      });

      describe('when set', () => {
        it('input "id" and "name" as well as label "for" attributes are set', () => {
          const testCase = new TestCase(<CheckBox id="good-id" />);
          expect(testCase.first('input').getAttribute('id')).toBe('good-id');
          expect(testCase.first('input').getAttribute('name')).toBe('good-id');
          expect(testCase.first('label').getAttribute('for')).toBe('good-id');
        });
      });
    });

    describe('class props', () => {
      describe('when not set', () => {
        it('elements have default classes', () => {
          const testCase = new TestCase(<CheckBox id="" />);
          expect(testCase.dom.getAttribute('class')).toBe('checkboxWrapper');
          expect(testCase.first('input').getAttribute('class')).toBe('checkbox__input');
          expect(testCase.first('label').getAttribute('class')).toBe('checkbox__faux__input');
        });
      });

      describe('when set', () => {
        it('classes are passed to corresponding elements', () => {
          const testCase = new TestCase(
            <CheckBox
              id=""
              classWrapper="classWrapper"
              classInput="classInput"
              classLabel="classLabel"
            />
          );
          expect(testCase.dom.getAttribute('class')).toContain('classWrapper');
          expect(testCase.first('input').getAttribute('class')).toContain('classInput');
          expect(testCase.first('label').getAttribute('class')).toContain('classLabel');
        });
      });
    });
  });
});
