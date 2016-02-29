
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
  BasicButton,
  Body,
  BodyPanel,
  BodyPanelItem,
  Button,
  ButtonGroup,
  CallOutButton,
  Chart,
  CheckBox,
  DateRange,
  DescriptionText,
  FieldMessage,
  FiltersControl,
  Form,
  Grid,
  GridBodyEditableCell,
  GridControls,
  GridEmptyRow,
  GridHeader,
  GridHeaderSortableCell,
  GridIcon,
  GridIconEdit,
  GridIconOptions,
  GridLoadingRow,
  GridRow,
  GroupedButton,
  HollowButton,
  Icon,
  IconAsterisk,
  IconCheck,
  IconCog,
  IconEllipsis,
  IconLink,
  IconPaperclip,
  Kpi,
  KpiNegative,
  KpiPositive,
  Label,
  LabeledControl,
  LabeledField,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  PrimaryButton,
  SearchBox,
  Spinner,
  StickyGrid,
  SubLabel,
  SummaryControl,
  SummaryControlIcon,
  SummaryControlIconCheck,
  SummaryControlIconPaperclip,
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
  name: 'Chart',
  component: Chart,
}, {
  name: 'CheckBox',
  component: CheckBox,
}, {
  name: 'DateRange',
  component: DateRange,
}, {
  name: 'DescriptionText',
  component: DescriptionText,
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
  name: 'GridIcon',
  component: GridIcon,
}, {
  name: 'GridIconEdit',
  component: GridIconEdit,
}, {
  name: 'GridIconOptions',
  component: GridIconOptions,
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
  name: 'HollowButton',
  component: HollowButton,
}, {
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
  name: 'LabeledControl',
  component: LabeledControl,
}, {
  name: 'LabeledField',
  component: LabeledField,
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
  name: 'SubLabel',
  component: SubLabel,
}, {
  name: 'SummaryControl',
  component: SummaryControl,
}, {
  name: 'SummaryControlIcon',
  component: SummaryControlIcon,
}, {
  name: 'SummaryControlIconCheck',
  component: SummaryControlIconCheck,
}, {
  name: 'SummaryControlIconPaperclip',
  component: SummaryControlIconPaperclip,
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
