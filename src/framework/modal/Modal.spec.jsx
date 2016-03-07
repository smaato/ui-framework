
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Modal from './Modal.jsx';

describe('Modal', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Modal);

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div className="child">test</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Modal, props);
        expect(testCase.find('.child')[0].textContent).toBe('test');
      });
    });
  });
});
