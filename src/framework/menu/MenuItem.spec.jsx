
import { TestCaseFactory } from 'react-test-kit';
import MenuItem from './MenuItem.jsx';

describe('MenuItem', () => {
  describe('Props', () => {
    describe('label', () => {
      it('is rendered', () => {
        const props = {
          label: 'test',
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        expect(testCase.dom.textContent).toContain(props.label);
      });
    });

    describe('meta', () => {
      it('is rendered', () => {
        const props = {
          meta: 'test',
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        expect(testCase.dom.textContent).toContain(props.meta);
      });
    });

    describe('actions', () => {
      it('is rendered', () => {
        const props = {
          actions: 'test',
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        expect(testCase.dom.textContent).toContain(props.actions);
      });
    });

    describe('onClick', () => {
      it('is called with data when the component is clicked', () => {
        const props = {
          data: {},
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        testCase.trigger('click');
        expect(props.onClick).toHaveBeenCalledWith(props.data);
      });

      it('applies the appropriate class', () => {
        const props = {
          onClick: () => undefined,
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        expect(testCase.dom.className).toContain('menuItem--clickable');
      });
    });

    describe('isSelected', () => {
      it('applies the appropriate class', () => {
        const props = {
          isSelected: true,
        };
        const testCase = TestCaseFactory.create(MenuItem, props);
        expect(testCase.dom.className).toContain('is-menu-item-selected');
      });
    });
  });
});
