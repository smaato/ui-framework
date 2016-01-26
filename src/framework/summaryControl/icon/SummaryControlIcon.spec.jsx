
import { TestCaseFactory } from 'react-test-kit';
import SummaryControlIcon from './SummaryControlIcon.jsx';
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

    describe('classes', () => {
      it('is applied to the element', () => {
        const props = {
          classes: 'test',
        };
        const testCase =
          TestCaseFactory.createFromFunction(Icon, props);
        expect(testCase.dom.className).toContain(props.classes);
      });
    });
  });
});
