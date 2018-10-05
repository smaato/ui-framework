
import { TestCaseFactory } from 'react-test-kit';
import UploadImage from './UploadImage.jsx';

describe('UploadImage', () => {
  describe('DOM structure', () => {
    it('is an div element that contains an input', () => {
      const testCase = TestCaseFactory.create(UploadImage);
      expect(testCase.dom.tagName).toBe('DIV');
      expect(testCase.dom.children[0].tagName).toBe('INPUT');
    });

    it('close button is defined', () => {
      const testCase = TestCaseFactory.create(UploadImage);
      expect(testCase.first('.uploadImage__closeButton')).toBeDefined();
    });
  });
  describe('Props', () => {
    it('onChange', () => {
      const props = {
        onChange: jasmine.createSpy('onChange'),
      };

      const testCase = TestCaseFactory.create(UploadImage, props);
      testCase.element.hasLoaded('test');

      expect(props.onChange).toHaveBeenCalled();
    });
    it('validateImage', () => {
      const props = {
        onChange: () => null,
        validateImage: jasmine.createSpy('validateImage'),
      };

      const testCase = TestCaseFactory.create(UploadImage, props);
      testCase.element.hasLoaded('test');

      expect(props.validateImage).toHaveBeenCalled();
    });
  });

  describe('When the user upload a file', () => {
    it('should read the file properly', () => {
      const props = {
        onChange: jasmine.createSpy('onChange'),
      };
      const spy = spyOn(FileReader.prototype, 'readAsDataURL');

      const testCase = TestCaseFactory.create(UploadImage, props);

      testCase.trigger('change',
        testCase.first('input'),
        {
          target: {
            files: ['my file'],
          },
        });
      expect(spy).toHaveBeenCalledWith('my file');
    });
  });

  describe('when the images has finished loaded', () => {
    it('should hide input when isloaded is true and hasErrors is false', () => {
      const props = {
        onChange: () => null,
      };

      const testCase = TestCaseFactory.create(UploadImage, props);
      testCase.element.hasLoaded('test');

      expect(testCase.first('.hidden').tagName).toBe('INPUT');
    });
    it('should show img when isloaded is true and hasErrors is false', () => {
      const props = {
        onChange: () => null,
      };

      const testCase = TestCaseFactory.create(UploadImage, props);
      testCase.element.hasLoaded('test');

      expect(testCase.dom.children[1].className).toBe('uploadImage');
      expect(testCase.dom.children[1].className).not.toContain('hidden');
    });
  });
});
