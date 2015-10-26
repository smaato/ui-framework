
import {
  CheckBox,
  Grid,
  GridLoadingRow,
  Spinner,
  TitleBar,
  TitleBarButton,
} from './framework';

describe('UI Framework', () => {
  describe('CheckBox', () => {
    it('CheckBox is exported', () => {
      expect(CheckBox).toBeTruthy();
    });
  });

  describe('Grid', () => {
    it('default is exported', () => {
      expect(Grid).toBeTruthy();
    });

    it('GridLoadingRow is exported', () => {
      expect(GridLoadingRow).toBeTruthy();
    });
  });

  describe('Spinner', () => {
    it('default is exported', () => {
      expect(Spinner).toBeTruthy();
    });
  });

  describe('TitleBar', () => {
    it('default is exported', () => {
      expect(TitleBar).toBeTruthy();
    });

    it('TitleBarButton is exported', () => {
      expect(TitleBarButton).toBeTruthy();
    });
  });
});
