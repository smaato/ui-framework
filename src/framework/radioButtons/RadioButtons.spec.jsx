
import { TestCaseFactory } from 'react-test-kit';

import RadioButtons from './RadioButtons.jsx';

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

    props = {
      elements,
      selectedElement: elements[0],
      onSelect: jasmine.createSpy('onSelect'),
      className: 'radioButtons',
    };
  });

  describe('Props', () => {
    describe('radio buttons', () => {
      it('are rendered', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);
        expect(
          testCase.find('.radioButtons--element').length
        ).toEqual(2);
      });
    });
  });

  describe('Actions', () => {
    describe('upon clicking of a option', () => {
      it('the callback is called with the right value', () => {
        const testCase = TestCaseFactory.create(RadioButtons, props);

        const secondOption =
          testCase.find('.radioButtons--element')[1];
        testCase.trigger('click', secondOption);

        expect(props.onSelect).toHaveBeenCalledWith(props.elements[1].value);
      });
    });
  });
});
