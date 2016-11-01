
import { TestCaseFactory } from 'react-test-kit';
import HorizontalLine from './HorizontalLine.jsx';

describe('HorizontalLine', () => {
  it('is rendered with appropriate class', () => {
    const testCase = TestCaseFactory.create(HorizontalLine, {});
    expect(testCase.dom.className).toBe('horizontalLine');
  });
});
