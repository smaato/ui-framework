
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import SummaryControl from './SummaryControl.jsx';

describe('SummaryControl', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(SummaryControl, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('icon', () => {
      it('is rendered', () => {
        const props = {
          icon: <div id="icon">icon</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(SummaryControl, props);
        expect(testCase.first('#icon').textContent).toBe('icon');
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const props = {
          onClick,
        };

        const testCase =
          TestCaseFactory.createFromFunction(SummaryControl, props);

        testCase.trigger('click');
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // React ID
        );
      });
    });
  });
});
