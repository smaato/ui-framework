
import { slugifyEach } from '../string/Slug';

// Components
import AppHeaderExample from '../../views/appHeader/AppHeaderExample.jsx';
import ButtonExample from '../../views/button/ButtonExample.jsx';
import ChartExample from '../../views/chart/ChartExample.jsx';
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import GridKpiExample from '../../views/gridKpi/GridKpiExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import LabelExample from '../../views/label/LabelExample.jsx';
import LabeledControlExample from '../../views/labeledControl/LabeledControlExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import TextInputExample from '../../views/textInput/TextInputExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';
import ViewHeaderExample from '../../views/viewHeader/ViewHeaderExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';

// Component route names should match the component name exacty.
const components = [{
  name: 'AppHeader',
  component: AppHeaderExample,
}, {
  name: 'Button',
  component: ButtonExample,
}, {
  name: 'Chart',
  component: ChartExample,
}, {
  name: 'CheckBox',
  component: CheckBoxExample,
}, {
  name: 'Grid',
  component: GridExample,
}, {
  name: 'GridKpi',
  component: GridKpiExample,
}, {
  name: 'Icon',
  component: IconExample,
}, {
  name: 'Label',
  component: LabelExample,
}, {
  name: 'LabeledControl',
  component: LabeledControlExample,
}, {
  name: 'Spinner',
  component: SpinnerExample,
}, {
  name: 'TextInput',
  component: TextInputExample,
}, {
  name: 'TitleBar',
  component: TitleBarExample,
}, {
  name: 'ViewHeader',
  component: ViewHeaderExample,
}];

// Integration names should be descriptive and utilize spaces.
const integrations = [{
  name: 'Grid View',
  component: GridViewExample,
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
