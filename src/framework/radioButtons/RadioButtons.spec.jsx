
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';

import RadioButtons from './RadioButtons.jsx';
import RadioButtonItem from '../radioButtonItem/RadioButtonItem.jsx';
import Text from '../text/Text.jsx';

describe('RadioButtons', () => {
  let props;

  beforeEach(() => {
    const elements = [
      {
        label: 'Label 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        value: 'value-2',
      },
    ];

    const elementProvider = (element, onSelect) => (
      <RadioButtonItem
        element={element}
        isActive={elements[0] === element}
        onSelect={onSelect}
      >
        <Text>{element.label}</Text>
      </RadioButtonItem>
    );

    props = {
      className: '',
      elementProvider:
        jasmine.createSpy('elementProvider').and.callFake(elementProvider),
      elements,
      onSelect: jasmine.createSpy('onSelect'),
    };
  });

  describe('Props', () => {
    describe('elements', () => {
      it('should render the parent correctly', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);
        expect(testCase.dom.className).toEqual('radioButtons');
      });

      it('should render the children correctly', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);
        expect(testCase.find('.radioButtonItem--element').length).toEqual(2);
      });
    });

    describe('className', () => {
      it('should render the parent with the extra class correctly', () => {
        props.className = 'test';
        const testCase = TestCaseFactory.create(RadioButtons, props);
        expect(testCase.dom.className).toEqual('radioButtons test');
      });
    });
  });

  describe('Actions', () => {
    describe('upon selecting an option', () => {
      it('the callback is called with the right value', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);

        const secondOption =
          testCase.find('.radioButtonItem--element')[1];
        testCase.trigger('click', secondOption);

        expect(props.onSelect).toHaveBeenCalledWith(props.elements[1]);
      });
    });
  });
});
