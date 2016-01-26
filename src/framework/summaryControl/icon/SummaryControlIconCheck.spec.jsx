
import { TestCaseFactory } from 'react-test-kit';
import SummaryControlIconCheck from './SummaryControlIconCheck.jsx';

describe('SummaryControlIconCheck', () => {
  it('is an Icon', () => {
    const testCase =
      TestCaseFactory.createFromFunction(SummaryControlIconCheck);
    expect(testCase.dom.className).toContain('icon');
  });
});
