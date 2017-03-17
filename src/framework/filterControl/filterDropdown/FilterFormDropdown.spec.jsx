
import { TestCaseFactory } from 'react-test-kit';
import FilterFormDropdown from './FilterFormDropdown.jsx';

import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

import FilterForm from '../forms/FilterForm.jsx';

fdescribe('FilterFormDropdown', () => {
  const defaultProps = {
    filterOption: new FilterOption({
      name: 'Test filter option name',
      comparisonType: ComparisonTypes.CONTAINS,
      getValue: () => undefined,
    }),
    onAddFilter: () => undefined,
    onBackButtonClick: () => undefined,
  };

  describe('Props', () => {
    describe('filterOption', () => {
      it('name is displayed', () => {
        const props = Object.assign({}, defaultProps);

        const testCase = TestCaseFactory.create(FilterFormDropdown, props);

        expect(
          testCase.first('.filterFormDropdown__form__header__title').textContent
        ).toEqual(props.filterOption.name);
      });

      it('is passed to FilterForm', () => {
        const props = Object.assign({}, defaultProps);

        const testCase = TestCaseFactory.create(FilterFormDropdown, props);

        expect(
          testCase.firstComponent(FilterForm).props.filterOption
        ).toEqual(props.filterOption);
      });
    });

    describe('onAddFilter', () => {
      it('is passed to FilterForm', () => {
        const props = Object.assign({}, defaultProps);

        const testCase = TestCaseFactory.create(FilterFormDropdown, props);

        expect(
          testCase.firstComponent(FilterForm).props.onAddFilter
        ).toEqual(props.onAddFilter);
      });
    });

    describe('onBackButtonClick', () => {
      it('is called when back button is clicked', () => {
        const props = Object.assign({}, defaultProps, {
          onBackButtonClick: jasmine.createSpy('onBackButtonClick'),
        });

        const testCase = TestCaseFactory.create(FilterFormDropdown, props);

        expect(props.onBackButtonClick).not.toHaveBeenCalled();
        const backButton = testCase.first(
          '.filterFormDropdown__form__header__backButton');
        testCase.trigger('click', backButton);
        expect(props.onBackButtonClick).toHaveBeenCalled();
      });
    });
  });
});
