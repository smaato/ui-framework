
import { TestCaseFactory } from 'react-test-kit';
import AppTitleContainer from './AppTitleContainer.jsx';

describe('AppTitleContainer', () => {
  describe('Props', () => {
    describe('onClick', () => {
      it('is called when the title element is clicked', () => {
        const props = {
          onClick: jasmine.createSpy('onClick'),
          title: 'Title text',
        };

        const testCase = TestCaseFactory.createFromFunction(AppTitleContainer, props);
        expect(props.onClick).not.toHaveBeenCalled();
        const titleEl = testCase.first('.appTitleContainer__title');
        testCase.trigger('click', titleEl);
        expect(props.onClick).toHaveBeenCalled();
      });
    });
  });
});
