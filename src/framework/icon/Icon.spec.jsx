
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Icon from './../icon/Icon.jsx';

describe('Icon', () => {
  describe('DOM structure', () => {
    it('is one span element', () => {
      const testCase = TestCaseFactory.createFromElement(<Icon className="" />);
      expect(testCase.dom.tagName).toBe('SPAN');
      expect(testCase.dom.getAttribute('class')).toBe('icon');
    });
  });

  describe('Props', () => {
    describe('className', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.createFromElement(<Icon className="test" />);
        expect(testCase.dom.getAttribute('class')).toContain('test');
      });
    });
  });
});
