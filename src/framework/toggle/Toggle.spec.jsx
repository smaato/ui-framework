
import { TestCaseFactory } from 'react-test-kit';
import ReactToggle from 'react-toggle';

import Toggle from './Toggle.jsx';

describe('Toggle', () => {
  describe('DOM structure', () => {
    it('is a ReactToggle', () => {
      const props = {
        onChange: () => undefined,
      };

      const testCase = TestCaseFactory.create(Toggle, props);
      expect(testCase.findComponents(ReactToggle)).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('checked', () => {
      it('when true toggle is checked', () => {
        const props = {
          checked: true,
          onChange: () => undefined,
        };

        const testCase = TestCaseFactory.create(Toggle, props);
        expect(testCase.dom.className).toContain('react-toggle--checked');
      });

      it('when false toggle isn\'t checked', () => {
        const props = {
          checked: false,
          onChange: () => undefined,
        };

        const testCase = TestCaseFactory.create(Toggle, props);
        expect(testCase.dom.className).not.toContain('react-toggle--checked');
      });
    });

    describe('onChange', () => {
      it('is called when toggle is clicked', () => {
        const props = {
          onChange: jasmine.createSpy('onChange'),
        };

        const testCase = TestCaseFactory.create(Toggle, props);
        testCase.trigger('change', testCase.first('input'));
        expect(props.onChange).toHaveBeenCalled();
      });
    });
  });
});
