
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import BaseDropdownOption from './BaseDropdownOption.jsx';

describe('BaseDropdownOption', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test" />,
          onClick: () => undefined,
          onMouseOver: () => undefined,
        };

        const testCase = TestCaseFactory.create(BaseDropdownOption, props);
        expect(testCase.first('#test')).toBeDefined();
      });
    });

    describe('onClick', () => {
      it('is called with the option when the mouse is pressed down', () => {
        const props = {
          option: {},
          onClick: jasmine.createSpy('onClick'),
          onMouseOver: () => undefined,
        };

        const testCase = TestCaseFactory.create(BaseDropdownOption, props);
        testCase.trigger('mouseDown');
        expect(props.onClick).toHaveBeenCalledWith(props.option);
      });
    });

    describe('onMouseOver', () => {
      it('is called with the index when the mouse moves', () => {
        const props = {
          index: 1,
          onClick: () => undefined,
          onMouseOver: jasmine.createSpy('onMouseOver'),
        };

        const testCase = TestCaseFactory.create(BaseDropdownOption, props);
        testCase.trigger('mouseMove');
        expect(props.onMouseOver).toHaveBeenCalledWith(props.index);
      });
    });

    describe('hasFocus', () => {
      it('applies the appropriate class', () => {
        const props = {
          hasFocus: true,
          onClick: () => undefined,
          onMouseOver: () => undefined,
        };

        const testCase = TestCaseFactory.create(BaseDropdownOption, props);
        expect(testCase.dom.className)
          .toContain(BaseDropdownOption.defaultProps.focusClasses);
      });
    });
  });
});
