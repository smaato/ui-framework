
import { TestCaseFactory } from 'react-test-kit';
import GridIcon from './GridIcon.jsx';
import Icon from '../../icon/Icon.jsx';

describe('GridIcon', () => {
  describe('Props', () => {
    describe('iconType', () => {
      it('is used to render the root element', () => {
        const props = {
          iconType: Icon,
        };
        const testCase =
          TestCaseFactory.createFromFunction(GridIcon, props);
        expect(testCase.dom.className).toContain('icon');
      });
    });

    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const props = {
          iconType: Icon,
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
  });
});
