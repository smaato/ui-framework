
import { TestCaseFactory } from 'react-test-kit';
import Ribbon from './Ribbon.jsx';

describe('Ribbon', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(Ribbon, {
        imageSrc: 'some image',
      });
      expect(testCase.dom.className).toContain('ribbon');
    });
  });
});
