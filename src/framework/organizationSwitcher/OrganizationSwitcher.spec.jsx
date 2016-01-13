
import { TestCaseFactory } from 'react-test-kit';
import OrganizationSwitcher from './OrganizationSwitcher.jsx';
import SearchBox from '../searchBox/SearchBox.jsx';

describe('OrganizationSwitcher', () => {
  describe('Props', () => {
    describe('title', () => {
      it('is rendered into the title component', () => {
        const props = {
          title: 'Title text',
        };

        const testCase = TestCaseFactory.createFromFunction(OrganizationSwitcher, props);
        const titleEl = testCase.first('.organizationSwitcher__title');
        expect(titleEl.textContent).toContain(props.title);
      });
    });

    describe('searchPrompt', () => {
      it('is applied to input element', () => {
        const props = {
          onSearch: () => {},
          searchPrompt: 'Search placeholder',
        };

        const testCase = TestCaseFactory.createFromFunction(OrganizationSwitcher, props);
        const inputEl = testCase.first('input');
        expect(inputEl.getAttribute('placeholder')).toBe(props.searchPrompt);
      });
    });

    describe('onClose', () => {
      it('is called when the close button is clicked', () => {
        const props = {
          onClose: jasmine.createSpy('onClose'),
        };

        const testCase = TestCaseFactory.createFromFunction(OrganizationSwitcher, props);
        expect(props.onClose).not.toHaveBeenCalled();
        const closeButtonEl = testCase.first('.organizationSwitcher__closeButton');
        testCase.trigger('click', closeButtonEl);
        expect(props.onClose).toHaveBeenCalled();
      });
    });

    describe('onSearch', () => {
      it('creates a SearchBox component when present', () => {
        const props = {
          onSearch: () => {},
        };

        const testCase = TestCaseFactory.createFromFunction(OrganizationSwitcher, props);
        const searchBox = testCase.findComponents(SearchBox);
        expect(searchBox.length).toBe(1);
      });

      it('doesn\'t create a SearchBox component when not present', () => {
        const testCase = TestCaseFactory.createFromFunction(OrganizationSwitcher);
        const searchBox = testCase.findComponents(SearchBox);
        expect(searchBox.length).toBe(0);
      });
    });
  });
});
