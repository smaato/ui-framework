
import { TestCaseFactory } from 'react-test-kit';
import GridIcon from './GridIcon.jsx';

describe('GridIcon', () => {
  describe('Props', () => {
    describe('onClick', () => {
      it('receives data as argument', () => {
        const onClick = jasmine.createSpy('onClick');
        const props = {
          data: {},
          onClick,
        };

        const testCase = TestCaseFactory.create(GridIcon, props);
        testCase.trigger('click');
        expect(onClick).toHaveBeenCalledWith(
          props.data,
          jasmine.any(Object) // SyntheticEvent
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
