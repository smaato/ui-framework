
import { TestCaseFactory } from 'react-test-kit';
import SummaryControlIconPaperclip from './SummaryControlIconPaperclip.jsx';

describe('SummaryControlIconPaperclip', () => {
  it('is an Icon', () => {
    const testCase =
      TestCaseFactory.createFromFunction(SummaryControlIconPaperclip);
    expect(testCase.dom.className).toContain('icon');
  });
});
