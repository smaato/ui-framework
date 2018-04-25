
import { TestCaseFactory } from 'react-test-kit';
import Card from './Card.jsx';

describe('Card', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(Card);
      expect(testCase.dom.getAttribute('class')).toContain('card');
    });
  });
});
