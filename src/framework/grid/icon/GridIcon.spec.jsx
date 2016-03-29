
import { TestCaseFactory } from 'react-test-kit';
import GridIcon from './GridIcon.jsx';

describe('GridIcon', () => {
  describe('Props', () => {
    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const props = {
          onClick,
        };

        const testCase =
          TestCaseFactory.createFromFunction(GridIcon, props);

        testCase.trigger('click');
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // React ID
        );
      });
    });

    describe('type', () => {
      Object.keys(GridIcon.TYPE).forEach(type => {
        describe(`${type}`, () => {
          it('renders an icon', () => {
            const props = {
              type,
            };
            const testCase = TestCaseFactory.create(GridIcon, props);
            expect(testCase.dom.className).toContain('icon');
          });
        });
      });

      it('doesn\'t render an icon when not defined', () => {
        const testCase = TestCaseFactory.create(GridIcon);
        expect(testCase.dom.className).not.toContain('icon');
      });
    });
  });
});
