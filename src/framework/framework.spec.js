
import {
  AccountNav,
  AccountPicture,
  AddOnControl,
  AppHeader,
  AppHeaderDivider,
  AppLogo,
  AppNav,
  AppTitle,
  AppTitleContainer,
  Body,
  BodyPanel,
  BodyPanelItem,
  Button,
  CallOutButton,
  Chart,
  CheckBox,
  DateRange,
  FiltersControl,
  Grid,
  GridBodyEditableCell,
  GridControls,
  GridEmptyRow,
  GridHeader,
  GridHeaderSortableCell,
  GridKpi,
  GridKpiNegative,
  GridKpiPositive,
  GridLoadingRow,
  GridRow,
  HollowButton,
  Icon,
  IconCog,
  IconEllipsis,
  Label,
  LabeledControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  PrimaryButton,
  SearchBox,
  Spinner,
  StickyGrid,
  TextInput,
  TitleBar,
  VerticalLayout,
  ViewHeader,
  ViewHeaderNav,
} from './framework';

const components = [{
  name: 'AccountNav',
  component: AccountNav,
}, {
  name: 'AccountPicture',
  component: AccountPicture,
}, {
  name: 'AddOnControl',
  component: AddOnControl,
}, {
  name: 'AppHeader',
  component: AppHeader,
}, {
  name: 'AppHeaderDivider',
  component: AppHeaderDivider,
}, {
  name: 'AppLogo',
  component: AppLogo,
}, {
  name: 'AppNav',
  component: AppNav,
}, {
  name: 'AppTitle',
  component: AppTitle,
}, {
  name: 'AppTitleContainer',
  component: AppTitleContainer,
}, {
  name: 'Body',
  component: Body,
}, {
  name: 'BodyPanel',
  component: BodyPanel,
}, {
  name: 'BodyPanelItem',
  component: BodyPanelItem,
}, {
  name: 'Button',
  component: Button,
}, {
  name: 'CallOutButton',
  component: CallOutButton,
}, {
  name: 'Chart',
  component: Chart,
}, {
  name: 'CheckBox',
  component: CheckBox,
}, {
  name: 'DateRange',
  component: DateRange,
}, {
  name: 'FiltersControl',
  component: FiltersControl,
}, {
  name: 'Grid',
  component: Grid,
}, {
  name: 'GridBodyEditableCell',
  component: GridBodyEditableCell,
}, {
  name: 'GridControls',
  component: GridControls,
}, {
  name: 'GridEmptyRow',
  component: GridEmptyRow,
}, {
  name: 'GridHeader',
  component: GridHeader,
}, {
  name: 'GridHeaderSortableCell',
  component: GridHeaderSortableCell,
}, {
  name: 'GridKpi',
  component: GridKpi,
}, {
  name: 'GridKpiNegative',
  component: GridKpiNegative,
}, {
  name: 'GridKpiPositive',
  component: GridKpiPositive,
}, {
  name: 'GridLoadingRow',
  component: GridLoadingRow,
}, {
  name: 'GridRow',
  component: GridRow,
}, {
  name: 'HollowButton',
  component: HollowButton,
}, {
  name: 'Icon',
  component: Icon,
}, {
  name: 'IconCog',
  component: IconCog,
}, {
  name: 'IconEllipsis',
  component: IconEllipsis,
}, {
  name: 'Label',
  component: Label,
}, {
  name: 'LabeledControl',
  component: LabeledControl,
}, {
  name: 'Modal',
  component: Modal,
}, {
  name: 'ModalBody',
  component: ModalBody,
}, {
  name: 'ModalFooter',
  component: ModalFooter,
}, {
  name: 'ModalHeader',
  component: ModalHeader,
}, {
  name: 'ModalOverlay',
  component: ModalOverlay,
}, {
  name: 'OrganizationSwitcher',
  component: OrganizationSwitcher,
}, {
  name: 'OrganizationSwitcherItem',
  component: OrganizationSwitcherItem,
}, {
  name: 'PrimaryButton',
  component: PrimaryButton,
}, {
  name: 'SearchBox',
  component: SearchBox,
}, {
  name: 'Spinner',
  component: Spinner,
}, {
  name: 'StickyGrid',
  component: StickyGrid,
}, {
  name: 'TextInput',
  component: TextInput,
}, {
  name: 'TitleBar',
  component: TitleBar,
}, {
  name: 'VerticalLayout',
  component: VerticalLayout,
}, {
  name: 'ViewHeader',
  component: ViewHeader,
}, {
  name: 'ViewHeaderNav',
  component: ViewHeaderNav,
}];

describe('UI Framework components', () => {
  for (let i = 0, length = components.length; i < length; i++) {
    const component = components[i];
    describe(component.name, () => { // eslint-disable-line no-loop-func
      it('is exported', () => {
        expect(component.component).toEqual(jasmine.any(Function));
      });
    });
  }
});
