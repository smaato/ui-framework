
import { TestCaseFactory } from 'react-test-kit';

import StatusDropdownOptionIcon from './StatusDropdownOptionIcon.jsx';

describe('StatusDropdownOptionIcon', () => {
  describe('Props', () => {
    describe('type', () => {
      it('ACTIVATE applies the appropriate class', () => {
        const props = {
          type: StatusDropdownOptionIcon.TYPE.ACTIVATE,
        };
        const testCase =
          TestCaseFactory.create(StatusDropdownOptionIcon, props);
        expect(testCase.dom.className).toContain('icon-play-blue');
      });

      it('DEACTIVATE applies the appropriate class', () => {
        const props = {
          type: StatusDropdownOptionIcon.TYPE.DEACTIVATE,
        };
        const testCase =
          TestCaseFactory.create(StatusDropdownOptionIcon, props);
        expect(testCase.dom.className).toContain('icon-pause-blue');
      });

      it('DELETE applies the appropriate class', () => {
        const props = {
          type: StatusDropdownOptionIcon.TYPE.DELETE,
        };
        const testCase =
          TestCaseFactory.create(StatusDropdownOptionIcon, props);
        expect(testCase.dom.className).toContain('icon-remove-circle-blue');
      });

      it('SELECTED applies the appropriate class', () => {
        const props = {
          type: StatusDropdownOptionIcon.TYPE.SELECTED,
        };
        const testCase =
          TestCaseFactory.create(StatusDropdownOptionIcon, props);
        expect(testCase.dom.className).toContain('icon-check');
      });
    });
  });
});
