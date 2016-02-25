
import { TestCaseFactory } from 'react-test-kit';
import Icon from './Icon.jsx';
import IconAsterisk from './IconAsterisk.jsx';
import IconCheck from './IconCheck.jsx';
import IconCog from './IconCog.jsx';
import IconEllipsis from './IconEllipsis.jsx';
import IconLink from './IconLink.jsx';
import IconPaperclip from './IconPaperclip.jsx';

const icons = [{
  name: 'Icon',
  component: Icon,
}, {
  name: 'IconAsterisk',
  component: IconAsterisk,
}, {
  name: 'IconCheck',
  component: IconCheck,
}, {
  name: 'IconCog',
  component: IconCog,
}, {
  name: 'IconEllipsis',
  component: IconEllipsis,
}, {
  name: 'IconLink',
  component: IconLink,
}, {
  name: 'IconPaperclip',
  component: IconPaperclip,
}];

for (let i = 0, length = icons.length; i < length; i++) {
  const icon = icons[i];
  describe(icon.name, () => { // eslint-disable-line no-loop-func
    describe('DOM structure', () => {
      it('is one span element', () => {
        const testCase =
          TestCaseFactory.createFromFunction(icon.component);
        expect(testCase.dom.tagName).toBe('SPAN');
      });

      it('is an Icon', () => {
        const testCase =
          TestCaseFactory.createFromFunction(icon.component);
        expect(testCase.dom.className).toContain('icon');
      });
    });

    describe('Props', () => {
      describe('classes', () => {
        it('is applied to the element', () => {
          const props = {
            classes: 'test',
          };
          const testCase =
            TestCaseFactory.createFromFunction(icon.component, props);
          expect(testCase.dom.className).toContain(props.classes);
        });
      });

      describe('onClick', () => {
        let testCase;
        let onClick;

        beforeEach(() => {
          onClick = jasmine.createSpy('onClick');

          testCase =
            TestCaseFactory.createFromFunction(icon.component, {onClick});

          testCase.trigger('click');
        });

        it('is called once', () => {
          expect(onClick.calls.count()).toEqual(1);
        });

        it('is called with event object as an argument', () => {
          expect(onClick).toHaveBeenCalledWith(
            jasmine.any(Object), // SyntheticEvent
            jasmine.any(String) // React ID
          );
        });

        it('adds a clickable modifier class', () => {
          expect(testCase.dom.className).toContain('icon--clickable');
        });
      });
    });
  });
}
