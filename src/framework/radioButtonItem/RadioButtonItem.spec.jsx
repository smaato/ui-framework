
import { TestCaseFactory } from 'react-test-kit';

import RadioButtonItem from './RadioButtonItem.jsx';

describe('RadioButtonItem', () => {
  let props;

  beforeEach(() => {
    props = {
      element: {
        label: 'Label 1',
        value: 'value-1',
      },
      index: 0,
      isActive: false,
      name: 'test-name',
      onSelect: jasmine.createSpy('onSelect'),
    };
  });

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(RadioButtonItem, props);
        expect(testCase.first('.text').textContent).toBe(props.element.label);
      });
    });

    describe('element', () => {
      it('should render correctly', () => {
        const testCase = TestCaseFactory.create(RadioButtonItem, props);
        expect(testCase.dom.className).toEqual('radioButtonItem--element');
      });
    });

    describe('isActive', () => {
      describe('when false', () => {
        it('should render correctly', () => {
          const testCase = TestCaseFactory.create(RadioButtonItem, props);
          expect(
            testCase.find('.radioButtonItem--inputRadioButton-active').length
          ).toEqual(0);
        });
      });

      describe('when true', () => {
        it('should render correctly', () => {
          props.isActive = true;
          const testCase = TestCaseFactory.create(RadioButtonItem, props);
          expect(
            testCase.find('.radioButtonItem--inputRadioButton-active').length
          ).toEqual(1);
        });
      });
    });
  });

  describe('Actions', () => {
    describe('upon selecting the item by clicking on the radio icon', () => {
      it('the callback is called with the right value', () => {
        const testCase = TestCaseFactory.create(RadioButtonItem, props);
        const item = testCase.find('.radioButtonItem--inputRadioButton')[0];
        testCase.trigger('click', item);

        expect(props.onSelect).toHaveBeenCalledWith(props.index);
      });
    });

    describe('upon selecting the item by clicking on the label', () => {
      it('the callback is called with the right value', () => {
        const testCase = TestCaseFactory.create(RadioButtonItem, props);
        const item = testCase.find('.radioButtonItem--label')[0];
        testCase.trigger('click', item);

        expect(props.onSelect).toHaveBeenCalledWith(props.index);
      });
    });
  });
});
