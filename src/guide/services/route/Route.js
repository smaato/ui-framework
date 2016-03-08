
import { slugifyEach } from '../string/Slug';

// Components
import AddOnControlExample
  from '../../views/addOnControl/AddOnControlExample.jsx';
import AppHeaderExample from '../../views/appHeader/AppHeaderExample.jsx';
import BodyExample from '../../views/body/BodyExample.jsx';
import ButtonExample from '../../views/button/ButtonExample.jsx';
import ButtonGroupExample from '../../views/buttonGroup/ButtonGroupExample.jsx';
import ChartExample from '../../views/chart/ChartExample.jsx';
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import DropdownExample from '../../views/dropdown/DropdownExample.jsx';
import FieldMessageExample
  from '../../views/fieldMessage/FieldMessageExample.jsx';
import FormExample from '../../views/form/FormExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import HtmlElementsExample
  from '../../views/htmlElements/HtmlElementsExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import KpiExample from '../../views/kpi/KpiExample.jsx';
import LabeledControlExample
  from '../../views/labeledControl/LabeledControlExample.jsx';
import LabeledFieldExample
  from '../../views/labeledField/LabeledFieldExample.jsx';
import LabelExample from '../../views/label/LabelExample.jsx';
import LinkExample from '../../views/link/LinkExample.jsx';
import MenuExample from '../../views/menu/MenuExample.jsx';
import ModalExample from '../../views/modal/ModalExample.jsx';
import OrganizationSwitcherExample
  from '../../views/organizationSwitcher/OrganizationSwitcherExample.jsx';
import PanelExample from '../../views/panel/PanelExample.jsx';
import SearchBoxExample
  from '../../views/searchBox/SearchBoxExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import SummaryControlExample
  from '../../views/summaryControl/SummaryControlExample.jsx';
import TextExample from '../../views/text/TextExample.jsx';
import TextAreaExample from '../../views/textArea/TextAreaExample.jsx';
import TextInputExample from '../../views/textInput/TextInputExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';
import VerticalLayoutExample
  from '../../views/verticalLayout/VerticalLayoutExample.jsx';
import ViewHeaderExample from '../../views/viewHeader/ViewHeaderExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';
import TitledViewExample from '../../views/titledView/TitledViewExample.jsx';

// Component route names should match the component name exacty.
const components = [{
  name: 'AddOnControl',
  source: 'views/addOnControl/AddOnControlExample.jsx',
  component: AddOnControlExample,
}, {
  name: 'AppHeader',
  source: 'views/appHeader/AppHeaderExample.jsx',
  component: AppHeaderExample,
}, {
  name: 'Body',
  source: 'views/body/BodyExample.jsx',
  component: BodyExample,
}, {
  name: 'Button',
  source: 'views/button/ButtonExample.jsx',
  component: ButtonExample,
}, {
  name: 'ButtonGroup',
  source: 'views/buttonGroup/ButtonGroupExample.jsx',
  component: ButtonGroupExample,
}, {
  name: 'Chart',
  source: 'views/chart/ChartExample.jsx',
  component: ChartExample,
}, {
  name: 'CheckBox',
  source: 'views/checkBox/CheckBoxExample.jsx',
  component: CheckBoxExample,
}, {
  name: 'Dropdown',
  source: 'views/dropdown/DropdownExample.jsx',
  component: DropdownExample,
}, {
  name: 'FieldMessage',
  source: 'views/fieldMessage/FieldMessageExample.jsx',
  component: FieldMessageExample,
}, {
  name: 'Form',
  source: 'views/form/FormExample.jsx',
  component: FormExample,
}, {
  name: 'Grid',
  source: 'views/grid/GridExample.jsx',
  component: GridExample,
}, {
  name: 'HTML elements',
  source: 'views/htmlElements/htmlElementsExample.jsx',
  component: HtmlElementsExample,
}, {
  name: 'Icon',
  source: 'views/icon/IconExample.jsx',
  component: IconExample,
}, {
  name: 'Kpi',
  source: 'views/kpi/KpiExample.jsx',
  component: KpiExample,
}, {
  name: 'LabeledControl',
  source: 'views/labeledControl/LabeledControlExample.jsx',
  component: LabeledControlExample,
}, {
  name: 'LabeledField',
  source: 'views/labeledField/LabeledFieldExample.jsx',
  component: LabeledFieldExample,
}, {
  name: 'Label',
  source: 'views/label/LabelExample.jsx',
  component: LabelExample,
}, {
  name: 'Link',
  source: 'views/link/LinkExample.jsx',
  component: LinkExample,
}, {
  name: 'Menu',
  source: 'views/menu/MenuExample.jsx',
  component: MenuExample,
}, {
  name: 'Modal',
  source: 'views/modal/ModalExample.jsx',
  component: ModalExample,
}, {
  name: 'OrganizationSwitcher',
  source: 'views/organizationSwitcher/OrganizationSwitcherExample.jsx',
  component: OrganizationSwitcherExample,
}, {
  name: 'Panel',
  source: 'views/panel/PanelExample.jsx',
  component: PanelExample,
}, {
  name: 'SearchBox',
  source: 'views/searchBox/SearchBoxExample.jsx',
  component: SearchBoxExample,
}, {
  name: 'Spinner',
  source: 'views/spinner/SpinnerExample.jsx',
  component: SpinnerExample,
}, {
  name: 'SummaryControl',
  source: 'views/summaryControl/SummaryControlExample.jsx',
  component: SummaryControlExample,
}, {
  name: 'Text',
  source: 'views/text/TextExample.jsx',
  component: TextExample,
}, {
  name: 'TextArea',
  source: 'views/textArea/TextAreaExample.jsx',
  component: TextAreaExample,
}, {
  name: 'TextInput',
  source: 'views/textInput/TextInputExample.jsx',
  component: TextInputExample,
}, {
  name: 'TitleBar',
  source: 'views/titleBar/TitleBarExample.jsx',
  component: TitleBarExample,
}, {
  name: 'VerticalLayout',
  source: 'views/verticalLayout/VerticalLayoutExample.jsx',
  component: VerticalLayoutExample,
}, {
  name: 'ViewHeader',
  source: 'views/viewHeader/ViewHeaderExample.jsx',
  component: ViewHeaderExample,
}];

// Integration names should be descriptive and utilize spaces.
const integrations = [{
  name: 'Grid View',
  source: 'views/gridView/GridViewExample.jsx',
  component: GridViewExample,
}, {
  name: 'Titled View',
  source: 'views/titledView/TitledViewExample.jsx',
  component: TitledViewExample,
}];

// Protoypes should point to HTML files and can be named whatever you want.
const prototypes = [{
  name: 'Grid View',
  href: '/prototype/gridView/gridView.html',
}];

export default {
  components: slugifyEach(components, 'name', 'path'),
  integrations: slugifyEach(integrations, 'name', 'path'),
  prototypes: prototypes.slice(),
  getAppRoutes: function getAppRoutes() {
    const list = this.components.concat(this.integrations);
    return list;
  },
};
