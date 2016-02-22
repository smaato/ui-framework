
import { TestCaseFactory } from 'react-test-kit';
import SummaryControlIcon from './SummaryControlIcon.jsx';
import SummaryControlIconCheck from './SummaryControlIconCheck.jsx';
import SummaryControlIconPaperclip from './SummaryControlIconPaperclip.jsx';
import Icon from '../../icon/Icon.jsx';

describe('SummaryControlIcon', () => {
  describe('Props', () => {
    describe('iconType', () => {
      it('is used to render the root element', () => {
        const props = {
          iconType: Icon,
        };
        const testCase =
          TestCaseFactory.createFromFunction(SummaryControlIcon, props);
        expect(testCase.dom.className).toContain('icon');
      });
    });
  });
});

// Test SummaryControlIcon subcomponents.

const summaryControlIcons = [{
  name: 'SummaryControlIconCheck',
  component: SummaryControlIconCheck,
}, {
  name: 'SummaryControlIconPaperclip',
  component: SummaryControlIconPaperclip,
}];

for (let i = 0, length = summaryControlIcons.length; i < length; i++) {
  const summaryControlIcon = summaryControlIcons[i];
  describe(summaryControlIcon.name, () => { // eslint-disable-line no-loop-func
    it('is an Icon', () => {
      const testCase =
        TestCaseFactory.createFromFunction(summaryControlIcon.component);
      expect(testCase.dom.className).toContain('icon');
    });
  });
}
