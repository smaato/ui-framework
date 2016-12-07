
import { TestCaseFactory } from 'react-test-kit';
import SearchBox from './SearchBox.jsx';

describe('SearchBox', () => {
  describe('Props', () => {
    describe('defaultValue', () => {
      it('is applied to input element', () => {
        const props = {
          defaultValue: 'Default value',
          onSearch: () => undefined,
        };

        const testCase = TestCaseFactory.create(SearchBox, props);
        const input = testCase.first('input');
        expect(input.value).toEqual(props.defaultValue);
      });
    });

    describe('isFullWidth', () => {
      it('applies the appropriate class to the input element', () => {
        const props = {
          isFullWidth: true,
          onSearch: () => undefined,
        };

        const testCase = TestCaseFactory.create(SearchBox, props);
        const input = testCase.first('input');
        expect(
          input.getAttribute('class')
        ).toContain('searchBox__input--fullWidth');
      });
    });

    describe('onSearch', () => {
      describe('when isImmediate is false', () => {
        it('is called when the user hits Enter', () => {
          const props = {
            isImmediate: false,
            onSearch: jasmine.createSpy('onSearch'),
          };

          const testCase = TestCaseFactory.create(SearchBox, props);
          expect(props.onSearch).not.toHaveBeenCalled();

          const input = testCase.first('input');
          testCase.trigger('keyUp', input, { key: 'Enter' });
          expect(props.onSearch).toHaveBeenCalled();
        });

        it('is not called when the user hits any key but Enter', done => {
          const props = {
            isImmediate: false,
            onSearch: jasmine.createSpy('onSearch'),
            timeout: 0,
          };

          const testCase = TestCaseFactory.create(SearchBox, props);
          expect(props.onSearch).not.toHaveBeenCalled();

          const input = testCase.first('input');
          testCase.trigger('keyUp', input, { key: '' });
          setTimeout(() => {
            expect(props.onSearch).not.toHaveBeenCalled();
            done();
          }, props.timeout);
        });
      });

      describe('when isImmediate is true', () => {
        it('is called when the user hits any key', done => {
          const props = {
            isImmediate: true,
            onSearch: jasmine.createSpy('onSearch'),
            timeout: 0,
          };

          const testCase = TestCaseFactory.create(SearchBox, props);
          expect(props.onSearch).not.toHaveBeenCalled();

          const input = testCase.first('input');
          testCase.trigger('keyUp', input, { key: '' });
          setTimeout(() => {
            expect(props.onSearch).toHaveBeenCalled();
            done();
          }, props.timeout);
        });
      });
    });

    describe('placeholder', () => {
      it('is applied to input element', () => {
        const props = {
          onSearch: () => undefined,
          placeholder: 'Placeholder text',
        };

        const testCase = TestCaseFactory.create(SearchBox, props);
        const input = testCase.first('input');
        expect(input.getAttribute('placeholder')).toEqual(props.placeholder);
      });
    });

    describe('timeout', () => {
      it('throttles execution of onSearch', done => {
        const props = {
          isImmediate: true,
          onSearch: jasmine.createSpy('onSearch'),
          timeout: 100,
        };

        const testCase = TestCaseFactory.create(SearchBox, props);
        expect(props.onSearch).not.toHaveBeenCalled();

        const input = testCase.first('input');
        testCase.trigger('keyUp', input, { key: '' });
        testCase.trigger('keyUp', input, { key: '' });
        testCase.trigger('keyUp', input, { key: '' });
        setTimeout(() => {
          expect(props.onSearch.calls.count()).toBe(1);
          done();
        }, props.timeout);
      });
    });
  });
});
