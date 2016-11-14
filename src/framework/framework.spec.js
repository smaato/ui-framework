
import {
  AccountNav,
  AccountPicture,
  AddOnControl,
  AddOnDropdown,
  AddOnDropdownOption,
  AddOnLabel,
  AppHeader,
  AppHeaderDivider,
  AppLogo,
  AppNav,
  AppTitle,
  AppTitleContainer,
  BasicButton,
  Body,
  BodyPanel,
  BodyPanelItem,
  Button,
  ButtonGroup,
  CallOutButton,
  CheckBox,
  Column,
  ColumnLayout,
  DateRange,
  DescriptionText,
  Dropdown,
  DropdownOption,
  FieldMessage,
  FiltersControl,
  Form,
  FormFooter,
  FormPanel,
  Grid,
  GridBody,
  GridBodyEditableCell,
  GridControls,
  GridEmptyRow,
  GridFakeRow,
  GridHeader,
  GridHeaderSortableCell,
  GridIcon,
  GridLoadingRow,
  GridRow,
  GroupedButton,
  Heading,
  HollowButton,
  HorizontalLine,
  Kpi,
  KpiNegative,
  KpiPositive,
  Label,
  LabeledField,
  LeftFixedLayout,
  LineChart,
  Link,
  Menu,
  MenuItem,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  Panel,
  PanelLayout,
  PanelProgress,
  PickedList,
  PickedListItem,
  PickedSummary,
  PrimaryButton,
  Progress,
  ProgressModal,
  ProgressSuccess,
  RecycledList,
  SearchBox,
  StatusDropdown,
  StatusDropdownOption,
  StickyGrid,
  SubLabel,
  SummaryControl,
  Text,
  TextArea,
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
  name: 'AddOnDropdown',
  component: AddOnDropdown,
}, {
  name: 'AddOnDropdownOption',
  component: AddOnDropdownOption,
}, {
  name: 'AddOnLabel',
  component: AddOnLabel,
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
  name: 'BasicButton',
  component: BasicButton,
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
  name: 'ButtonGroup',
  component: ButtonGroup,
}, {
  name: 'CallOutButton',
  component: CallOutButton,
}, {
  name: 'CheckBox',
  component: CheckBox,
}, {
  name: 'Column',
  component: Column,
}, {
  name: 'ColumnLayout',
  component: ColumnLayout,
}, {
  name: 'DateRange',
  component: DateRange,
}, {
  name: 'DescriptionText',
  component: DescriptionText,
}, {
  name: 'Dropdown',
  component: Dropdown,
}, {
  name: 'DropdownOption',
  component: DropdownOption,
}, {
  name: 'FieldMessage',
  component: FieldMessage,
}, {
  name: 'FiltersControl',
  component: FiltersControl,
}, {
  name: 'Form',
  component: Form,
}, {
  name: 'FormFooter',
  component: FormFooter,
}, {
  name: 'FormPanel',
  component: FormPanel,
}, {
  name: 'Grid',
  component: Grid,
}, {
  name: 'GridBody',
  component: GridBody,
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
  name: 'GridFakeRow',
  component: GridFakeRow,
}, {
  name: 'GridHeader',
  component: GridHeader,
}, {
  name: 'GridHeaderSortableCell',
  component: GridHeaderSortableCell,
}, {
  name: 'GridIcon',
  component: GridIcon,
}, {
  name: 'GridLoadingRow',
  component: GridLoadingRow,
}, {
  name: 'GridRow',
  component: GridRow,
}, {
  name: 'GroupedButton',
  component: GroupedButton,
}, {
  name: 'Heading',
  component: Heading,
}, {
  name: 'HollowButton',
  component: HollowButton,
}, {
  name: 'HorizontalLine',
  component: HorizontalLine,
}, {
  name: 'Kpi',
  component: Kpi,
}, {
  name: 'KpiNegative',
  component: KpiNegative,
}, {
  name: 'KpiPositive',
  component: KpiPositive,
}, {
  name: 'Label',
  component: Label,
}, {
  name: 'LabeledField',
  component: LabeledField,
}, {
  name: 'LeftFixedLayout',
  component: LeftFixedLayout,
}, {
  name: 'LineChart',
  component: LineChart,
}, {
  name: 'Link',
  component: Link,
}, {
  name: 'Menu',
  component: Menu,
}, {
  name: 'MenuItem',
  component: MenuItem,
}, {
  name: 'Modal',
  component: Modal,
}, {
  name: 'ModalBody',
  component: ModalBody,
}, {
  name: 'ModalConfirmationBody',
  component: ModalConfirmationBody,
}, {
  name: 'ModalConfirmationFooter',
  component: ModalConfirmationFooter,
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
  name: 'Panel',
  component: Panel,
}, {
  name: 'PanelLayout',
  component: PanelLayout,
}, {
  name: 'PanelProgress',
  component: PanelProgress,
}, {
  name: 'PickedList',
  component: PickedList,
}, {
  name: 'PickedListItem',
  component: PickedListItem,
}, {
  name: 'PickedSummary',
  component: PickedSummary,
}, {
  name: 'PrimaryButton',
  component: PrimaryButton,
}, {
  name: 'Progress',
  component: Progress,
}, {
  name: 'ProgressModal',
  component: ProgressModal,
}, {
  name: 'ProgressSuccess',
  component: ProgressSuccess,
}, {
  name: 'RecycledList',
  component: RecycledList,
}, {
  name: 'SearchBox',
  component: SearchBox,
}, {
  name: 'StatusDropdown',
  component: StatusDropdown,
}, {
  name: 'StatusDropdownOption',
  component: StatusDropdownOption,
}, {
  name: 'StickyGrid',
  component: StickyGrid,
}, {
  name: 'SubLabel',
  component: SubLabel,
}, {
  name: 'SummaryControl',
  component: SummaryControl,
}, {
  name: 'Text',
  component: Text,
}, {
  name: 'TextArea',
  component: TextArea,
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
