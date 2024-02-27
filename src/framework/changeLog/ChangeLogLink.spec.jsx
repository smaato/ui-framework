
import React from 'react';

import { TestCaseFactory } from 'react-test-kit';

import ChangeLogLink from './ChangeLogLink.jsx';

describe('ChangeLogLink', () => {
  describe('Props', () => {
    describe('onClick', () => {
      it('is called when the button is clicked', () => {
        const props = {
          changes: [],
          onClick: jasmine.createSpy(),
        };

        const testCase = TestCaseFactory.createFromElementWithWrapper(
          <ChangeLogLink {...props} />
        );

        testCase.trigger('click', testCase.first('.button--hollow'));

        expect(props.onClick).toHaveBeenCalled();
      });
    });
  });
});
