
import { TestCaseFactory } from 'react-test-kit';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';
import {
  Filter,
  FilterOption,
  OneOfOption,
} from '../../services';

fdescribe('MultipleSelectFilterForm', () => {
  const options = [
    new OneOfOption('Active'),
    new OneOfOption('Archived'),
    new OneOfOption('Stopped'),
  ];
  const filterOption = new FilterOption({
    name: 'testFilterOption',
    comparisonParameters: {
      oneOfOptions: options,
    },
  });

  describe('initial state', () => {
    it('has options unselected', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MultipleSelectFilterForm, props);

      expect(testCase.element.options).toBe(options);
      testCase.element.state.selectedOptions.forEach((value) => {
        expect(value).toBe(false);
      });
    });

    it('renders a button', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MultipleSelectFilterForm, props);

      expect(testCase.find('button')[0]).toBeDefined();
    });

    it('button is disabled', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MultipleSelectFilterForm, props);

      expect(
        testCase.find('button')[0].className
      ).toContain('is-button-disabled');
    });
  });

  describe('Props', () => {
    describe('filterOption', () => {
      it('options are rendered', () => {
        const props = {
          filterOption,
          onAddFilter: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(MultipleSelectFilterForm, props);

        expect(
          testCase.dom.className
        ).toBe('filterForm filterForm--multiSelect');

        expect(
          testCase.find('.filterForm--multiSelect__checkbox').length
        ).toBe(3);

        options.forEach((option) => {
          expect(testCase.find(
            `.filterForm--multiSelect__checkbox:contains(${option.value})`
          ).length).toBe(1);
        });
      });
    });

    it('options has different value and label ', () => {
      const optionsLabel = [
        new OneOfOption('Active', 'Running'),
        new OneOfOption('Stopped', 'Paused'),
      ];
      const filterOptionLabel = new FilterOption({
        name: 'testFilterOptionLabel',
        comparisonParameters: {
          oneOfOptions: optionsLabel,
        },
      });
      const propsLabel = {
        filterOption: filterOptionLabel,
        onAddFilter: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(MultipleSelectFilterForm, propsLabel);

      optionsLabel.forEach((option) => {
        expect(testCase.dom.textContent).not.toContain(option.value);
        expect(testCase.dom.textContent).toContain(option.label);
      });
    });

    describe('onAddFilter', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };

        const testCase =
          TestCaseFactory.create(MultipleSelectFilterForm, props);

        expect(props.onAddFilter).not.toHaveBeenCalled();
        testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
        testCase.trigger('click', testCase.find('button')[0]);
        expect(props.onAddFilter).toHaveBeenCalled();

        const filter = props.onAddFilter.calls.argsFor(0)[0];
        expect(filter instanceof Filter).toBe(true);

        expect(filter.filterOption).toBe(props.filterOption);
        expect(filter.comparisonValue.length).toBe(1);
      });
    });
  });

  describe('selected options', () => {
    it('are changed when a checkbox is clicked', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MultipleSelectFilterForm, props);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
      testCase.element.state.selectedOptions.forEach((value, index) => {
        if (index === 1) {
          expect(value).toBe(true);
        } else {
          expect(value).toBe(false);
        }
      });
    });
    it('are correctly passed to Filter', () => {
      const props = {
        filterOption,
        onAddFilter: jasmine.createSpy('onAddFilter'),
      };

      const testCase = TestCaseFactory.create(MultipleSelectFilterForm, props);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
      testCase.trigger('click', testCase.find('button')[0]);

      const filter = props.onAddFilter.calls.argsFor(0)[0];

      expect(filter.comparisonValue.length).toBe(2);
      expect(filter.comparisonValue.filter(e => e.name === 'Active').length
        ).not.toBe(-1);
      expect(filter.comparisonValue.filter(e => e.name === 'Archived').length
        ).not.toBe(-1);
    });
  });
});
