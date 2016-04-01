
import { TestCaseFactory } from 'react-test-kit';
import OrganizationSwitcherItem from './OrganizationSwitcherItem.jsx';

describe('OrganizationSwitcherItem', () => {
  describe('Props', () => {
    describe('id', () => {
      it('is rendered into the component', () => {
        const props = {
          id: 'An unlikely ID value',
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(testCase.dom.textContent).toContain(props.id);
      });
    });

    describe('name', () => {
      it('is rendered into the component', () => {
        const props = {
          name: 'An unlikely name value',
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(testCase.dom.textContent).toContain(props.name);
      });
    });

    describe('onSelect', () => {
      it('is called when the switch element is clicked', () => {
        const props = {
          onSelect: jasmine.createSpy('onSelect'),
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(props.onSelect).not.toHaveBeenCalled();
        const switchEl = testCase
          .first('.organizationSwitcherItem__switchButton');
        testCase.trigger('click', switchEl);
        expect(props.onSelect).toHaveBeenCalled();
      });

      it('is called with the data prop', () => {
        const props = {
          data: 'test',
          onSelect: jasmine.createSpy('onSelect'),
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(props.onSelect).not.toHaveBeenCalled();
        const switchEl = testCase
          .first('.organizationSwitcherItem__switchButton');
        testCase.trigger('click', switchEl);
        expect(props.onSelect).toHaveBeenCalledWith(props.data);
      });
    });

    describe('message', () => {
      it('is rendered into the component', () => {
        const props = {
          message: 'Test message',
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(testCase.dom.textContent).toContain(props.message);
      });

      it('prevents any additional child nodes from being rendered', () => {
        const props = {
          message: 'Test message',
        };

        const testCase = TestCaseFactory.createFromFunction(
          OrganizationSwitcherItem,
          props
        );
        expect(testCase.dom.childNodes.length).toBe(1);
      });
    });
  });
});
