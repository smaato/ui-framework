
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import TitleBar from './TitleBar.jsx';

describe('TitleBar', () => {
  describe('Props', () => {
    describe('label', () => {
      it('is rendered', () => {
        const props = {
          label: 'title',
        };
        const testCase = TestCaseFactory.create(TitleBar, props);
        expect(testCase.dom.textContent).toBe(props.label);
      });
    });

    describe('buttons', () => {
      it('are rendered', () => {
        const props = {
          buttons: [
            <div>button</div>,
          ],
        };
        const testCase = TestCaseFactory.create(TitleBar, props);
        expect(testCase.dom.textContent).toBe('button');
      });
    });
  });
});
