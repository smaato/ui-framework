
import { TestCaseFactory } from 'react-test-kit';
import ImagePreview from './ImagePreview.jsx';

describe('ImagePreview', () => {
  describe('DOM structure', () => {
    it('is an image', () => {
      const testCase = TestCaseFactory.create(ImagePreview);
      expect(testCase.dom.tagName).toBe('IMG');
    });
  });
  describe('Props', () => {
    describe('children', () => {
      it('is rendered when imageBinaryUrl is not passed', () => {
        const props = {
          children: 'test',
        };

        const testCase = TestCaseFactory.create(ImagePreview, props);
        expect(testCase.dom.src).toContain(props.children);
      });
      it('is not rendered when imageBinaryUrl is passed', () => {
        const props = {
          children: 'childrentest',
          imageBinaryUrl: 'imagetest',
        };

        const testCase = TestCaseFactory.create(ImagePreview, props);
        expect(testCase.dom.src).not.toContain(props.children);
      });
    });
    it('imageBinaryUrl', () => {
      const props = {
        imageBinaryUrl: 'test',
      };

      const testCase = TestCaseFactory.create(ImagePreview, props);
      expect(testCase.dom.src).toContain(props.imageBinaryUrl);
    });
  });
});
