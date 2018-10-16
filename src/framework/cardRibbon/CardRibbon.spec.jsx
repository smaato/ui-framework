
import { TestCaseFactory } from 'react-test-kit';
import CardRibbon from './CardRibbon.jsx';

describe('CardRibbon', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(CardRibbon, {
        imageSrc: 'some image',
      });
      expect(testCase.dom.className).toContain('cardRibbon');
    });
  });
  describe('props', () => {
    describe('imageSrc', () => {
      it('adds proper value', () => {
        const testCase = TestCaseFactory.create(CardRibbon, {
          imageSrc: 'some image',
        });
        expect(testCase.first('img').getAttribute('src'))
        .toEqual('some image');
      });
    });
  });
});
