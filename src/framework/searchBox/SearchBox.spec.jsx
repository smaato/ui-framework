
import { TestCaseFactory } from 'react-test-kit';
import SearchBox from './SearchBox.jsx';

describe('SearchBox', () => {
  describe('Props', () => {
    describe('onSearch', () => {
      it('is called when the user hits Enter', () => {
        const props = {
          onSearch: jasmine.createSpy('onSearch'),
        };

        const testCase = TestCaseFactory.createFromClass(SearchBox, props);
        expect(props.onSearch).not.toHaveBeenCalled();

        const input = testCase.first('input');
        testCase.trigger('keyUp', input, {key: 'Enter'});
        expect(props.onSearch).toHaveBeenCalled();
      });

      it('is not called when the user hits non-Enter and isImmediate is false', () => {
        const props = {
          onSearch: jasmine.createSpy('onSearch'),
        };

        const testCase = TestCaseFactory.createFromClass(SearchBox, props);
        expect(props.onSearch).not.toHaveBeenCalled();

        const input = testCase.first('input');
        testCase.trigger('keyUp', input, {key: ''});
        expect(props.onSearch).not.toHaveBeenCalled();
      });

      it('is called when the user hits non-Enter and isImmediate is true', () => {
        const props = {
          onSearch: jasmine.createSpy('onSearch'),
          isImmediate: true,
        };

        const testCase = TestCaseFactory.createFromClass(SearchBox, props);
        expect(props.onSearch).not.toHaveBeenCalled();

        const input = testCase.first('input');
        testCase.trigger('keyUp', input, {key: ''});
        expect(props.onSearch).toHaveBeenCalled();
      });
    });

    describe('placeholder', () => {
      it('is applied to input element', () => {
        const props = {
          onSearch: () => {},
          placeholder: 'Placeholder text',
        };

        const testCase = TestCaseFactory.createFromClass(SearchBox, props);
        const input = testCase.first('input');
        expect(input.getAttribute('placeholder')).toEqual(props.placeholder);
      });
    });

    describe('isFullWidth', () => {
      it('applies the appropriate class to the input element', () => {
        const props = {
          onSearch: () => {},
          isFullWidth: true,
        };

        const testCase = TestCaseFactory.createFromClass(SearchBox, props);
        const input = testCase.first('input');
        expect(input.getAttribute('class')).toContain('searchBox__input--fullWidth');
      });
    });
  });
});
