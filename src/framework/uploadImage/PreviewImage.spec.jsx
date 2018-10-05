
import { TestCaseFactory } from 'react-test-kit';
import PreviewImage from './PreviewImage.jsx';

describe('PreviewImage', () => {
  describe('DOM structure', () => {
    it('is an image', () => {
      const testCase = TestCaseFactory.create(PreviewImage);
      expect(testCase.dom.tagName).toBe('IMG');
    });
  });
  describe('Props', () => {
    it('imageBinaryUrl', () => {
      const props = {
        imageBinaryUrl: 'test',
      };

      const testCase = TestCaseFactory.create(PreviewImage, props);
      expect(testCase.dom.src).toContain(props.imageBinaryUrl);
    });
  });
});
