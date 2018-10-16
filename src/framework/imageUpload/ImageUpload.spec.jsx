
import { TestCaseFactory } from 'react-test-kit';
import ImageUpload from './ImageUpload.jsx';

describe('ImageUpload', () => {
  describe('DOM structure', () => {
    it('is an div element that contains an input', () => {
      const testCase = TestCaseFactory.create(ImageUpload);
      expect(testCase.dom.tagName).toBe('DIV');
      expect(testCase.dom.children[0].tagName).toBe('INPUT');
    });

    it('close button is defined', () => {
      const testCase = TestCaseFactory.create(ImageUpload);
      expect(testCase.first('.imageUpload__closeButton')).toBeDefined();
    });
  });
  describe('Props', () => {
    describe('children', () => {
      it('shows preview image', () => {
        const props = {
          children: 'test',
          onChange: () => null,
        };

        const testCase = TestCaseFactory.create(ImageUpload, props);

        expect(testCase.dom.className).toBe('imageUpload');
        expect(testCase.dom.children[1].className).not.toContain('hidden');
      });
    });
    it('onChange', () => {
      const props = {
        onChange: jasmine.createSpy('onChange'),
      };

      const testCase = TestCaseFactory.create(ImageUpload, props);
      testCase.element.hasLoaded('test');

      expect(props.onChange).toHaveBeenCalled();
    });
    it('validateImage', () => {
      const props = {
        onChange: () => null,
        validateImage: jasmine.createSpy('validateImage'),
      };

      const testCase = TestCaseFactory.create(ImageUpload, props);
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

      const testCase = TestCaseFactory.create(ImageUpload, props);

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

      const testCase = TestCaseFactory.create(ImageUpload, props);
      testCase.element.hasLoaded('test');

      expect(testCase.first('.imageUpload--hidden').tagName).toBe('INPUT');
    });
    it('should show img when isloaded is true and hasErrors is false', () => {
      const props = {
        onChange: () => null,
      };

      const testCase = TestCaseFactory.create(ImageUpload, props);
      testCase.element.hasLoaded('test');

      expect(testCase.dom.className).toBe('imageUpload');
      expect(testCase.dom.children[1].className).not.toContain('hidden');
    });
  });
});
