
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import LabeledControl from './LabeledControl.jsx';

describe('LabeledControl', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children: <div id="test" />,
        };

        const testCase =
          TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.first('#test')).toBeDefined();
      });
    });

    describe('label', () => {
      it('becomes the textContent of the label element', () => {
        const props = {
          label: 'Test',
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.first('label').textContent).toBe(props.label);
      });
    });

    describe('layout', () => {
      // TODO: This test should pass but doesn't. We need to look into this.
      // There seems to be a bug with testing functions with defaultProp.
      // This may be a React bug or a problem with react-test-kit.
      // it('applies the class for ONE_THIRD by default', () => {
      //   const testCase = TestCaseFactory.createFromFunction(LabeledControl);
      //   expect(testCase.dom.getAttribute('class')
      //     .indexOf('labeledControl--oneThird') !== -1).toBe(true);
      // });

      it('applies the class for TWO_FIFTHS when specified', () => {
        const props = {
          layout: LabeledControl.LAYOUT.TWO_FIFTHS,
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('labeledControl--twoFifths') !== -1).toBe(true);
      });

      it('applies the class for ONE_THIRD when specified', () => {
        const props = {
          layout: LabeledControl.LAYOUT.ONE_THIRD,
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('labeledControl--oneThird') !== -1).toBe(true);
      });

      it('applies the class for ONE_FOURTH when specified', () => {
        const props = {
          layout: LabeledControl.LAYOUT.ONE_FOURTH,
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('labeledControl--oneFourth') !== -1).toBe(true);
      });

      it('applies the class for ONE_FIFTH when specified', () => {
        const props = {
          layout: LabeledControl.LAYOUT.ONE_FIFTH,
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('labeledControl--oneFifth') !== -1).toBe(true);
      });

      it('applies the class for ONE_SIXTH when specified', () => {
        const props = {
          layout: LabeledControl.LAYOUT.ONE_SIXTH,
        };

        const testCase = TestCaseFactory.createFromFunction(LabeledControl, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('labeledControl--oneSixth') !== -1).toBe(true);
      });
    });
  });
});
