
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import GridIcon from './GridIcon.jsx';

describe('GridIcon', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="child" />,
        };
        const testCase =
          TestCaseFactory.createFromFunction(GridIcon, props);
        expect(testCase.first('#child')).toBeDefined();
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase =
          TestCaseFactory.createFromFunction(GridIcon, {onClick});

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
