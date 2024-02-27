
import { TestCaseFactory } from 'react-test-kit';

import ChangeLogModal from './ChangeLogModal.jsx';

describe('ChangeLogModal', () => {
  describe('Props', () => {
    describe('isLoadingChanges', () => {
      describe('when true', () => {
        it('loading feedback is rendered inside modal body', () => {
          const props = {
            changes: [],
            isLoadingChanges: true,
            onClose: () => undefined,
          };
          const testCase = TestCaseFactory.create(ChangeLogModal, props);

          expect(testCase.first('.progress')).toBeDefined();
        });
      });

      describe('when false', () => {
        it('no loading feedback is rendered inside modal body', () => {
          const props = {
            changes: [],
            isLoadingChanges: false,
            onClose: () => undefined,
          };
          const testCase = TestCaseFactory.create(ChangeLogModal, props);

          expect(testCase.first('.progress')).not.toBeDefined();
        });
      });
    });

    describe('changes', () => {
      describe('when empty', () => {
        it('text is rendered inside modal body', () => {
          const props = {
            changes: [],
            onClose: () => undefined,
          };
          const testCase = TestCaseFactory.create(ChangeLogModal, props);

          expect(testCase.first('.modalBody').textContent)
            .toContain('No Changes.');
        });
      });

      describe('when not empty', () => {
        const props = {
          changes: [{}, {}],
          onClose: () => undefined,
        };

        describe('every change is rendered inside modal body', () => {
          it('as vertical layout item', () => {
            const testCase = TestCaseFactory.create(ChangeLogModal, props);
            expect(testCase.find(
              '.modalBody .verticalLayoutItem'
            ).length).toBe(2);
          });

          it('with two columns', () => {
            const testCase = TestCaseFactory.create(ChangeLogModal, props);
            const verticalLayoutItems = testCase.find(
              '.modalBody .verticalLayoutItem'
            );

            verticalLayoutItems.forEach((verticalLayoutItem) => {
              expect(testCase.find(
                '.column',
                verticalLayoutItem
              ).length).toBe(2);
            });
          });

          it('with icon in first column', () => {
            const testCase = TestCaseFactory.create(ChangeLogModal, props);
            const verticalLayoutItems = testCase.find(
              '.modalBody .verticalLayoutItem'
            );

            verticalLayoutItems.forEach((verticalLayoutItem) => {
              const icon = testCase.first(
                '.column:nth-child(1) .changeLogModalChangeIcon',
                verticalLayoutItem
              );

              expect(icon).toBeDefined();
            });
          });

          it('with time in first column', () => {
            const testCase = TestCaseFactory.create(ChangeLogModal, props);
            const verticalLayoutItems = testCase.find(
              '.modalBody .verticalLayoutItem'
            );

            verticalLayoutItems.forEach((verticalLayoutItem) => {
              const time = testCase.first(
                '.column:nth-child(1) .changeLogModalChangeTime',
                verticalLayoutItem
              );

              expect(time).toBeDefined();
            });
          });

          it('with text in second column', () => {
            const testCase = TestCaseFactory.create(ChangeLogModal, props);
            const verticalLayoutItems = testCase.find(
              '.modalBody .verticalLayoutItem'
            );

            verticalLayoutItems.forEach((verticalLayoutItem) => {
              const text = testCase.first(
                '.column:nth-child(2) .changeLogModalChangeText',
                verticalLayoutItem
              );

              expect(text).toBeDefined();
            });
          });
        });
      });
    });

    describe('onClose', () => {
      it('is called when the modal close button is clicked', () => {
        const props = {
          changes: [],
          onClose: jasmine.createSpy('onClose'),
        };
        const testCase = TestCaseFactory.create(ChangeLogModal, props);
        const modalCloseButton = testCase.first('.modalHeader__closeButton');

        testCase.trigger('click', modalCloseButton);

        expect(props.onClose).toHaveBeenCalled();
        expect(props.onClose.calls.count()).toEqual(1);
      });

      it('is called when the ok button is clicked', () => {
        const props = {
          changes: [],
          onClose: jasmine.createSpy('onClose'),
        };
        const testCase = TestCaseFactory.create(ChangeLogModal, props);
        const modalOkButton =
          testCase.first('[data-id=changeLogModalOkButton]');

        testCase.trigger('click', modalOkButton);

        expect(props.onClose).toHaveBeenCalled();
        expect(props.onClose.calls.count()).toEqual(1);
      });
    });

    describe('width', () => {
      it('is applied to the modal', () => {
        const props = {
          changes: [],
          width: 200,
        };

        const testCase = TestCaseFactory.create(ChangeLogModal, props);

        expect(testCase.dom.style.width).toBe(`${props.width}px`);
      });
    });
  });
});
