
import { TestCaseFactory } from 'react-test-kit';

import RadioButtons from './RadioButtons.jsx';

fdescribe('RadioButtons', () => {
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

    props = {
      elements,
      selectedElement: 0,
      onSelect: jasmine.createSpy('onSelect'),
      className: '',
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
  });

  describe('Actions', () => {
    describe('upon selecting an option', () => {
      it('the callback is called with the right value', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);

        const secondOption =
          testCase.find('.radioButtonItem--element')[1];
        testCase.trigger('click', secondOption);

        expect(props.onSelect).toHaveBeenCalledWith(1);
      });
    });
  });
});
