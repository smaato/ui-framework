
import {
  AppHeader,
  Button,
  CheckBox,
  CallOutButton,
  DateRange,
  Grid,
  GridLoadingRow,
  HollowButton,
  Icon,
  IconCog,
  IconEllipsis,
  LabeledControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PrimaryButton,
  Spinner,
  TitleBar,
  VerticalLayout,
  ViewHeader,
} from './framework';

describe('UI Framework components', () => {
  describe('AppHeader', () => {
    it('is exported', () => {
      expect(AppHeader).toEqual(jasmine.any(Function));
    });
  });

  describe('(buttons module)', () => {
    describe('Button', () => {
      it('is exported', () => {
        expect(Button).toEqual(jasmine.any(Function));
      });
    });

    describe('HollowButton', () => {
      it('is exported', () => {
        expect(HollowButton).toEqual(jasmine.any(Function));
      });
    });

    describe('PrimaryButton', () => {
      it('is exported', () => {
        expect(PrimaryButton).toEqual(jasmine.any(Function));
      });
    });

    describe('CallOutButton', () => {
      it('is exported', () => {
        expect(CallOutButton).toEqual(jasmine.any(Function));
      });
    });
  });

  describe('CheckBox', () => {
    it('is exported', () => {
      expect(CheckBox).toEqual(jasmine.any(Function));
    });
  });

  describe('DateRange', () => {
    it('is exported', () => {
      expect(DateRange).toEqual(jasmine.any(Function));
    });
  });

  describe('(modal module)', () => {
    describe('Modal', () => {
      it('is exported', () => {
        expect(Modal).toEqual(jasmine.any(Function));
      });
    });

    describe('ModalBody', () => {
      it('is exported', () => {
        expect(ModalBody).toEqual(jasmine.any(Function));
      });
    });

    describe('ModalFooter', () => {
      it('is exported', () => {
        expect(ModalFooter).toEqual(jasmine.any(Function));
      });
    });

    describe('ModalHeader', () => {
      it('is exported', () => {
        expect(ModalHeader).toEqual(jasmine.any(Function));
      });
    });

    describe('ModalOverlay', () => {
      it('is exported', () => {
        expect(ModalOverlay).toEqual(jasmine.any(Function));
      });
    });
  });

  describe('(grid module)', () => {
    describe('Grid', () => {
      it('is exported', () => {
        expect(Grid).toEqual(jasmine.any(Function));
      });
    });

    describe('GridLoadingRow', () => {
      it('is exported', () => {
        expect(GridLoadingRow).toEqual(jasmine.any(Function));
      });
    });
  });

  describe('Spinner', () => {
    it('is exported', () => {
      expect(Spinner).toEqual(jasmine.any(Function));
    });
  });

  describe('Icon', () => {
    it('is exported', () => {
      expect(Icon).toEqual(jasmine.any(Function));
    });
  });

  describe('IconCog', () => {
    it('is exported', () => {
      expect(IconCog).toEqual(jasmine.any(Function));
    });
  });

  describe('IconEllipsis', () => {
    it('is exported', () => {
      expect(IconEllipsis).toEqual(jasmine.any(Function));
    });
  });

  describe('LabeledControl', () => {
    it('is exported', () => {
      expect(LabeledControl).toEqual(jasmine.any(Function));
    });
  });

  describe('TitleBar', () => {
    it('is exported', () => {
      expect(TitleBar).toEqual(jasmine.any(Function));
    });
  });

  describe('VerticalLayout', () => {
    it('is exported', () => {
      expect(VerticalLayout).toEqual(jasmine.any(Function));
    });
  });

  describe('ViewHeader', () => {
    it('is exported', () => {
      expect(ViewHeader).toEqual(jasmine.any(Function));
    });
  });
});
