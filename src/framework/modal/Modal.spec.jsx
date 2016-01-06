
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Modal from './Modal.jsx';

describe('Modal', () => {
  describe('Props', () => {
    describe('header', () => {
      it('is rendered', () => {
        const props = {
          header: <div id="header">header</div>,
          body: <div id="body">body</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Modal, props);
        expect(testCase.first('#header').textContent).toBe('header');
      });
    });

    describe('body', () => {
      it('is rendered', () => {
        const props = {
          body: <div id="body">body</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Modal, props);
        expect(testCase.first('#body').textContent).toBe('body');
      });
    });

    describe('footer', () => {
      it('is rendered', () => {
        const props = {
          body: <div id="body">body</div>,
          footer: <div id="footer">footer</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Modal, props);
        expect(testCase.first('#footer').textContent).toBe('footer');
      });
    });
  });
});
