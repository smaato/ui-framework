
import { TestCaseFactory } from 'react-test-kit';
import ChartDot from './ChartDot.jsx';

describe('ChartDot', () => {
  describe('Props', () => {
    describe('color', () => {
      it('is applied to the dot', () => {
        const props = {
          color: 'white',
        };
        const testCase = TestCaseFactory.create(ChartDot, props);
        const dotStyle = testCase.dom.getAttribute('style').toLowerCase();

        expect(dotStyle).toContain(`background-color: ${props.color}`);
        expect(dotStyle).toContain(`border: 1px solid ${props.color}`);
      });
    });
  });
});
