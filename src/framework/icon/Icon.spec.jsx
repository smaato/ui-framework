
import React from 'react';
import TestCase from '../../test/TestCase.js';
import Icon from './../icon/Icon.jsx';

describe('Icon', () => {
  describe('DOM structure', () => {
    it('is one span element', () => {
      const testCase = new TestCase(<Icon className="" />);
      expect(testCase.dom.tagName).toBe('SPAN');
      expect(testCase.dom.getAttribute('class')).toBe('icon');
    });
  });

  describe('Props', () => {
    describe('className', () => {
      it('is rendered', () => {
        const testCase = new TestCase(<Icon className="test" />);
        expect(testCase.dom.getAttribute('class')).toContain('test');
      });
    });
  });
});
