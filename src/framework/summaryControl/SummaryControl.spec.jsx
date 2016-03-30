
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import SummaryControl from './SummaryControl.jsx';

describe('SummaryControl', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(SummaryControl);

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.create(
          SummaryControl,
          props
        );
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('type', () => {
      Object.keys(SummaryControl.TYPE).forEach(type => {
        describe(`${type}`, () => {
          it('renders an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(SummaryControl, props);
            // There is already 1 icon that will always be rendered.
            expect(testCase.find('.icon').length).toBe(2);
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(SummaryControl);
        // There is already 1 icon that will always be rendered.
        expect(testCase.find('.icon').length).toBe(1);
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');
        const props = {
          onClick,
        };
        const testCase = TestCaseFactory.create(SummaryControl, props);
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
