
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AccountNav from './AccountNav.jsx';

describe('AccountNav', () => {
  describe('Props', () => {
    describe('email', () => {
      it('is rendered', () => {
        const props = {
          email: 'testEmail',
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        expect(
          testCase.first('.accountNav__email').textContent
        ).toBe(props.email);
      });
    });

    describe('pictureUrl', () => {
      it('is set as the src of the img element', () => {
        const props = {
          email: '',
          pictureUrl: '/img/testImage.png',
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        expect(
          testCase.first('img').getAttribute('src')
        ).toBe(props.pictureUrl);
      });
    });

    describe('isOpen', () => {
      it('adds a state class to the dropdown arrow when true', () => {
        const props = {
          email: '',
          isOpen: true,
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        const dropdownArrow = testCase.first('.appHeaderDropdownArrow');
        expect(dropdownArrow.className)
          .toContain('is-app-header-dropdown-arrow-open');
      });

      it('doesn\'t add a dropdown arrow when false', () => {
        const props = {
          email: '',
          isOpen: false,
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        const dropdownArrow = testCase.first('.appHeaderDropdownArrow');
        expect(dropdownArrow.className)
          .not.toContain('is-app-header-dropdown-arrow-open');
      });
    });

    describe('onClick', () => {
      it('is called when the anchor tag is clicked', () => {
        const props = {
          email: '',
          onClick: jasmine.createSpy('onClick'),
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        expect(props.onClick).not.toHaveBeenCalled();
        testCase.trigger('click', testCase.first('a'));
        expect(props.onClick).toHaveBeenCalled();
      });
    });

    describe('disableDropdown', () => {
      it('adds a dropdown arrow when false', () => {
        const props = {
          email: '',
          disableDropdown: false,
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        const dropdownArrow = testCase.first('.appHeaderDropdownArrow');
        expect(dropdownArrow).toBeDefined();
      });

      it('doesn\'t add a dropdown arrow when true', () => {
        const props = {
          email: '',
          disableDropdown: true,
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        const dropdownArrow = testCase.first('.appHeaderDropdownArrow');
        expect(dropdownArrow).not.toBeDefined();
      });
    });

    describe('right', () => {
      it('is rendered as a child', () => {
        const props = {
          email: '',
          right: <div id="test">testRight</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(AccountNav, props);
        expect(testCase.first('#test').textContent).toBe('testRight');
      });
    });
  });
});
