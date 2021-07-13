import { TestCaseFactory } from 'react-test-kit';
import SearchableMultipleSelectFilterForm
  from './SearchableMultipleSelectFilterForm.jsx';
import { Filter, FilterOption, OneOfOption } from '../../services';

describe('SearchableMultipleSelectFilterForm', () => {
  const options = [
    new OneOfOption('Active', 'Running'),
    new OneOfOption('Stopped', 'Paused'),
    new OneOfOption('Archived', 'Archive'),
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

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

      expect(testCase.element.options).toBe(options);
      testCase.element.state.selectedOptions.forEach((value) => {
        expect(value).toBe(false);
      });
    });

    it('renders searchbox', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

      expect(testCase.find('.searchBox__input')).toBeDefined();
    });

    it('renders a button', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

      expect(testCase.find('button')[0]).toBeDefined();
    });

    it('button is disabled', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

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
          TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

        expect(
          testCase.dom.className
        ).toBe('filterForm filterForm--multiSelect');

        expect(
          testCase.find('.filterForm--multiSelect__checkbox').length
        ).toBe(3);

        options.forEach((option) => {
          expect(testCase.find(
            `.filterForm--multiSelect__checkbox:contains(${option.value})`
          ).length).toBe(0);
          expect(testCase.find(
            `.filterForm--multiSelect__checkbox:contains(${option.label})`
          ).length).toBe(1);
        });
      });
    });

    describe('onAddFilter', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };

        const testCase =
          TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

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

  describe('searching', () => {
    it('only render filtered items', (done) => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
        timeout: 0,
      };

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);

      const input = testCase.first('.searchBox__input');
      input.value = 'running';

      expect(testCase.find('input[type=checkbox]').length).toBe(3);

      testCase.trigger('change', input);
      testCase.trigger('keyUp', input, { key: 'Enter' });

      setTimeout(() => {
        const checkbox = testCase.first('.filterForm--multiSelect__checkbox');
        expect(testCase.find('input[type=checkbox]').length).toBe(1);
        expect(checkbox.textContent).toBe('Running');

        done();
      }, props.timeout);
    });
  });

  describe('selected options', () => {
    it('are changed when a checkbox is clicked', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);
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

      const testCase
        = TestCaseFactory.create(SearchableMultipleSelectFilterForm, props);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
      testCase.trigger('click', testCase.find('button')[0]);

      const filter = props.onAddFilter.calls.argsFor(0)[0];

      expect(filter.comparisonValue.length).toBe(2);
      filter.comparisonValue.forEach((comparisonValueItem, index) => {
        expect(
          filter.comparisonValue[index]
        ).toBe(filterOption.comparisonParameters.oneOfOptions[index]);
      });
    });
  });
});
